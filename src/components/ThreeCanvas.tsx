import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSphere() {
    const ref = useRef<THREE.Points>(null!)

    // Create a sphere of random points
    const positions = useMemo(() => {
        const pos = new Float32Array(2000 * 3)
        for (let i = 0; i < 2000; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const x = 1.5 * Math.sin(phi) * Math.cos(theta)
            const y = 1.5 * Math.sin(phi) * Math.sin(theta)
            const z = 1.5 * Math.cos(phi)
            pos.set([x, y, z], i * 3)
        }
        return pos
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.1
            ref.current.rotation.y += delta * 0.15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
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
            lineRef.current.rotation.y += delta * 0.2
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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6, pointerEvents: 'none' }}>
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
