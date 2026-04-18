import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Brain, Target, Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
    const highlights = [
        { icon: Brain, title: "Data Driven", desc: "Leveraging statistical analysis and machine learning for decision support." },
        { icon: Target, title: "Business Analytics", desc: "Bridging the gap between technical data and strategic goals." },
        { icon: Sparkles, title: "Quality Assurance", desc: "Ensuring data integrity and release readiness at a global scale." },
        { icon: Heart, title: "Professional Impact", desc: "Proven track record with 50% increase in reporting efficiency." }
    ];

    return (
        <section id="about" className="py-16 md:py-32 relative overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-12 md:mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">About Me</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>

                <div className="space-y-12 md:space-y-16">
                    {/* Top Region: Image & Bio Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Profile Image Column */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative group mx-auto w-full max-w-[450px]"
                            >
                                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[3/4] group-hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                                    <img
                                        src={portfolioData.profilePicture}
                                        alt={portfolioData.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </div>

                        {/* Bio Content Column */}
                        <div className="lg:col-span-7 space-y-8 h-full flex flex-col justify-start">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">
                                    <Sparkles className="w-3 h-3" />
                                    {portfolioData.title}
                                </div>
                                
                                <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    Turning Raw Data into Strategic Insights
                                    <br />
                                    <span className="text-cyan-400">and Business Value.</span>
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

                    {/* Bottom Region: Hobbies & Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Hobbies Column */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-cyan-500/30 transition-all duration-500 h-full"
                            >
                                <h5 className="text-white font-bold mb-4 flex items-center gap-3 text-lg">
                                    <Heart className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
                                    Beyond Analytics
                                </h5>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    When I'm not analyzing data, you'll find me playing <span className="text-white/80">badminton</span>, analyzing <span className="text-white/80">competitive game mechanics</span>, or enjoying a game of <span className="text-white/80">carrom</span>.
                                </p>
                            </motion.div>
                        </div>

                        {/* Highlights Column */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {highlights.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:bg-cyan-500/5"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h5 className="text-white font-bold mb-2 text-lg">{item.title}</h5>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
