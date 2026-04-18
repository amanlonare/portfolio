import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hospitality', href: '#hospitality' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/5 border border-white/10 py-2 shadow-lg rounded-xl' : 'max-md:backdrop-blur-md max-md:bg-white/5 max-md:border max-md:border-white/10 max-md:py-2 max-md:rounded-xl'}`}>
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <span className="font-orbitron tracking-widest text-[#00f2ff] font-bold text-lg md:text-xl">
                            &lt;<span className="text-white">amogh</span> lonare/&gt;
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline" style={{ gap: '32px' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm md:text-base font-medium hover:text-[#00f2ff] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f2ff] transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md hover:bg-white/10 transition-colors text-white"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-[72px] bg-black/95 backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-300 border-b border-white/10">
                    <div className="px-5 pt-8 pb-10 space-y-2 flex flex-col items-center" style={{ gap: '12px' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block w-full text-center px-3 py-3 text-lg font-medium hover:text-[#00f2ff] hover:bg-white/5 rounded-xl text-white transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
