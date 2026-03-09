import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { FaMedium } from 'react-icons/fa';
import ThreeCanvas from './ThreeCanvas';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
    const el = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: portfolioData.roles,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <ThreeCanvas />

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-accent mb-2 text-gray-400">Hi there,</h1>
                <h1 className="text-4xl md:text-6xl font-accent font-extrabold mb-6 tracking-tight text-white">
                    I'm <span className="text-neon transition-all">Aman Lonare</span>
                </h1>

                <div className="h-16 md:h-24 mb-8 text-2xl md:text-5xl font-accent font-extrabold text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.3)] tracking-tight flex items-center justify-center">
                    <span ref={el}></span>
                </div>

                <p className="text-base md:text-lg text-gray-400 mb-6 max-w-lg mx-auto leading-relaxed">
                    Bridging the gap between cutting-edge AI research<br className="hidden md:block" /> and production-grade software engineering.
                </p>

                <div className="flex justify-center mb-6" style={{ gap: '20px' }}>
                    {[
                        { icon: Github, href: portfolioData.socials.github },
                        { icon: Linkedin, href: portfolioData.socials.linkedin },
                        { icon: FaMedium, href: portfolioData.socials.medium },
                        { icon: Instagram, href: portfolioData.socials.instagram },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="flex items-center justify-center glass rounded-full transition-all duration-300 active:scale-95"
                            style={{
                                width: '54px',
                                height: '54px',
                                textDecoration: 'none',
                                color: hoveredIndex === index ? '#00f2ff' : '#a0a0b0',
                                border: hoveredIndex === index ? '1px solid #00f2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                                backgroundColor: hoveredIndex === index ? 'rgba(0, 242, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.25)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredIndex === index ? '0 0 25px rgba(0, 242, 255, 0.5)' : 'none',
                                zIndex: hoveredIndex === index ? 20 : 1
                            }}
                        >
                            <social.icon style={{ width: '26px', height: '26px' }} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <a
                        href="/Resume_Aman_Lonare.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-[#00f2ff] text-[#050505] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.7)] transition-all hover:-translate-y-1 cursor-pointer"
                    >
                        View Resume <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
