import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Linkedin, ExternalLink } from 'lucide-react';
import { FaBehance, FaProjectDiagram } from 'react-icons/fa';
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
                    I'm <span className="text-neon transition-all">Monu Kumari</span>
                </h1>

                <div className="h-12 md:h-24 mb-6 md:mb-8 text-xl md:text-5xl font-accent font-extrabold text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.3)] tracking-tight flex items-center justify-center">
                    <span ref={el}></span>
                </div>

                <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-6 max-w-2xl mx-auto leading-relaxed px-4">
                    Designing purposeful, human-centered, and AI-driven experiences<br className="hidden md:block" /> that help startups and brands build engaging digital products.
                </p>

                <div className="flex justify-center mb-10 md:mb-6 gap-4 md:gap-5">
                    {[
                        { icon: FaBehance, href: portfolioData.socials.behance },
                        { icon: Linkedin, href: portfolioData.socials.linkedin },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="flex items-center justify-center glass rounded-full transition-all duration-300 active:scale-95 w-11 h-11 md:w-[54px] md:h-[54px]"
                            style={{
                                textDecoration: 'none',
                                color: hoveredIndex === index ? '#00f2ff' : '#a0a0b0',
                                border: hoveredIndex === index ? '1px solid #00f2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                                backgroundColor: hoveredIndex === index ? 'rgba(0, 242, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.25)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredIndex === index ? '0 0 25px rgba(0, 242, 255, 0.5)' : 'none',
                                zIndex: hoveredIndex === index ? 20 : 1
                            }}
                        >
                            <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-10 py-4 border border-[#00f2ff] text-[#00f2ff] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#00f2ff]/10 transition-all hover:-translate-y-1 cursor-pointer w-full md:w-auto"
                    >
                        View Projects <FaProjectDiagram className="h-5 w-5" />
                    </a>
                    <a
                        href={portfolioData.socials.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-[#00f2ff] text-[#050505] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.7)] transition-all hover:-translate-y-1 cursor-pointer w-full md:w-auto"
                    >
                        View Resume <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
