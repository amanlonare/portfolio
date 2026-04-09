import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Sparkles, Target, Users, BookOpen, Layers, Zap, Brain, MessageSquare, BarChart3, History, Globe, ArrowUpRight, Check, Search, ExternalLink, Activity, Phone, MessageCircle, Play, X, Heart, Calendar, Smile, TrendingUp, Shield, Bell, Mic, AlertTriangle, Layout, Cpu } from "lucide-react";

interface CaseStudyProps {
    onBack: () => void;
    onOpenProject: (id: string) => void;
}

const SevaAiCaseStudy = ({ onBack, onOpenProject }: CaseStudyProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#0a0a0f] text-gray-200 selection:bg-purple-500/30 selection:text-purple-200 pb-20 font-sans"
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
                        <Heart className="w-3.5 h-3.5" />
                        AI & Emotional Well-being
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                        SEVA.AI — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">An AI Companion</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
                        Designing a seamless AI companion experience focused on conversational UX, emotional support, and productivity.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5 text-left mt-12 px-2">
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Project</p>
                            <p className="text-white font-medium text-lg">SEVA.AI</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Role</p>
                            <p className="text-white font-medium text-lg">UX/UI Designer</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Date</p>
                            <p className="text-white font-medium text-lg">2024</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Platform</p>
                            <p className="text-white font-medium text-lg">Mobile App</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-16 rounded-3xl border border-white/10 aspect-[16/10] relative group overflow-hidden shadow-2xl bg-transparent"
                >
                    <img
                        src="/projects/seva_hero_final.png"
                        alt="SEVA.AI Hero Mockup"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.05] block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-12 space-y-40">
                {/* The Evolution of the Problem */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The <span className="text-purple-400">Problem Evolution</span></h2>
                        <div className="p-8 rounded-3xl bg-purple-500/[0.02] border border-purple-500/10 space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] -z-10" />
                            
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Target className="text-purple-400 w-6 h-6" /> Beyond Just Conversation
                                </h3>
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                    Initially, we aimed to solve loneliness with a conversational AI. We soon realized loneliness isn't just about lack of talk—it's the absence of a <strong className="text-white">supportive companion</strong> that integrates emotional connection with everyday care. 
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                                    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Pain Point 1</p>
                                    <p className="text-white text-sm font-medium">Lack of daily structure and forgotten routines.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                                    <p className="text-pink-400 text-[10px] font-bold uppercase tracking-widest">Pain Point 2</p>
                                    <p className="text-white text-sm font-medium">Difficulty managing medication or wellness habits.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                                    <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest">Pain Point 3</p>
                                    <p className="text-white text-sm font-medium">Feeling disconnected when no one checks on them.</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                <p className="text-gray-300 text-sm italic">
                                    "Instead of a chatbot, we designed Seva as an AI companion that cares for both emotional and daily well-being."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Discovery Phase - Research Slide */}
                <section className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Search className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Discovery Phase</h2>
                        </div>
                        <h3 className="text-2xl text-gray-400 font-light italic">Understanding Who We're Designing For</h3>

                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0f] p-4 md:p-8">
                            <img 
                                src="/projects/seva_discovery_research.png" 
                                alt="Research Insights" 
                                className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                                onClick={() => setSelectedImage("/projects/seva_discovery_research.png")}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                                <Users className="w-4 h-4" /> Global Loneliness Statistics & Insights
                            </div>
                        </div>
                    </div>
                </section>
                {/* Desk Research - Competitor Analysis */}
                <section className="space-y-16">
                    <div className="space-y-10">
                        <div className="space-y-6 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Desk Research</h2>
                            </div>
                            <h3 className="text-2xl text-gray-400 font-light italic">Examining the Solutions Already Out There</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We needed strategic insights into how industry counterparts were functioning. We extensively analyzed major competitor products such as <span className="text-white font-medium">Wysa</span> and <span className="text-white font-medium">YANA</span> to understand their features, flows, and emotional interaction design.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Product Features", icon: Layers },
                                { label: "User Flows", icon: History },
                                { label: "Emotional Interaction", icon: MessageSquare },
                                { label: "Engagement Strategies", icon: TrendingUp }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-3 group hover:bg-pink-500/[0.05] transition-colors">
                                    <item.icon className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-bold text-xl flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-pink-400" /> Key Insights from Competitor Research
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Instant Emotional Support", desc: "Many platforms offer quick support using techniques from CBT.", icon: Zap, color: "text-yellow-400" },
                                    { title: "Guided Self-Care", desc: "Apps provide guided exercises and mental wellness activities.", icon: Heart, color: "text-red-400" },
                                    { title: "AI Check-ins", desc: "Periodic emotional check-ins help track mood and progress.", icon: Activity, color: "text-green-400" },
                                    { title: "Safe & Anonymous Spaces", desc: "Users prefer private environments to express feelings freely.", icon: Shield, color: "text-blue-400" },
                                    { title: "Personalization", desc: "Personalized experiences significantly improve engagement.", icon: Target, color: "text-purple-400" }
                                ].map((insight, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-pink-500/[0.02] border border-pink-500/10 space-y-4 hover:border-pink-500/30 transition-all group">
                                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-2 ${insight.color} group-hover:scale-110 transition-transform`}>
                                            <insight.icon className="w-6 h-6" />
                                        </div>
                                        <h5 className="text-white font-bold text-lg">{insight.title}</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">{insight.desc}</p>
                                    </div>
                                ))}
                                <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 flex flex-col justify-center items-center text-center space-y-4">
                                    <Zap className="w-10 h-10 text-white animate-pulse" />
                                    <h5 className="text-white font-black text-xl tracking-tight leading-tight">The Differentiation Opportunity</h5>
                                    <p className="text-pink-100/70 text-sm italic font-medium leading-relaxed">
                                        Combining emotional companionship with daily life support to stand out.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Define Phase - Use Cases */}
                <section className="space-y-16">
                    <div className="space-y-10">
                        <div className="space-y-6 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Define Phase</h2>
                            </div>
                            <h3 className="text-2xl text-gray-400 font-light italic">Defining Core Use Cases</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                A use case describes how users perform a task from their perspective. We identified several key use cases that would define the Seva experience, ensuring every interaction feels intuitive and purposeful.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Layers className="w-5 h-5 text-indigo-400" /> Use Case Identification
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { 
                                        title: "Registration & Profile", 
                                        desc: "Seamless onboarding and personal profile management to tailor the AI experience.",
                                        icon: Users,
                                        color: "bg-blue-500/10 text-blue-400"
                                    },
                                    { 
                                        title: "Multimodal Conversation", 
                                        desc: "Engaging in both audio and chat-based empathetic conversations with Seva.",
                                        icon: MessageSquare,
                                        color: "bg-indigo-500/10 text-indigo-400"
                                    },
                                    { 
                                        title: "Smart Reminders", 
                                        desc: "Timely alerts for medicine, exercise, and meditation to maintain healthy routines.",
                                        icon: Bell,
                                        color: "bg-purple-500/10 text-purple-400"
                                    }
                                ].map((useCase, i) => (
                                    <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:translate-y-[-4px]">
                                        <div className={`w-14 h-14 rounded-2xl ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <useCase.icon className="w-7 h-7" />
                                        </div>
                                        <h5 className="text-xl font-bold text-white mb-3">{useCase.title}</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">{useCase.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Task Flow and Conversational Flow */}
                <section className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Task Flow & Conversational Flow</h2>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl font-light">
                            Once the major use cases were identified, we created task flows accordingly, as it was essential to keep the interaction in sync with the user’s behavior and lock in potential problems they may encounter while using the product.
                        </p>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f1115] shadow-2xl transition-all duration-500 hover:border-purple-500/30">
                        <iframe 
                            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                            width="100%" 
                            height="600" 
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FtoRxUTUaEoabDisp24YUl8%2FTaskFlow_Thrive360AI%3Fnode-id%3D95-537%26t%3DTfbndahAiT2EAFbN-4" 
                            allowFullScreen
                            className="bg-white/5"
                        ></iframe>
                        <div className="absolute top-4 right-4 z-10">
                            <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 pointer-events-none">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Interactive
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                            <Globe className="w-4 h-4" /> Interactive Task Flow Mapping on Figma
                        </div>
                    </div>
                </section>
                {/* Design Phase - Wireframes & Decisions */}
                <section className="space-y-32">
                    {/* Key Design Decision: Audio vs Chat */}
                    <div className="space-y-16">
                        <div className="space-y-6 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Key Design Decision</h2>
                            </div>
                            <h3 className="text-2xl text-gray-400 font-light italic">Audio Registration vs. Chat Registration</h3>
                        </div>

                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Side: The Idea */}
                                <div className="p-10 rounded-[2.5rem] bg-purple-500/[0.03] border border-purple-500/10 space-y-8 hover:bg-purple-500/[0.05] transition-all duration-500">
                                    <h4 className="text-white font-bold text-2xl flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                            <Mic className="text-purple-400 w-6 h-6" />
                                        </div>
                                        The Initial Idea: Audio
                                    </h4>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        We initially proposed voice-based registration to create a natural, effortless interaction model—specifically tailored for elderly users who might find typing on small screens challenging.
                                    </p>
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400/60">Expected Benefits</p>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {[
                                                "Reduced typing effort & friction",
                                                "Significantly faster onboarding",
                                                "Natural interface for elderly users",
                                                "Leveraging advanced AI speech recognition"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                                    <Check className="w-4 h-4 text-purple-400 shrink-0" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Side: The Reality */}
                                <div className="p-10 rounded-[2.5rem] bg-pink-500/[0.03] border border-pink-500/10 space-y-8 hover:bg-pink-500/[0.05] transition-all duration-500">
                                    <h4 className="text-white font-bold text-2xl flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                                            <AlertTriangle className="text-pink-400 w-6 h-6" />
                                        </div>
                                        Challenges Encountered
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { title: "Background Noise", desc: "Environmental interference often interrupted the input stream." },
                                            { title: "Recognition Accuracy", desc: "Dialects and speech patterns caused processing errors." },
                                            { title: "Speech-to-Text Errors", desc: "Incorrect data capture led to immediate user frustration." },
                                            { title: "Processing Complexity", desc: "High bandwidth requirements affected real-time response." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                                                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0 text-xs font-bold">0{i+1}</div>
                                                <div className="space-y-1">
                                                    <p className="text-white text-sm font-bold">{item.title}</p>
                                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Solution: Chat-Based Registration */}
                    <div className="space-y-16">
                        <div className="space-y-6 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Final Solution</h2>
                            </div>
                            <h3 className="text-2xl text-gray-400 font-light italic">Conversational Onboarding</h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                To address the challenges of traditional forms and audio hurdles, we redesigned the onboarding experience as a <span className="text-white font-medium">chat-based registration flow</span>. Instead of facing long, overwhelming forms, users interact with Seva through a human-like conversational interface that gradually collects required information.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                 <h4 className="text-white font-bold text-xl flex items-center gap-3">
                                    <Sparkles className="w-5 h-5 text-green-400" /> Benefits of Chat-Based Registration
                                </h4>
                                <p className="text-gray-400 text-sm">This approach offered several distinct advantages for our target demographic.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { 
                                        title: "Simplicity", 
                                        desc: "Users answer one question at a time, reducing cognitive load and form fatigue.",
                                        icon: Layers,
                                        color: "text-blue-400"
                                    },
                                    { 
                                        title: "Familiar Interaction", 
                                        desc: "The chat interface mimics natural conversation, building trust instantly.",
                                        icon: MessageCircle,
                                        color: "text-indigo-400"
                                    },
                                    { 
                                        title: "Better Accessibility", 
                                        desc: "Step-by-step guidance is easier for elderly users to follow and complete.",
                                        icon: Users,
                                        color: "text-purple-400"
                                    }
                                ].map((benefit, i) => (
                                    <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6 hover:border-green-500/20 transition-all group">
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${benefit.color} group-hover:scale-110 transition-transform`}>
                                            <benefit.icon className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="text-white font-bold text-lg">{benefit.title}</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 rounded-[2rem] bg-green-500/5 border border-green-500/10">
                                <p className="text-green-100/70 text-base italic leading-relaxed text-center">
                                    "Overall, the experience became less overwhelming and more human-like, resulting in higher completion rates during early testing."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* High Fidelity Wireframe */}
                    <div className="space-y-12">
                        <div className="space-y-6 max-w-3xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">High Fidelity Wireframe</h2>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                Although we had time constraints, we decided to put our efforts into high-fidelity wireframing. This ensured precise detail was captured early, allowing both the product team and the client to understand exactly how each element would look and function.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl p-4 md:p-10 group">
                            <img 
                                src="/projects/seva_wireframes_official.png" 
                                alt="High Fidelity Wireframes" 
                                className="w-full h-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-700" 
                            />
                        </div>
                    </div>
                </section>
                <section className="space-y-24">
                     <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Visual Design & <span className="text-purple-400">UI Mockups</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Combining a calming purple palette with soft, rounded elements to create a sense of trust and tranquility. Glassmorphism is used to maintain depth while keeping the interface clean.
                        </p>
                    </div>

                    {/* 1. Chat Interface */}
                    <div className="group rounded-3xl overflow-hidden border border-white/10 bg-purple-500/[0.02] hover:border-purple-500/20 transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
                            <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <MessageCircle className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Chat Based Registration</h4>
                                        <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
                                            The chat-based registration allowing users to register by answering simple questions in a conversational style. This method is user-friendly, less overwhelming, and can guide users step by step, which is particularly beneficial for those who may find long forms confusing or cumbersome.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:p-10 bg-purple-500/[0.03] flex items-center justify-center overflow-hidden">
                                <div className="w-full max-w-[520px]">
                                    <img 
                                        src="/projects/seva_registration_mockup.png" 
                                        className="w-full h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-700" 
                                        alt="Chat Registration Mockup" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-3xl overflow-hidden border border-white/10 bg-pink-500/[0.02] hover:border-pink-500/20 transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
                            {/* Image on the Left */}
                            <div className="p-4 md:p-10 bg-pink-500/[0.03] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 order-2 lg:order-1">
                                <div className="w-full max-w-[520px]">
                                    <img 
                                        src="/projects/seva_companion_mockup.png" 
                                        className="w-full h-auto drop-shadow-[0_0_50px_rgba(236,72,153,0.15)] transition-all duration-700" 
                                        alt="AI Companion Mockup" 
                                    />
                                </div>
                            </div>

                            {/* Text on the Right */}
                            <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center order-1 lg:order-2">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                                        <Heart className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">AI Companion to Enhance Well being</h4>
                                        <div className="space-y-4">
                                            <p className="text-gray-300 text-lg">It is just not an AI Assistant but it also extend beyond by:</p>
                                            <ul className="space-y-3">
                                                {[
                                                    "Offering emotional support",
                                                    "Engaging in meaningful conversations",
                                                    "Providing mental health assistance"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-400">
                                                        <Check className="w-5 h-5 text-pink-500 shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <p className="text-gray-400 leading-relaxed text-lg italic">
                                                Seva is designed to safeguard users by proactively preventing negative situations. When Seva detects potential risks or concerning behavior, it immediately notifies the user's designated emergency contact, ensuring swift intervention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Smart Reminders */}
                    <div className="group rounded-3xl overflow-hidden border border-white/10 bg-blue-500/[0.02] hover:border-blue-500/20 transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
                            <div className="p-10 md:p-14 bg-[#0a0a0f] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <Bell className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Smart Reminders</h4>
                                            <p className="text-gray-400 text-lg leading-relaxed">
                                                Users can set reminders through a simple chat command or directly from their profile section.
                                            </p>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-6">
                                            {[
                                                { 
                                                    title: "Medication Adherence", 
                                                    desc: "Regular medication reminders reduce health risks for elderly users.",
                                                    icon: Activity,
                                                    color: "text-blue-400"
                                                },
                                                { 
                                                    title: "Emotional Check-ins", 
                                                    desc: "If users skip multiple tasks, Seva checks in with care — ensuring emotional well-being isn't overlooked.",
                                                    icon: Heart,
                                                    color: "text-pink-400"
                                                },
                                                { 
                                                    title: "Sense of Care", 
                                                    desc: "Each reminder feels personal and human, reinforcing the feeling that 'someone is looking out for me.'",
                                                    icon: Shield,
                                                    color: "text-green-400"
                                                }
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-5 group/item">
                                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${feature.color} group-hover/item:scale-110 transition-transform`}>
                                                        <feature.icon className="w-5 h-5" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h5 className="text-white font-bold">{feature.title}</h5>
                                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-4 md:p-10 bg-blue-500/[0.03] flex items-center justify-center overflow-hidden">
                                <div className="w-full max-w-[520px]">
                                    <img 
                                        src="/projects/seva_reminders_final.png" 
                                        className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-700" 
                                        alt="Smart Reminders Mockup" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcome & Impact */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Outcome & <span className="text-purple-400">Impact</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                             Seva.AI received high praise for its intuitive design and empathetic tone. In user testing with our target demographic, we observed significant improvements in engagement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                value: "69%", 
                                label: "Improvement in engagement", 
                                desc: "Seva keeps patients engaged throughout their care, significantly reducing drop-off rates.",
                                icon: Zap, 
                                bg: "bg-purple-500/10", 
                                border: "border-purple-500/20", 
                                text: "text-purple-400" 
                            },
                            { 
                                value: "80%", 
                                label: "Increase in compliance", 
                                desc: "Smart reminders and guided steps drive much higher completion rates for tasks.",
                                icon: Target, 
                                bg: "bg-pink-500/10", 
                                border: "border-pink-500/20", 
                                text: "text-pink-400" 
                            },
                            { 
                                value: "50%", 
                                label: "Better patient outcomes", 
                                desc: "AI-driven emotional support leads to measurable improvements in user satisfaction.",
                                icon: TrendingUp, 
                                bg: "bg-indigo-500/10", 
                                border: "border-indigo-500/20", 
                                text: "text-indigo-400" 
                            }
                        ].map((stat, i) => (
                            <div key={i} className={`p-10 rounded-[2.5rem] ${stat.bg} border ${stat.border} space-y-6 hover:scale-[1.02] transition-all duration-500 group`}>
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${stat.text} group-hover:scale-110 transition-transform duration-500`}>
                                    <stat.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className={`text-5xl font-black tracking-tighter ${stat.text}`}>{stat.value}</p>
                                        <p className="text-white text-xs font-bold uppercase tracking-[0.1em] opacity-90">{stat.label}</p>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 text-center rounded-3xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
                        <p className="text-3xl text-white font-serif italic mb-2 tracking-tight">"Finally, a companion that actually understands me."</p>
                        <p className="text-gray-500 text-sm italic font-medium">User Testing Feedback — August 2024</p>
                    </div>
                </section>

                {/* Key Learnings */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Key <span className="text-purple-400">Learnings</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Reflecting on the unique challenges of designing an empathetic AI platform for a vulnerable demographic.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "User Needs",
                                points: [
                                    "Conducting interviews provided deep insights to align design decisions with real-world needs."
                                ],
                                icon: Users,
                                color: "text-pink-400",
                                bg: "bg-pink-500/10",
                                border: "border-pink-500/20"
                            },
                            {
                                title: "AI Workflow",
                                points: [
                                    "Mastered the end-to-end process of building AI products and managing LLM conversational flows."
                                ],
                                icon: Cpu,
                                color: "text-purple-400",
                                bg: "bg-purple-500/10",
                                border: "border-purple-500/20"
                            },
                            {
                                title: "Product Vision",
                                points: [
                                    "Balanced technical feasibility with intuitive design to create a seamless user experience."
                                ],
                                icon: Layers,
                                color: "text-indigo-400",
                                bg: "bg-indigo-500/10",
                                border: "border-indigo-500/20"
                            }
                        ].map((learning, i) => (
                            <div key={i} className={`p-10 rounded-[2.5rem] ${learning.bg} border ${learning.border} space-y-8 hover:bg-white/[0.02] transition-all duration-500 group`}>
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${learning.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <learning.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-white tracking-tight">{learning.title}</h4>
                                    <ul className="space-y-4">
                                        {learning.points.map((point, pi) => (
                                            <li key={pi} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
                                                <span className="text-white/20 font-black shrink-0">{pi + 1}.</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Explore More section */}
                <section className="py-32 border-t border-white/5 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Explore More <span className="text-purple-400">Case Studies</span></h2>
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
                                    title: "Connectella Accessibility",
                                    image: "/projects/conectella_abstract.png",
                                    tags: ["Accessibility", "SaaS", "UX Research"],
                                    link: "#"
                                },
                                {
                                    id: "roleplay",
                                    title: "AI Roleplay for Connectella",
                                    image: "/projects/roleplay_ai_v2.png",
                                    tags: ["AI", "Sales Acceleration", "Persona Design"],
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
                                    className="min-w-full md:min-w-[calc(50%-12px)] snap-start group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-500 flex flex-col cursor-pointer"
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
                                            <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">{project.title}</h4>
                                            <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-all shrink-0">
                                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-purple-400/80 transition-colors">
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
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-400 -translate-x-4 group-hover/carousel:translate-x-0 z-10"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => document.getElementById('case-studies-carousel')?.scrollBy({ left: 400, behavior: 'smooth' })}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-400 translate-x-4 group-hover/carousel:translate-x-0 z-10"
                        >
                            <span className="rotate-180 block"><ArrowLeft className="w-6 h-6" /></span>
                        </button>
                    </div>
                </section>

                {/* Return to Work Button */}
                <section className="py-20 text-center">
                    <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black hover:bg-purple-500 hover:text-white transition-all duration-300 group shadow-xl active:scale-95"
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
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
                            className="max-w-[95%] max-h-[90vh] rounded-2xl shadow-2xl object-contain border border-white/10 relative z-[110]"
                            alt="Full Screen View"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SevaAiCaseStudy;
