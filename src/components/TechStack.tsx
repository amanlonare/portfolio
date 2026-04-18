import React from "react";
import { motion } from "motion/react";
import {
  SiFigma,
  SiFramer,
  SiWebflow,
  SiReact,
} from "react-icons/si";
import { 
  TrendingUp,
  Database,
  Globe,
  FileSpreadsheet,
  PieChart,
  BarChart,
  Target,
  Cpu,
  Notebook,
  FlaskConical,
  Activity,
  Sparkles,
  Terminal,
  Code2,
  GitFork,
  Network,
  Layers,
  Search,
  Zap,
  Map,
  Users
} from "lucide-react";

// Reusable pill component for individual technologies
const TechPill = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => {
  const colorMap: { [key: string]: { border: string, bg: string, text: string } } = {
    cyan: { border: "hover:border-cyan-500/50", bg: "hover:bg-cyan-500/10", text: "group-hover:text-cyan-400" },
    purple: { border: "hover:border-purple-500/50", bg: "hover:bg-purple-500/10", text: "group-hover:text-purple-400" },
    pink: { border: "hover:border-pink-500/50", bg: "hover:bg-pink-500/10", text: "group-hover:text-pink-400" },
    green: { border: "hover:border-green-500/50", bg: "hover:bg-green-500/10", text: "group-hover:text-green-400" },
    blue: { border: "hover:border-blue-500/50", bg: "hover:bg-blue-500/10", text: "group-hover:text-blue-400" },
    orange: { border: "hover:border-orange-500/50", bg: "hover:bg-orange-500/10", text: "group-hover:text-orange-400" },
    indigo: { border: "hover:border-indigo-500/50", bg: "hover:bg-indigo-500/10", text: "group-hover:text-indigo-400" },
    sky: { border: "hover:border-sky-500/50", bg: "hover:bg-sky-500/10", text: "group-hover:text-sky-400" },
    red: { border: "hover:border-red-500/50", bg: "hover:bg-red-500/10", text: "group-hover:text-red-400" },
    yellow: { border: "hover:border-yellow-500/50", bg: "hover:bg-yellow-500/10", text: "group-hover:text-yellow-400" },
    amber: { border: "hover:border-amber-500/50", bg: "hover:bg-amber-500/10", text: "group-hover:text-amber-400" },
    rose: { border: "hover:border-rose-500/50", bg: "hover:bg-rose-500/10", text: "group-hover:text-rose-400" },
    slate: { border: "hover:border-slate-500/50", bg: "hover:bg-slate-500/10", text: "group-hover:text-slate-400" },
  };

  const styles = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`
        flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full 
        bg-white/5 border border-white/10 
        backdrop-blur-md shadow-lg
        ${styles.border} ${styles.bg} transition-all duration-300 group cursor-default
      `}
    >
      <Icon className={`w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400 ${styles.text} transition-colors`} />
      <span className="text-xs md:text-base font-medium text-gray-400 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
};

// Container for a specific category
const LayerContainer = ({ title, children, index = 0 }: { title: string, children: React.ReactNode, index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full max-w-6xl mx-auto"
    >
      <div className="
        relative z-10 flex flex-col items-center justify-center p-6 md:p-8 
        rounded-2xl border border-white/10 bg-white/5
        backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-cyan-500/20 transition-colors duration-500
      ">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-black text-gray-500 mb-8 z-10 text-center w-full">{title}</h3>

        <div className="flex flex-col gap-8 z-10 w-full items-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// Component for text-based icons (Language section)
const TextIcon = ({ char, className }: { char: string, className?: string }) => (
  <span className={`w-3.5 h-3.5 md:w-5 md:h-5 flex items-center justify-center font-bold text-[10px] md:text-xs ${className}`}>
    {char}
  </span>
);

// The main Tech Stack visualization
export const TechStack = () => {
  return (
    <div className="relative p-2 md:p-4 rounded-3xl overflow-hidden max-w-7xl mx-auto">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Stack Layers */}
      <div className="space-y-8 relative z-10">

        {/* Data & Analytical Methods Layer */}
        <LayerContainer title="ANALYTICAL METHODS" index={0}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={TrendingUp} name="Predictive Modelling" color="cyan" />
            <TechPill icon={Activity} name="Simulation Modeling" color="purple" />
            <TechPill icon={Zap} name="Optimization" color="pink" />
            <TechPill icon={FlaskConical} name="Risk Assessment" color="green" />
            <TechPill icon={Target} name="Decision Analytics" color="blue" />
            <TechPill icon={Search} name="Data Mining" color="orange" />
            <TechPill icon={Activity} name="Time Series Analysis" color="indigo" />
            <TechPill icon={Layers} name="Data Cleaning" color="sky" />
            <TechPill icon={BarChart} name="KPI Tracking" color="red" />
            <TechPill icon={Activity} name="Statistical Analysis" color="yellow" />
          </div>
        </LayerContainer>

        {/* Data & BI Tools Layer */}
        <LayerContainer title="DATA & BI TOOLS" index={1}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={BarChart} name="Tableau" color="purple" />
            <TechPill icon={Activity} name="Power BI" color="blue" />
            <TechPill icon={FileSpreadsheet} name="Advanced Excel" color="green" />
            <TechPill icon={Database} name="SQL (PostgreSQL/MySQL)" color="indigo" />
            <TechPill icon={Code2} name="VBA" color="orange" />
            <TechPill icon={Network} name="AnyLogic" color="pink" />
            <TechPill icon={Globe} name="Google Workspace" color="sky" />
          </div>
        </LayerContainer>

        {/* Technical & Operational Layer */}
        <LayerContainer title="TECHNICAL & OPERATIONAL" index={2}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={Terminal} name="Python (Pandas/NumPy)" color="blue" />
            <TechPill icon={Cpu} name="Arduino/IoT" color="orange" />
            <TechPill icon={GitFork} name="Git / GitHub" color="slate" />
            <TechPill icon={Layers} name="JIRA & Confluence" color="blue" />
            <TechPill icon={Notebook} name="Trello" color="pink" />
            <TechPill icon={Code2} name="HTML/CSS" color="orange" />
          </div>
        </LayerContainer>

        <LayerContainer title="LANGUAGE" index={3}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={(props: any) => <TextIcon char="A" {...props} />} name="English" color="blue" />
            <TechPill icon={(props: any) => <TextIcon char="अ" {...props} />} name="Hindi" color="orange" />
            <TechPill icon={(props: any) => <TextIcon char="M" {...props} />} name="Marathi" color="red" />
          </div>
        </LayerContainer>

      </div>
    </div>
  );
};
