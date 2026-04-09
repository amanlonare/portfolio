import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Sparkles, Target, Users, BookOpen, Layers, Zap, Brain, MessageSquare, BarChart3, History, Globe, ArrowUpRight, Check, Search, ExternalLink, Activity, Phone, MessageCircle, Play, X } from "lucide-react";

interface CaseStudyProps {
    onBack: () => void;
    onOpenProject: (id: string) => void;
}

const AiRoleplayCaseStudy = ({ onBack, onOpenProject }: CaseStudyProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050505] text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200 pb-20 font-sans"
        >
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Portfolio</span>
                </button>
                <div className="flex gap-6 items-center">
                    <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</button>
                    <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Get in Touch</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                        <Brain className="w-3.5 h-3.5" />
                        AI & Conversational UX
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                        AI Roleplay for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connectella</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
                        Designing an AI-Driven Sales Roleplay System to Improve Conversion & Accelerate Growth.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5 text-left mt-12 px-2">
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Client</p>
                            <p className="text-white font-medium text-lg">Connectella</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Domain</p>
                            <p className="text-white font-medium text-lg">SaaS / Sales Tech</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Date</p>
                            <p className="text-white font-medium text-lg">Mar'25 - July'25</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Role</p>
                            <p className="text-white font-medium text-lg">Product Designer</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-16 rounded-3xl border border-white/10 aspect-[2/1] relative group overflow-hidden shadow-2xl bg-transparent"
                >
                    <img
                        src="/projects/roleplay_ai_v2.png"
                        alt="AI Roleplay Dashboard Mockup"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 scale-[1.3] group-hover:scale-[1.35] block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-12 space-y-40">
                {/* Introduction & Business Problem */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The <span className="text-cyan-400">Challenge</span></h2>
                        <div className="p-8 rounded-3xl bg-cyan-500/[0.02] border border-cyan-500/10 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10" />
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Target className="text-cyan-400 w-6 h-6" /> Business Problem
                            </h3>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                Stakeholders noticed that sales performance was dropping, especially among new hires. Conversion rates from live prospect calls were only <strong className="text-white font-semibold">around 3%</strong>, even though training materials and mock sessions already existed.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 pt-4">
                                <div className="flex-1 p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                                    <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Immediate Impact</p>
                                    <p className="text-white font-medium">Low win rates & slower ramp-up time.</p>
                                </div>
                                <div className="flex-1 p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">Revenue Risk</p>
                                    <p className="text-white font-medium">Significant revenue leakage from missed deals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Process - Discover */}
                <section className="space-y-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Search className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Discover & Insights</h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Initial research suggested the problem was low sales conversion (3%) and stakeholders believed reps simply needed more training materials. To understand the problem deeply, I spoke with Sales managers, New sales reps, and Product stakeholders.
                        </p>

                        {/* Workflow Mapping */}
                        <div className="space-y-6 pt-8">
                            <h4 className="text-white font-bold text-lg uppercase tracking-tight flex items-center gap-2">
                                <Layers className="w-5 h-5 text-cyan-400" /> Mapping the actual training workflow:
                            </h4>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative">
                                <div className="text-center md:text-left space-y-1">
                                    <p className="text-white font-bold">Training</p>
                                    <p className="text-xs text-gray-500">Initial Learning</p>
                                </div>
                                <div className="h-4 w-px md:h-px md:w-16 bg-white/10" />
                                <div className="text-center md:text-left space-y-1 text-cyan-400">
                                    <p className="font-bold">Mock Call</p>
                                    <p className="text-[10px] uppercase tracking-widest opacity-70">With Managers/Peers</p>
                                </div>
                                <div className="h-4 w-px md:h-px md:w-16 bg-white/10" />
                                <div className="text-center md:text-left space-y-1 text-orange-400">
                                    <p className="font-bold">Delayed Feedback</p>
                                    <p className="text-xs opacity-70">Learning Gap</p>
                                </div>
                                <div className="h-4 w-px md:h-px md:w-16 bg-white/10" />
                                <div className="text-center md:text-left space-y-1">
                                    <p className="text-white font-bold">Live Call</p>
                                    <p className="text-xs text-gray-500">High Stakes</p>
                                </div>

                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                                    <p className="text-cyan-400 font-medium italic italic text-sm">"I realized the real issue wasn’t lack of content or knowledge."</p>
                                </div>
                            </div>
                        </div>

                        {/* Challenges Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
                            {[
                                { title: "Limited Practice", desc: "Mock sessions usually require managers or peers, making them time-bound and hard to scale.", icon: History },
                                { title: "Lack of Confidence", desc: "Reps often feel unprepared and anxious before important pitches.", icon: Zap },
                                { title: "Delayed Feedback", desc: "Traditional training doesn’t provide instant insights for self-improvement.", icon: MessageSquare },
                                { title: "Manager Time Drain", desc: "Coaching early-stage reps requires heavy manual review and feedback.", icon: Users }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* User Profile / Persona Section */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Understanding the <span className="text-cyan-400">User</span></h2>
                        <div className="pt-8 space-y-8">
                            {/* Card 1: User Profile & Persona */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f1115] hover:border-cyan-500/20 transition-all duration-300 shadow-2xl"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr] gap-px bg-white/5">
                                    {/* Text Content */}
                                    <div className="p-8 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 space-y-8">
                                        <div className="space-y-4">
                                            <h4 className="text-cyan-400 text-xs font-black uppercase tracking-[0.25em]">User Profile</h4>
                                            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">Sales Representative in SaaS</h3>
                                        </div>
                                        <blockquote className="border-l-4 border-cyan-500/50 pl-6 py-2">
                                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-light">
                                                "To improve pitch delivery and handle objections confidently before live calls"
                                            </p>
                                        </blockquote>
                                    </div>
                                    {/* Image / Illustration Content */}
                                    <div className="p-8 md:p-14 bg-gradient-to-br from-[#151820] to-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />
                                        <div className="relative z-10 w-full max-w-[300px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group/persona bg-[#0f1115]">
                                            <img src="/projects/sales_rep_persona.png" alt="Sales Persona" className="w-full h-full object-cover transition-transform duration-700 group-hover/persona:scale-110" />
                                            
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/persona:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover/persona:translate-y-0">
                                                <div className="space-y-3">
                                                    <div className="space-y-1">
                                                        <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Profile Info</p>
                                                        <h4 className="text-2xl font-bold text-white uppercase tracking-tight">Maya</h4>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                                                        <div className="space-y-1">
                                                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Age</p>
                                                            <p className="text-white font-medium text-sm">26 Years</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Role</p>
                                                            <p className="text-white font-medium text-sm">SaaS Sales</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Default Label (Optional, for better UX) */}
                                            <div className="absolute top-4 left-4 pointer-events-none group-hover/persona:opacity-0 transition-opacity duration-300">
                                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                                                    Target Persona
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Interviews, Pain points & Needs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-[#0f1115] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl p-8 md:p-14"
                            >
                                <div className="space-y-12 w-full">
                                    <div className="max-w-3xl space-y-4">
                                        <h4 className="text-cyan-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4" /> Interviews
                                        </h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            We conducted stakeholder interviews with product managers, sales trainers, and senior sales representatives. These discussions helped us:
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                                        {/* Pain Points */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4 border-b border-red-500/20 pb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                                    <Target className="w-6 h-6" />
                                                </div>
                                                <h5 className="text-xl font-bold text-white tracking-wide">Pain Points</h5>
                                            </div>
                                            <ul className="space-y-5">
                                                {["Limited access to guided practice", "Low confidence before calls", "No clear way to measure"].map((t, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-gray-400">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 shrink-0" />
                                                        <span className="leading-relaxed text-[15px]">{t}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Needs */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4 border-b border-emerald-500/20 pb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                                    <Users className="w-6 h-6" />
                                                </div>
                                                <h5 className="text-xl font-bold text-white tracking-wide">Needs</h5>
                                            </div>
                                            <ul className="space-y-5">
                                                {["Safe space to practice real scenarios", "Instant, actionable feedback", "Option to review and track progress"].map((t, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-emerald-400/90">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 mt-0.5">
                                                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                        </div>
                                                        <span className="leading-relaxed text-[15px] text-gray-300">{t}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Solution Strategy */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The <span className="text-cyan-400">Solution</span></h2>
                        <h3 className="text-2xl text-gray-400 font-light">A Safe Space to Practice Real-Life Conversations</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Persona Creation", desc: "Build a persona based on their Ideal Customer Profile (ICP).", icon: Users, color: "text-blue-400" },
                            { title: "AI Persona Call", desc: "Roleplay with the AI prospecting bot in real-time.", icon: Phone, color: "text-cyan-400" },
                            { title: "Feedback", desc: "Instant performance board and detailed feedback metrics.", icon: Activity, color: "text-green-400" },
                            { title: "Transcript", desc: "Complete transcripts to review the call and master pitch delivery.", icon: MessageCircle, color: "text-purple-400" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Task Flow */}
                    <div className="pt-12 space-y-8">
                        <h4 className="text-white font-bold text-xl uppercase tracking-tighter flex items-center gap-2">
                            <Layers className="w-6 h-6 text-cyan-400" /> Task Flow
                        </h4>
                        <div className="relative p-1 bg-white/5 rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="bg-black/40 rounded-[1.4rem] p-12 text-center space-y-6 border border-white/5">
                                <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-mono tracking-widest uppercase">
                                    <span className="text-white">Persona Setup</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-600 rotate-45" />
                                    <span className="text-cyan-400">Roleplay Call</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-600 rotate-45" />
                                    <span className="text-white">Feedback & Review</span>
                                </div>
                                <div className="pt-8">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all font-bold text-sm tracking-wide group"
                                    >
                                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        View Full Figma Taskflow
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UI & Wireframes */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">UI Design & <span className="text-cyan-400">Wireframes</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                            Hi-fi wireframes included precise details of the interface, ensuring both internal and client teams understood exactly how each element would function.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] relative group bg-[#0a0a0f] shadow-lg p-6 md:p-10">
                            <div className="w-full h-full rounded-xl overflow-hidden border border-white/5 shadow-2xl relative">
                                <img
                                    src="/projects/roleplay_wireframe_1.png"
                                    className="w-full h-auto filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 block"
                                    alt="Persona & Bot Setup Wireframe"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-start bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-[10px] font-bold border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full tracking-widest text-cyan-400 uppercase">PERSONA & BOT SETUP</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] relative group bg-[#0a0a0f] shadow-lg p-6 md:p-10">
                            <div className="w-full h-full rounded-xl overflow-hidden border border-white/5 shadow-2xl relative">
                                <img
                                    src="/projects/roleplay_wireframe_2.png"
                                    className="w-full h-auto filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 block"
                                    alt="AI Roleplay Dashboard Wireframe"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-start bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-[10px] font-bold border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full tracking-widest text-cyan-400 uppercase">AI ROLEPLAY INTERFACE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/10 w-full" />

                {/* Visual Design Sections */}
                <section className="space-y-32">
                    {/* 1. Bot Creation */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <span className="text-6xl font-black text-white/5 tracking-tighter">01</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">AI Prospect Creation</h3>
                        </div>
                        <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col">
                            {/* Text Content - Top */}
                            <div className="p-10 md:p-14 bg-black/40 border-b border-white/10">
                                <div className="max-w-4xl mx-auto space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase">Sales Bot Creation</p>
                                        <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight underline decoration-cyan-500/30 underline-offset-8">Personalize Your Prospect</h4>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <p className="text-gray-400 leading-relaxed text-lg flex-1">
                                            This screen allows users to build their own AI prospect bots tailored to specific sales scenarios. To avoid form fatigue, an <strong className="text-white">autofill feature</strong> suggests prefilled details based on common profiles.
                                        </p>
                                        <div className="flex-1 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                                            <p className="text-xs text-cyan-500 uppercase tracking-widest font-black mb-2 opacity-80">Upcoming Feature</p>
                                            <p className="text-gray-400 text-sm italic">
                                                Reps can select real call list, stimulate personas based on their ICP, and roleplay with AI-driven bots.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Bottom */}
                            <div className="p-6 md:p-10 lg:p-14 bg-gradient-to-b from-black/20 to-transparent">
                                <div className="rounded-3xl overflow-hidden border border-white/10 w-full relative group bg-[#0a0a0f] shadow-lg">
                                    <img
                                        src="/projects/roleplay_bot_creation_1.png"
                                        className="w-full h-auto object-cover object-top filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 block"
                                        alt="Bot Creation - Basic Info"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-start bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-xs font-bold border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full tracking-widest text-cyan-400 uppercase">PROSPECT CREATION INPUT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Roleplay & Analytics */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <span className="text-6xl font-black text-white/5 tracking-tighter">02</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Roleplay & Analytics</h3>
                        </div>

                        <div className="space-y-12">
                            {/* Card 1: Roleplay Call */}
                            <div className="group rounded-3xl overflow-hidden border border-white/10 bg-indigo-500/[0.02] hover:border-indigo-500/20 transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-px bg-white/5">
                                    {/* Text Content */}
                                    <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                                <Phone className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-3xl font-bold text-white tracking-tight underline decoration-indigo-500/30 underline-offset-8">AI Roleplay Call</h4>
                                                <p className="text-gray-400 leading-relaxed text-lg">
                                                    Users engage with the AI prospect while viewing a <strong className="text-white">real-time transcript</strong>. This design helps reps track the conversation flow and adapt their pitch on the spot.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Content */}
                                    <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center bg-indigo-500/[0.03]">
                                        <div 
                                            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative w-full cursor-pointer group/modal"
                                            onClick={() => setSelectedImage("/projects/roleplay_call_transcript.png")}
                                        >
                                            <img src="/projects/roleplay_call_transcript.png" className="w-full h-auto object-contain group-hover:scale-[1.03] group-hover/modal:scale-[1.03] transition-transform duration-700 block" alt="Roleplay Call Interface" />
                                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                <p className="text-indigo-300 font-bold text-xs tracking-widest uppercase">Live Call Interface</p>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-white/20 transition-colors">
                                                    <Search className="w-4 h-4" /> View Full Screen
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Performance Analytics */}
                            <div className="group rounded-3xl overflow-hidden border border-white/10 bg-green-500/[0.02] hover:border-green-500/20 transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-px bg-white/5">
                                    {/* Text Content */}
                                    <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                        <div className="space-y-6">
                                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                                                <BarChart3 className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-3xl font-bold text-white tracking-tight underline decoration-green-500/30 underline-offset-8">Performance Analytics</h4>
                                                <p className="text-gray-400 leading-relaxed text-lg">
                                                    After the call, users receive instant performance boards highlighting <strong className="text-white font-medium">Opening Effectiveness, Trust Building, and Value Trap Avoidance.</strong>
                                                </p>
                                            </div>
                                            <div className="bg-green-500/5 border border-green-500/10 p-4 rounded-xl">
                                                <p className="text-green-400 text-xs font-semibold leading-relaxed">Dynamic performance boards with AI-generated feedback loops.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Content */}
                                    <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center bg-green-500/[0.03]">
                                        <div 
                                            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative w-full cursor-pointer group/modal"
                                            onClick={() => setSelectedImage("/projects/roleplay_analytics_detail.png")}
                                        >
                                            <img src="/projects/roleplay_analytics_detail.png" className="w-full h-auto object-contain group-hover:scale-[1.03] group-hover/modal:scale-[1.03] transition-transform duration-700 block" alt="Analytics View" />
                                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                <p className="text-green-300 font-bold text-xs tracking-widest uppercase">Feedback & Scoring</p>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-white/20 transition-colors">
                                                    <Search className="w-4 h-4" /> View Full Screen
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Call History */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <span className="text-6xl font-black text-white/5 tracking-tighter">03</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Call History</h3>
                        </div>
                        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-cyan-500/[0.02] hover:border-cyan-500/20 transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-px bg-white/5">
                                {/* Text Content */}
                                <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                    <div className="space-y-6">
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                            <History className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-3xl font-bold text-white tracking-tight underline decoration-cyan-500/30 underline-offset-8">Track Progress Over Time</h4>
                                            <p className="text-gray-400 leading-relaxed text-lg">
                                                The <strong className="text-white">Call History</strong> screen displays all past sessions with performance scores, recordings, and transcripts. Designed to promote continuous learning and track growth across multiple practice rounds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Content */}
                                <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center bg-cyan-500/[0.03]">
                                    <div 
                                        className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative w-full cursor-pointer group/modal"
                                        onClick={() => setSelectedImage("/projects/roleplay_call_history.png")}
                                    >
                                        <img src="/projects/roleplay_call_history.png" className="w-full h-auto object-contain group-hover:scale-[1.03] group-hover/modal:scale-[1.03] transition-transform duration-700 block" alt="Call History View" />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-cyan-300 font-bold text-xs tracking-widest uppercase">Session Records</p>
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-white/20 transition-colors">
                                                <Search className="w-4 h-4" /> View Full Screen
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcome & Impact */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Outcome & <span className="text-cyan-400">Impact</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            The implementation transformed the sales training culture from a manual, manager-dependent workflow to an automated, high-fidelity practice ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { value: "100%", label: "Meeting Set Rate Increase", icon: Target, bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
                            { value: "2-3h", label: "Manager Time Saved Daily", icon: History, bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
                            { value: "Instant", label: "Autonomous Feedback", icon: Zap, bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
                            { value: "Confidant", label: "Reps Ready to Win", icon: Users, bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
                            { value: "On-demand", label: "Automated Practise", icon: History, bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
                            { value: "Realistic", label: "Tough Client scenarios", icon: Brain, bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" }
                        ].map((stat, i) => (
                            <div key={i} className={`p-8 rounded-3xl ${stat.bg} border ${stat.border} space-y-4 hover:scale-105 transition-transform duration-500`}>
                                <stat.icon className={`w-8 h-8 ${stat.text}`} />
                                <div className="space-y-1">
                                    <p className={`text-4xl font-black tracking-tighter ${stat.text}`}>{stat.value}</p>
                                    <p className="text-white text-xs font-bold uppercase tracking-[0.1em] opacity-80">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 text-center rounded-3xl bg-cyan-500/5 border border-cyan-500/10">
                        <p className="text-3xl text-white font-serif italic mb-2 tracking-tight">"Reps don't just practice; they master."</p>
                        <p className="text-gray-500 text-sm italic font-medium">Connectella Stakeholder Feedback — August 2025</p>
                    </div>
                </section>

                {/* Explore More section */}
                <section className="py-32 border-t border-white/5 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Explore More <span className="text-cyan-400">Case Studies</span></h2>
                    </div>

                    <div className="relative group/carousel px-1">
                        {/* Scrollable Container */}
                        <div
                            id="case-studies-carousel"
                            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
                        >
                            {[
                                {
                                    id: "connectella",
                                    title: "Accessibility for Conectella",
                                    image: "/projects/conectella_abstract.png",
                                    tags: ["Research", "Accessible Design", "WCAG Guidelines"],
                                    link: "#"
                                },
                                {
                                    id: "seva",
                                    title: "Seva.AI — An AI Companion",
                                    image: "/projects/seva_ai_v2.png",
                                    tags: ["Chat", "AI UX", "Wellness"],
                                    link: "#"
                                },
                                {
                                    id: "prototyping",
                                    title: "Interactive Prototyping",
                                    image: "/projects/prototyping_v4.png",
                                    tags: ["Micro-interactions", "User Testing", "Visual Design"],
                                    link: "#"
                                }
                            ].map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    onClick={() => onOpenProject(project.id)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="min-w-full md:min-w-[calc(50%-12px)] snap-start group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-500 flex flex-col cursor-pointer"
                                >
                                    <div className="relative h-48 md:h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col gap-6">
                                        <div className="min-h-[3rem] md:min-h-[4rem] flex justify-between items-start gap-4">
                                            <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">{project.title}</h4>
                                            <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all shrink-0">
                                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-cyan-400/80 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Visible on Hover */}
                        <button
                            onClick={() => document.getElementById('case-studies-carousel')?.scrollBy({ left: -400, behavior: 'smooth' })}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 -translate-x-4 group-hover/carousel:translate-x-0 z-10"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => document.getElementById('case-studies-carousel')?.scrollBy({ left: 400, behavior: 'smooth' })}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 translate-x-4 group-hover/carousel:translate-x-0 z-10"
                        >
                            <span className="rotate-180 block"><ArrowLeft className="w-6 h-6" /></span>
                        </button>
                    </div>
                </section>

                {/* Return to Work Button */}
                <section className="py-20 text-center">
                    <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black hover:bg-cyan-500 hover:text-white transition-all duration-300 group shadow-xl active:scale-95"
                    >
                        Return to Work
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </section>
            </main>

            {/* Lightbox / Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
                    >
                        <button 
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors border border-white/10 z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            className="max-w-[95%] max-h-[95vh] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] object-contain border border-white/10 relative z-[110]"
                            alt="Full Screen Interface"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AiRoleplayCaseStudy;
