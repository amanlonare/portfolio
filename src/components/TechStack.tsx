import React from "react";
import { motion } from "motion/react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
  SiFlutter,
  SiGo,
  SiPython,
  SiPostgresql,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiRust,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiLanggraph,
  SiCrewai,
  SiHuggingface,
  SiRedis,
  SiMongodb,
  SiApachespark,
  SiSupabase,
  SiNeo4J,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiMlflow,
  SiApacheairflow,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { Database, BookOpen, Brain, Cloud, Server, Workflow } from "lucide-react";

// Reusable pill component for individual technologies
const TechPill = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`
        flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full 
        bg-white/5 border border-white/10 
        backdrop-blur-md shadow-lg
        hover:border-${color}-500/50 hover:bg-${color}-500/10 transition-all duration-300 group cursor-default
      `}
    >
      <Icon className={`w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-${color}-400 transition-colors`} />
      <span className="text-xs md:text-base font-medium text-gray-400 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
};

// Sub-category row component
const SubCategory = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 lg:gap-8 w-full justify-center md:justify-start px-4">
    <span className="text-[10px] md:text-xs font-bold text-cyan-500/50 uppercase tracking-[0.2em] md:w-32 md:text-right shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-1.5 md:pb-0 md:pr-6">
      {label}
    </span>
    <div className="flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-4">
      {children}
    </div>
  </div>
);

// Container for a specific layer (e.g., Frontend, Backend)
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

        <h3 className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold z-10">{title}</h3>

        <div className="flex flex-col gap-8 z-10 w-full items-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// The main Tech Stack visualization
export const TechStack = () => {
  return (
    <div className="relative p-2 md:p-4 rounded-3xl overflow-hidden max-w-7xl mx-auto">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Stack Layers */}
      <div className="space-y-8 relative z-10">

        {/* Frontend Layer */}
        <LayerContainer title="Frontend Ecosystem" index={0}>
          <SubCategory label="Core">
            <TechPill icon={SiJavascript} name="JavaScript" color="yellow" />
            <TechPill icon={SiTypescript} name="TypeScript" color="blue" />
            <TechPill icon={SiDart} name="Dart" color="cyan" />
          </SubCategory>
          <SubCategory label="Frameworks">
            <TechPill icon={SiReact} name="React" color="cyan" />
            <TechPill icon={SiNextdotjs} name="Next.js" color="slate" />
            <TechPill icon={SiTailwindcss} name="Tailwind" color="sky" />
            <TechPill icon={SiFlutter} name="Flutter" color="blue" />
          </SubCategory>
        </LayerContainer>

        {/* Backend Layer */}
        <LayerContainer title="Scalable Backend" index={1}>
          <SubCategory label="Languages">
            <TechPill icon={SiGo} name="Go" color="cyan" />
            <TechPill icon={SiRust} name="Rust" color="orange" />
            <TechPill icon={SiPython} name="Python" color="yellow" />
          </SubCategory>
          <SubCategory label="Frameworks">
            <TechPill icon={SiFastapi} name="FastAPI" color="teal" />
            <TechPill icon={SiFlask} name="Flask" color="slate" />
            <TechPill icon={SiDjango} name="Django" color="green" />
            <TechPill icon={SiNodedotjs} name="Node.js" color="green" />
          </SubCategory>
        </LayerContainer>

        {/* AI Layer */}
        <LayerContainer title="AI Intelligence Layer" index={2}>
          <SubCategory label="ML Frameworks">
            <TechPill icon={SiPytorch} name="PyTorch" color="orange" />
            <TechPill icon={SiTensorflow} name="TensorFlow" color="orange" />
            <TechPill icon={SiHuggingface} name="Hugging Face" color="yellow" />
          </SubCategory>
          <SubCategory label="Agents & RAG">
            <TechPill icon={SiLangchain} name="LangChain" color="emerald" />
            <TechPill icon={SiLanggraph} name="LangGraph" color="slate" />
            <TechPill icon={SiCrewai} name="CrewAI" color="red" />
            <TechPill icon={BookOpen} name="LlamaIndex" color="purple" />
          </SubCategory>
          <SubCategory label="GenAI Space">
            <TechPill icon={SiOpenai} name="OpenAI" color="green" />
            <TechPill icon={SiAnthropic} name="Anthropic" color="purple" />
            <TechPill icon={FaGoogle} name="Gemini" color="blue" />
            <TechPill icon={FaAws} name="Bedrock" color="orange" />
          </SubCategory>
        </LayerContainer>

        {/* Data Layer */}
        <LayerContainer title="Data Infrastructure" index={3}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={SiPostgresql} name="PostgreSQL" color="blue" />
            <TechPill icon={SiRedis} name="Redis" color="red" />
            <TechPill icon={SiMongodb} name="MongoDB" color="green" />
            <TechPill icon={SiSupabase} name="Supabase" color="emerald" />
            <TechPill icon={SiNeo4J} name="Neo4j" color="indigo" />
            <TechPill icon={SiApachespark} name="Spark" color="orange" />
            <TechPill icon={Database} name="Pinecone" color="cyan" />
            <TechPill icon={Database} name="ChromaDB" color="purple" />
          </div>
        </LayerContainer>

        {/* MLOps & Cloud Infrastructure */}
        <LayerContainer title="MLOps & Platform" index={4}>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill icon={FaAws} name="AWS" color="orange" />
            <TechPill icon={SiGooglecloud} name="GCP" color="blue" />
            <TechPill icon={FaMicrosoft} name="Azure" color="sky" />
            <TechPill icon={SiKubernetes} name="Kubernetes" color="blue" />
            <TechPill icon={SiDocker} name="Docker" color="blue" />
            <TechPill icon={SiTerraform} name="Terraform" color="purple" />
            <TechPill icon={SiMlflow} name="MLflow" color="blue" />
            <TechPill icon={SiApacheairflow} name="Airflow" color="slate" />
            <TechPill icon={FaAws} name="SageMaker" color="orange" />
          </div>
        </LayerContainer>

      </div>
    </div>
  );
};
