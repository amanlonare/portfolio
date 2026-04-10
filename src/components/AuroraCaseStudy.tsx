import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Layers, 
  Target, 
  Zap, 
  ArrowUpRight, 
  Check, 
  Play, 
  Pause,
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  User, 
  Briefcase,
  AlertCircle,
  TrendingUp,
  Workflow,
  Eye,
  MessageSquare
} from "lucide-react";

interface CaseStudyProps {
    onBack: () => void;
    onOpenProject: (id: string) => void;
}

const AuroraCaseStudy = ({ onBack, onOpenProject }: CaseStudyProps) => {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const videos = [
        { id: 1, title: "Initial Flow", src: "/videos/A1.mp4" },
        { id: 2, title: "AI Interaction", src: "/videos/A2.mp4" },
        { id: 3, title: "Micro-interactions", src: "/videos/A3.mp4" }
    ];

    const nextVideo = () => {
        if (activeVideo < videos.length - 1) {
            setActiveVideo(prev => prev + 1);
        }
    };

    const prevVideo = () => {
        if (activeVideo > 0) {
            setActiveVideo(prev => prev - 1);
        }
    };

    const togglePlay = () => {
        const currentVideo = videoRefs.current[activeVideo];
        if (currentVideo) {
            if (currentVideo.paused) {
                currentVideo.play();
                setIsPlaying(true);
            } else {
                currentVideo.pause();
                setIsPlaying(false);
            }
        }
    };

    // Scroll to active video when it changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            const width = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: activeVideo * width,
                behavior: 'smooth'
            });
        }
        
        // Pause all videos and reset play state when slide changes
        videoRefs.current.forEach((video, idx) => {
            if (video && idx !== activeVideo) {
                video.pause();
            }
        });
        setIsPlaying(false);
    }, [activeVideo]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#050505] text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200 pb-20 font-sans"
        >
            {/* Nav Header */}
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
            <header className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
                        <Zap className="w-3.5 h-3.5" />
                        Interactive Prototyping
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter italic">
                            From static screens <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> to real interactions.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5 mt-12">
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Company</p>
                            <div className="flex items-center gap-2 text-white font-medium text-lg">
                                <Briefcase className="w-4 h-4 text-cyan-400" />
                                Aurora
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Role</p>
                            <div className="flex items-center gap-2 text-white font-medium text-lg">
                                <User className="w-4 h-4 text-cyan-400" />
                                UX Designer
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Year</p>
                            <div className="flex items-center gap-2 text-white font-medium text-lg">
                                <Clock className="w-4 h-4 text-cyan-400" />
                                2025
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Main Focus</p>
                            <div className="flex items-center gap-2 text-white font-medium text-lg italic uppercase">
                                PROTOTYPING
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-16 rounded-[2.5rem] border border-white/10 aspect-[16/8] relative overflow-hidden shadow-2xl bg-[#0a0a0f]"
                >
                    <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        poster="/projects/prototyping_v4.png"
                    >
                        <source src="/videos/hero.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
            </header>

            <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-40">
                
                {/* My Role Section */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <User className="text-cyan-400 w-6 h-6" /> My Role
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-gray-400 text-xl leading-relaxed font-light italic border-l-2 border-cyan-500/30 pl-8">
                            "My role in this project was to design high-fidelity screens and build detailed, <span className="text-cyan-400 font-medium tracking-tight">realistic interactions</span> using <span className="text-white font-medium italic underline underline-offset-4 decoration-cyan-500/30">Figma’s prototyping features.</span>"
                        </p>
                    </div>
                </section>

                {/* Project Description */}
                <section className="space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-12 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">Project <span className="text-cyan-400">Description</span></h2>
                            <p className="text-gray-400 text-xl leading-relaxed font-light max-w-4xl">
                                Lionbridge is building <span className="text-white font-medium font-mono">Aurora AI CX</span>, a next-generation AI-powered platform to elevate customer experience and global content management through automated, intelligent workflows.
                            </p>
                            <p className="text-gray-400 text-xl leading-relaxed font-light max-w-4xl">
                                As part of their GTM and CX strategy, the goal was to create a world-class, intuitive, and brand-aligned platform that supports scalability across multilingual operations.
                            </p>
                            <div className="p-8 rounded-[2.5rem] bg-cyan-500/[0.03] border border-cyan-500/10 hover:bg-cyan-500/[0.05] transition-all duration-500">
                                <p className="text-gray-300 italic text-lg text-center font-medium">
                                    "I designed a click-through interactive prototype to help leadership visualize the product’s potential and successfully secure funding for full-scale development."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Need & Challenges */}
                <section className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">The Need</h2>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                            The client faced challenges in translating static designs into development-ready functionality. Previous handoffs resulted in:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Misinterpretation", desc: "User flows and edge cases were often misinterpreted by technical teams.", icon: Eye },
                                { title: "Rework", desc: "Rework due to unclear interactions during development cycles.", icon: Workflow },
                                { title: "Heavier Dependency", desc: "Increased dependency on repeated verbal explanations to clarify intent.", icon: TrendingUp }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 mt-8">
                            <p className="text-gray-300 italic text-lg text-center">
                                "The client needed a clickable, realistic prototype that could act as a functional reference for developers."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Objective */}
                <section className="space-y-16">
                    <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-cyan-500/10 via-blue-500/[0.05] to-transparent border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] -z-10 group-hover:bg-cyan-500/30 transition-all duration-1000" />
                        
                        <div className="space-y-8 text-center max-w-4xl mx-auto">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-400 flex items-center justify-center text-black shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                                    <Target className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Objective</h2>
                                <p className="text-white text-2xl md:text-3xl font-light leading-snug tracking-tight">
                                    Build a fully interactive prototype to showcase real product behavior, interactions, and visual intent—ensuring <span className="text-cyan-400 font-medium">clear, efficient developer handoff.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="space-y-16">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <Workflow className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: "01", label: "Audit Static Screens" },
                            { step: "02", label: "Mapping Interactions" },
                            { step: "03", label: "Figma Prototyping" },
                            { step: "04", label: "Developer Handoff" }
                        ].map((p, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col gap-4 hover:bg-white/[0.04] transition-colors">
                                <span className="text-cyan-500 font-mono font-bold text-xs tracking-[0.2em]">{p.step}</span>
                                <span className="text-white font-bold text-xl">{p.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Prototype Media Player */}
                <section className="space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">The <span className="text-cyan-400">Prototype</span></h2>
                            <p className="text-gray-400 text-lg font-light">Experience the detailed micro-interactions and flows designed for Aurora AI CX.</p>
                        </div>
                        <div className="flex gap-4">
                            <button 
                                onClick={prevVideo}
                                disabled={activeVideo === 0}
                                className={`p-4 rounded-full border transition-all ${activeVideo === 0 ? 'border-white/5 text-gray-700 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50'}`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={nextVideo}
                                disabled={activeVideo === videos.length - 1}
                                className={`p-4 rounded-full border transition-all ${activeVideo === videos.length - 1 ? 'border-white/5 text-gray-700 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50'}`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] border border-white/10 shadow-2xl">
                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide w-full aspect-[16/8]"
                        >
                            {videos.map((video, idx) => (
                                <div key={idx} className="min-w-full h-full snap-start relative">
                                    <video 
                                        ref={el => videoRefs.current[idx] = el}
                                        className="w-full h-full object-cover"
                                        muted 
                                        loop 
                                        playsInline
                                        poster="/projects/prototyping_v4.png"
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    
                                    {/* Play/Pause Overlay Button */}
                                    <button 
                                        onClick={togglePlay}
                                        className="absolute inset-0 flex items-center justify-center group/play"
                                    >
                                        <div className={`w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover/play:opacity-100' : 'opacity-100 scale-110 shadow-[0_0_50px_rgba(34,211,238,0.3)]'}`}>
                                            {isPlaying ? (
                                                <Pause className="w-8 h-8 fill-current" />
                                            ) : (
                                                <Play className="w-8 h-8 fill-current ml-1" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Overlay label */}
                                    <div className="absolute bottom-10 left-10 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Interaction {idx + 1}</p>
                                                <p className="font-bold">{video.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {videos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveVideo(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeVideo === i ? 'bg-cyan-500 w-12' : 'bg-white/20 hover:bg-white/40 w-4'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact and outcome */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">Impact & <span className="text-cyan-400">outcome</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Reduced Ambiguity", desc: "Reduced ambiguity during development handoff.", icon: Check },
                            { title: "Visual Clarity", desc: "Helped developers clearly visualize how each feature should work.", icon: Eye },
                            { title: "Efficient Handoff", desc: "Minimized back-and-forth clarifications.", icon: MessageSquare },
                            { title: "Decision Making", desc: "Accelerated development alignment and decision-making.", icon: Zap },
                            { title: "Improved Confidence", desc: "Improved confidence in final implementation matching the intended design.", icon: TrendingUp }
                        ].map((outcome, i) => (
                            <div key={i} className={`p-10 rounded-[2.5rem] bg-cyan-500/[0.03] border border-cyan-500/10 flex gap-8 items-start hover:bg-cyan-500/[0.06] transition-all duration-500 ${i === 4 ? 'md:col-span-2' : ''}`}>
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/5">
                                    <outcome.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white tracking-tight">{outcome.title}</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">{outcome.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-16 rounded-[3.5rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <p className="text-gray-300 italic text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed relative z-10">
                            The resulting prototype acted as the <span className="text-white font-medium italic underline decoration-cyan-500/50 underline-offset-8 text-3xl font-black">"Source of Truth"</span> during development, effectively bridging the gap between design and implementation.
                        </p>
                    </div>
                </section>

                {/* Explore More section */}
                <section className="py-32 border-t border-white/10 space-y-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">Explore More <span className="text-cyan-400">Projects</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                id: "connectella",
                                title: "Connectella Accessibility",
                                image: "/projects/conectella_abstract.png",
                                tags: ["Accessibility", "WCAG"]
                            },
                            {
                                id: "roleplay",
                                title: "AI Roleplay for Connectella",
                                image: "/projects/roleplay_ai_v2.png",
                                tags: ["AI", "Sales"]
                            },
                            {
                                id: "seva",
                                title: "Seva.AI Companion",
                                image: "/projects/seva_ai_v2.png",
                                tags: ["Conversational UX", "AI"]
                            }
                        ].map((project, idx) => (
                            <motion.div
                                key={project.id}
                                onClick={() => onOpenProject(project.id)}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col cursor-pointer aspect-square md:aspect-auto"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                <div className="p-8 space-y-4">
                                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h4>
                                    <div className="flex gap-2">
                                        {project.tags.map(t => (
                                            <span key={t} className="text-[10px] font-bold text-cyan-400/60 uppercase tracking-widest">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
        </motion.div>
    );
};

export default AuroraCaseStudy;
