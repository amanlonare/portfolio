import { motion } from "motion/react";
import { ArrowLeft, Share2, Sparkles, LayoutTemplate, Search, Check, Play, Pause, PhoneOff, Phone, MonitorPlay, Target, Users, BookOpen, Layers, ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
    onBack: () => void;
    onOpenProject: (id: string) => void;
}

const ConnectellaCaseStudy = ({ onBack, onOpenProject }: CaseStudyProps) => {
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
                    <span className="font-medium">Work</span>
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Case Study
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Connectella <br />
                        <span className="text-cyan-400">Accessibilty</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 text-left">
                        <div className="space-y-2">
                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Client</p>
                            <p className="text-white font-medium text-lg">Connectella</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Domain</p>
                            <p className="text-white font-medium text-lg">SaaS</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Date</p>
                            <p className="text-white font-medium text-lg">Apr 2024 - Present</p>
                        </div>
                    </div>
                </motion.div>
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-12 space-y-32">
                {/* Introduction */}
                <section className="space-y-6">
                    <p className="text-gray-300 text-xl leading-relaxed font-light">
                        <strong className="text-white font-semibold">Connectella</strong> is a sales acceleration platform that helps sales reps have more live conversations by automating dialing. It has multiple modules designed to boost outbound productivity: Dailing sessions, Coaching, Reports and Bullpen. This case study explores improving product accessibility for users with color vision deficiencies.
                    </p>
                </section>

                {/* The Moment of Realization */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Designing for Everyone: A Journey Toward Accessible Session Status Badges
                        </h2>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-cyan-400">The Moment of Realization</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                During a routine user testing, one of our client's employee who was colorblind mentioned something that caught our attention:
                                <br /><br />
                                <em className="text-white text-xl pl-4 border-l-2 border-cyan-500 block py-2 bg-white/5 rounded-r-lg">“I can’t really tell the difference between the red and orange badges.”</em>
                                <br />
                                That single sentence unraveled an overlooked truth—our color-coded system was unintentionally excluding users with color vision deficiency.
                            </p>
                        </div>

                        <div className="space-y-4 mt-10">
                            <h3 className="text-xl font-bold text-cyan-400">The Problem with the Original Design</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                The initial design utilized color badges to represent different session statuses. However, the <strong className="text-white font-bold">orange badge</strong>, indicating <strong className="text-white font-bold">"Paused"</strong> status was not visually distinguishable for colorblind users, potentially hindering their ability to understand the table's information.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5 bg-white/5"
                            >
                                <img
                                    src="/projects/connectella_original_detailed.png"
                                    alt="Original ConnectAndSell UI with problematic color badges"
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                            <p className="text-center text-sm text-gray-500 mt-4 italic font-medium">Detailed view of the original table design where 'Running' and 'Paused' badges lacked distinct contrast</p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/10 w-full" />

                {/* Design Process */}
                <section className="space-y-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                            <Layers className="text-cyan-400 w-8 h-8" /> Design Process
                        </h2>

                        {/* Design Process Flow Visual */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 pb-6">
                            {[
                                { 
                                    step: "01", 
                                    title: "User Research", 
                                    subtitle: "understanding color blindness",
                                    icon: Search,
                                    color: "text-cyan-400",
                                    bg: "bg-cyan-500/5",
                                    border: "border-cyan-500/20"
                                },
                                { 
                                    step: "02", 
                                    title: "Design & Iteration", 
                                    subtitle: "color palette selection",
                                    icon: LayoutTemplate,
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/5",
                                    border: "border-purple-500/20"
                                },
                                { 
                                    step: "03", 
                                    title: "Design Solution", 
                                    subtitle: "Final design with improved accessibilty",
                                    icon: Target,
                                    color: "text-green-400",
                                    bg: "bg-green-500/5",
                                    border: "border-green-500/20"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative p-8 rounded-3xl ${item.bg} border ${item.border} space-y-4 group hover:bg-white/[0.04] transition-all duration-500`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className={`p-3 rounded-2xl bg-black/40 border border-white/5 ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic">{item.step}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{item.subtitle}</p>
                                    </div>
                                    
                                    {/* Connectivity lines for desktop */}
                                    {idx < 2 && (
                                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                            <div className="w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide">
                            <BookOpen className="w-5 h-5 text-cyan-400" />
                            Desk Research
                        </div>
                        <h3 className="text-2xl font-bold text-white">A Closer Look: Learning About Color Blindness</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We learned it's caused by a deficiency in the eye's cone cells, which detect color.
                            <br /><br />
                            Out of the various types of color vision deficiency, we chose to focus on improving the experience for the most common one—<strong className="text-white">Red-Green Color Blindness</strong>. This includes subtypes like Deuteranopia, Deuteranomaly, Protanopia, and Protanomaly, all of which affect the ability to distinguish between red and green hues.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] bg-[#0a0a0f]"
                        >
                            <img
                                src="/projects/nyan_cat_vision_horizontal.jpg"
                                alt="Horizontal Nyan Cat color blindness comparison"
                                className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-all duration-500"
                            />
                        </motion.div>

                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Understanding How Color Blind User see badges</h3>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-6 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white"
                            >
                                <img
                                    src="/projects/connectella_ui_colorblind_simulation.png"
                                    alt="UI simulation showing how color blind users perceive the badges"
                                    className="w-full h-auto block"
                                />
                            </motion.div>
                            <h4 className="text-xl font-bold text-cyan-400 pt-6">User Insights: What the Badges Were Really Saying (or Not Saying)</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Colors Lost Meaning", desc: "Under color blindness simulations, badge backgrounds became hard to distinguish or invisible—causing confusion about status." },
                                { title: "Poor Contrast", desc: "The color contrast didn’t meet WCAG AA/AAA standards, making badges difficult to see, especially for colorblind users or in low-light settings." },
                                { title: "No Visual Support", desc: "The design relied solely on color to indicate status, forcing users to read each badge manually—slowing down decision-making." },
                                { title: "Weak Font Weight", desc: "Light text inside the badges reduced readability, especially for quick scanning in fast-paced environments." }
                            ].map((insight, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold group-hover:bg-cyan-500 group-hover:text-black transition-colors">{idx + 1}</div>
                                        <h5 className="font-bold text-white">{insight.title}</h5>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {insight.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/10 w-full" />

                {/* Design and Iteration */}
                <section className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                            <LayoutTemplate className="text-cyan-400 w-8 h-8" /> Design and Iteration
                        </h2>
                        <h3 className="text-xl font-bold text-cyan-400 pt-4">Taking Action: Redesigning with Inclusion in Mind</h3>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-2xl font-bold text-white">Design Rationale</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h5 className="font-bold text-white">Limited Color Palette</h5>
                                <p className="text-gray-400 leading-relaxed">To avoid overwhelming users with excessive colors and ensure focus on essential information, a restricted color palette was adopted.</p>
                            </div>
                            <div className="space-y-3">
                                <h5 className="font-bold text-white">Icon Integration</h5>
                                <p className="text-gray-400 leading-relaxed">To provide visual cues and reduce reliance on color alone, icons were added to each badge, offering a more intuitive understanding of the representative's status.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-2xl font-bold text-white">Color and Icon Selection</h4>

                        <div className="space-y-6">
                            {[
                                { status: "Running", icon: Play, text: "Green was chosen to represent an active state, analogous to a green flag signaling readiness for engagement.", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
                                { status: "Paused", icon: Pause, text: "Orange was used to indicate a temporary halt, aligning with its common association with pausing or stopping actions.", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
                                { status: "Disconnected", icon: PhoneOff, text: "The red color was retained as it clearly signifies a non-active state, aligning with the convention of red indicating limitations or unavailable actions.", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
                                { status: "Phone Bridge Connected", icon: Phone, text: "After experimentation, purple was selected as it provided a distinct visual contrast without overshadowing other important statuses, particularly when viewed through color blindness filters.", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
                                { status: "Phone Bridge Disconnected", icon: MonitorPlay, text: "Gray was chosen to convey a disabled state, suggesting that listening actions are not currently available.", color: "text-gray-400", bg: "bg-gray-400/10", border: "border-gray-400/20" }
                            ].map((item) => (
                                <div key={item.status} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 items-start md:items-center hover:bg-white/[0.05] transition-colors">
                                    <div className={`shrink-0 px-4 py-2 ${item.bg} border ${item.border} rounded-full flex items-center gap-2 w-max`}>
                                        <item.icon className={`w-4 h-4 ${item.color}`} />
                                        <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>{item.status}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed md:ml-4">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-2xl font-bold text-white">Iterative and Improvements</h4>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-6 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white"
                        >
                            <img
                                src="/projects/connectella_iterations.jpg"
                                alt="Iterative badge design comparison showing Original, Version 1, and Version 2"
                                className="w-full h-auto block"
                            />
                        </motion.div>

                        <div className="space-y-6 pt-4">
                            <div className="p-6 border-l-2 border-cyan-500 bg-cyan-500/5 rounded-r-xl">
                                <strong className="text-white block mb-2">Version 1:</strong>
                                <p className="text-gray-400">The initial design incorporated icons and improved color and contrast to enhance clarity and accessibility.</p>
                            </div>
                            <div className="p-6 border-l-2 border-cyan-500 bg-cyan-500/5 rounded-r-xl">
                                <strong className="text-white block mb-2">Version 2:</strong>
                                <p className="text-gray-400">The background colors were refined to ensure consistent badge weight and further differentiate the "Phone Bridge Connected" status.</p>
                            </div>
                            <p className="text-gray-300 italic pt-4">
                                Overall, the design iterations focused on creating a more visually intuitive and accessible interface that effectively communicates representative statuses to users with various color vision capabilities.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/10 w-full" />

                {/* Design Solution & Impact */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                            <Target className="text-cyan-400 w-8 h-8" /> Design Solution & Impact
                        </h2>
                        <h3 className="text-xl font-bold text-cyan-400 pt-4">Improved badges with color blindness filter</h3>
                        
                        <div className="pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                            >
                                {/* Matrix Header */}
                                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                        <h4 className="text-white font-bold text-lg uppercase tracking-tight">Accessibility Comparison Matrix</h4>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                        Simultaneous View: All 5 Conditions
                                    </div>
                                </div>

                                {/* Comparison Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200">
                                    {[
                                        { title: "Original", filter: "original", highlight: true },
                                        { title: "Deuteranopia", filter: "deuteranopia" },
                                        { title: "Deuteranomaly", filter: "deuteranomaly" },
                                        { title: "Protanopia", filter: "protanopia" },
                                        { title: "Protanomaly", filter: "protanomaly" }
                                    ].map((vision, idx) => (
                                        <div key={idx} className="bg-white flex flex-col items-stretch group/cell transition-colors duration-300">
                                            {/* Label */}
                                            <div className={`px-2 py-3 text-center border-b border-gray-100 ${vision.highlight ? 'bg-cyan-50' : 'bg-gray-50'}`}>
                                                <span className={`text-[10px] font-bold uppercase tracking-tighter ${vision.highlight ? 'text-cyan-600' : 'text-gray-500'}`}>
                                                    {vision.title}
                                                </span>
                                            </div>

                                            {/* Image Area */}
                                            <div className="aspect-[3/4] p-4 flex items-center justify-center relative group-hover/cell:bg-gray-50/50 transition-colors">
                                                <img 
                                                    src={`/projects/badge_${vision.filter}.png`} 
                                                    alt={vision.title}
                                                    className="w-full h-full object-contain drop-shadow-sm group-hover/cell:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Matrix Footer */}
                                <div className="p-6 bg-black/20 border-t border-white/10">
                                    <p className="text-gray-400 text-xs leading-relaxed text-center italic">
                                        Scan across the rows to see how each redesign element (icons + high-contrast colors) maintains its identity even when color information is reduced or absent.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed pt-4">
                            Fixing the badge design wasn’t just about color—it was about <strong className="text-white">inclusion</strong>. By listening to users, testing iteratively, and following accessibility standards, we transformed a confusing experience into a clear, intuitive one for users with color blindness.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                        <h4 className="text-xl font-bold text-white">Key Takeaways</h4>
                        <ul className="space-y-4">
                            {[
                                "User research matters—real insights come from real users.",
                                "Iterate with purpose—small tweaks can make a big difference.",
                                "Go beyond color—icons and contrast help everyone.",
                                "Standards guide us—WCAG isn’t a checkbox, it’s a compass."
                            ].map((lesson, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{lesson}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center py-8">
                        <p className="text-2xl text-white font-medium italic">
                            "In the end, designing with accessibility in mind didn’t just help a few—it improved the experience for all."
                        </p>
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
                                    id: "seva",
                                    title: "Seva.AI — An AI Companion",
                                    image: "/projects/seva_ai_v2.png",
                                    tags: ["Chat", "AI UX", "Wellness"],
                                    link: "#"
                                },
                                {
                                    id: "roleplay",
                                    title: "AI Roleplay for Connectella",
                                    image: "/projects/roleplay_ai_v2.png",
                                    tags: ["AI Builder", "Sales Simulation", "CRM"],
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
        </motion.div>
    );
};

export default ConnectellaCaseStudy;
