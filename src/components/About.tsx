import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Brain, BookOpen, Target, Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
    const highlights = [
        { icon: Brain, title: "AI Enthusiast", desc: "Deeply committed to sustainable tech development." },
        { icon: BookOpen, title: "Research Driven", desc: "Implementing latest papers to stay at the cutting edge." },
        { icon: Target, title: "Action Oriented", desc: "Turning complex AI ideas into tangible solutions." },
        { icon: Users, title: "Social Impact", desc: "Building tools that serve and empower society." }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-20">
                    <h3 className="text-3xl font-bold text-white tracking-tight">About Me</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Image & Hobbies */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group mx-auto max-w-[400px]"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-square group-hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                                <img
                                    src={portfolioData.profilePicture}
                                    alt={portfolioData.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Heart className="w-4 h-4 text-cyan-400" />
                                Beyond the Code
                            </h5>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                When I'm not architecting AI systems, you'll find me playing in badminton tournaments,
                                spending quality time with my family, or recharging in nature.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Bio & Highlights */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                <Sparkles className="w-3 h-3" />
                                Senior AI Engineer
                            </div>
                            <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Crafting Intelligent Systems<br />with <span className="text-cyan-400">Social Purpose</span>.
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
                                {portfolioData.about.split('\n\n')[0]}
                            </p>
                            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    "{portfolioData.about.split('\n\n')[1]}"
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
