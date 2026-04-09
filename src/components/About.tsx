import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Brain, BookOpen, Target, Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
    const highlights = [
        { icon: Users, title: "User Focused", desc: "Deeply committed to intuitive and human-centered design." },
        { icon: Brain, title: "AI Driven", desc: "Designing seamless interfaces for complex AI technologies." },
        { icon: Target, title: "Solution Oriented", desc: "Transforming product visions into impactful digital solutions." },
        { icon: Sparkles, title: "Visual Excellence", desc: "Crafting aesthetically premium and engaging user interfaces." }
    ];

    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-12 md:mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">About Me</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group mx-auto w-full"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] group-hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                                <img
                                    src={portfolioData.profilePicture}
                                    alt={portfolioData.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    </div>

                    {/* Right Column: Bio Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                                <Sparkles className="w-3 h-3" />
                                {portfolioData.title}
                            </div>
                            
                            <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {portfolioData.aboutHeading.split('and')[0]}
                                <br />
                                <span className="text-cyan-400">{portfolioData.aboutHeading.split('and')[1] ? `and ${portfolioData.aboutHeading.split('and')[1]}` : ''}</span>
                            </h4>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                                {portfolioData.about}
                            </p>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
                                <p className="text-gray-300 text-base leading-relaxed italic">
                                    "{portfolioData.aboutQuote}"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
