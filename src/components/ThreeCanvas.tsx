import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSphere() {
    const ref = useRef<THREE.Points>(null!)
    const baseRotation = useRef({ x: 0, y: 0 })
    const hoverFactor = useRef(0)
    
    // Positions for sphere and dispersed field
    const [spherePositions, dispersedPositions, currentPositions, velocities] = useMemo(() => {
        const count = 2000
        const sphere = new Float32Array(count * 3)
        const dispersed = new Float32Array(count * 3)
        const curr = new Float32Array(count * 3)
        const vels = new Float32Array(count * 3)
        
        for (let i = 0; i < count; i++) {
            // Sphere placement
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const sx = 1.5 * Math.sin(phi) * Math.cos(theta)
            const sy = 1.5 * Math.sin(phi) * Math.sin(theta)
            const sz = 1.5 * Math.cos(phi)
            sphere.set([sx, sy, sz], i * 3)
            
            // Dispersed field placement (wider area)
            const dx = (Math.random() - 0.5) * 10
            const dy = (Math.random() - 0.5) * 6
            const dz = (Math.random() - 0.5) * 4
            dispersed.set([dx, dy, dz], i * 3)

            curr.set([sx, sy, sz], i * 3)
            vels.set([0, 0, 0], i * 3)
        }
        return [sphere, dispersed, curr, vels]
    }, [])

    useFrame((state, delta) => {
        if (!ref.current) return

        // Update hover factor based on mouse proximity to center
        const mouseDist = Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2)
        const targetHover = mouseDist < 0.6 ? 1 : 0
        hoverFactor.current = THREE.MathUtils.lerp(hoverFactor.current, targetHover, delta * 2)

        // Base continuous rotation
        baseRotation.current.x += delta * 0.05
        baseRotation.current.y += delta * 0.075

        // Hover/Pointer interaction logic
        const mouse = new THREE.Vector3(state.pointer.x * 2.5, state.pointer.y * 2.5, 0)
        const positions = ref.current.geometry.attributes.position.array as Float32Array

        for (let i = 0; i < 2000; i++) {
            const i3 = i * 3
            const px = positions[i3]
            const py = positions[i3 + 1]
            const pz = positions[i3 + 2]

            // Interpolated anchor position between sphere and dispersed field
            const ax = THREE.MathUtils.lerp(spherePositions[i3], dispersedPositions[i3], hoverFactor.current)
            const ay = THREE.MathUtils.lerp(spherePositions[i3 + 1], dispersedPositions[i3 + 1], hoverFactor.current)
            const az = THREE.MathUtils.lerp(spherePositions[i3 + 2], dispersedPositions[i3 + 2], hoverFactor.current)

            // Distance to mouse
            const dx = px - mouse.x
            const dy = py - mouse.y
            const dz = pz - mouse.z
            const distSq = dx * dx + dy * dy + dz * dz
            const dist = Math.sqrt(distSq)

            // Repulsion force
            if (dist < 0.8) {
                const force = (0.8 - dist) * 2
                velocities[i3] += (dx / dist) * force * delta * 5
                velocities[i3 + 1] += (dy / dist) * force * delta * 5
                velocities[i3 + 2] += (dz / dist) * force * delta * 5
            }

            // Restoration force (move back to current anchor position)
            const rx = ax - px
            const ry = ay - py
            const rz = az - pz
            
            velocities[i3] += rx * delta * 2.5
            velocities[i3 + 1] += ry * delta * 2.5
            velocities[i3 + 2] += rz * delta * 2.5

            // Friction/Damping
            velocities[i3] *= 0.92
            velocities[i3 + 1] *= 0.92
            velocities[i3 + 2] *= 0.92

            // Update positions
            positions[i3] += velocities[i3]
            positions[i3 + 1] += velocities[i3 + 1]
            positions[i3 + 2] += velocities[i3 + 2]
        }

        ref.current.geometry.attributes.position.needsUpdate = true

        // Global group parallax/rotation for extra smoothness
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, baseRotation.current.x + (state.pointer.y * 0.1), 0.05)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, baseRotation.current.y + (state.pointer.x * 0.1), 0.05)
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={currentPositions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00f2ff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

function AIConnectionLines() {
    const points = useMemo(() => {
        const p = []
        for (let i = 0; i < 20; i++) {
            p.push(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(3))
        }
        return p
    }, [])

    const lineRef = useRef<THREE.Group>(null!)

    useFrame((state, delta) => {
        if (lineRef.current) {
            lineRef.current.rotation.y += delta * 0.1
            
            // Mouse influence on rotation
            lineRef.current.rotation.x = THREE.MathUtils.lerp(lineRef.current.rotation.x, state.pointer.y * 0.5, 0.1)
            lineRef.current.rotation.z = THREE.MathUtils.lerp(lineRef.current.rotation.z, -state.pointer.x * 0.5, 0.1)
        }
    })

    return (
        <group ref={lineRef}>
            {points.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[0.02, 16, 16]} />
                    <meshBasicMaterial color="#7000ff" />
                </mesh>
            ))}
        </group>
    )
}

export default function ThreeCanvas() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <ParticleSphere />
                    <AIConnectionLines />
                </Float>
            </Canvas>
        </div>
    )
}
