import { TechStack } from "./TechStack";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Download, Brain, Database, Mic, Settings, Layers, Server, Satellite, BarChart, Box, ExternalLink, FileText, Globe, BookOpen, Send, User, MessageSquare } from "lucide-react";
import { SiLangchain, SiFlutter, SiFastapi, SiOpenai, SiMixpanel, SiApachekafka } from "react-icons/si";
import { FaCogs, FaProjectDiagram, FaAws, FaMedium } from "react-icons/fa";

const SocialButton = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <a
    href={href}
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const getTechIcon = (tag: string) => {
  const normalizedTag = tag.toLowerCase();

  if (normalizedTag.includes("langgraph") || normalizedTag.includes("langchain") || normalizedTag.includes("llamaindex")) return SiLangchain;
  if (normalizedTag.includes("bedrock") || normalizedTag.includes("aws") || normalizedTag.includes("sagemaker") || normalizedTag.includes("rds") || normalizedTag.includes("ec2") || normalizedTag.includes("cloudwatch")) return FaAws;
  if (normalizedTag.includes("flutter")) return SiFlutter;
  if (normalizedTag.includes("mlops")) return FaCogs;
  if (normalizedTag.includes("rag") || normalizedTag.includes("generative ai") || normalizedTag.includes("llm")) return Brain;
  if (normalizedTag.includes("pinecone") || normalizedTag.includes("database") || normalizedTag.includes("eventstoredb") || normalizedTag.includes("chromadb") || normalizedTag.includes("sqlite") || normalizedTag.includes("mysql") || normalizedTag.includes("postgresql") || normalizedTag.includes("data engineering")) return Database;
  if (normalizedTag.includes("voice") || normalizedTag.includes("whisper")) return Mic;
  if (normalizedTag.includes("fastapi")) return SiFastapi;
  if (normalizedTag.includes("openai") || normalizedTag.includes("ollama") || normalizedTag.includes("groq") || normalizedTag.includes("pllama")) return SiOpenai;
  if (normalizedTag.includes("mixpanel")) return SiMixpanel;
  if (normalizedTag.includes("cqrs")) return FaProjectDiagram;
  if (normalizedTag.includes("kafka") || normalizedTag.includes("debezium") || normalizedTag.includes("cdc")) return SiApachekafka;
  if (normalizedTag.includes("ddd") || normalizedTag.includes("domain")) return Box;
  if (normalizedTag.includes("microservices") || normalizedTag.includes("cloud")) return Server;
  if (normalizedTag.includes("remote sensing") || normalizedTag.includes("satellite") || normalizedTag.includes("cnn")) return Satellite;
  if (normalizedTag.includes("statistical") || normalizedTag.includes("sysbench")) return BarChart;

  return Settings; // Default icon
};

const ExperienceItem = ({ role, company, period, description, tags, index, link }: { role: string, company: string, period: string, description: string, tags: string[], index: number, link?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative pl-6 md:pl-8 border-l border-white/10 hover:border-cyan-500/50 transition-colors duration-300"
  >
    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-gray-800 group-hover:bg-cyan-400 transition-colors duration-300 border border-black" />

    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{role}</h4>
      <span className="text-[10px] md:text-sm font-mono text-gray-500">{period}</span>
    </div>

    <div className="flex items-center gap-3 mb-4">
      <div className="text-base md:text-lg font-medium text-gray-400">{company}</div>
      {link && (
        <a
          href={link.startsWith('http') ? link : `https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg bg-white/5 text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
    <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl mb-6">{description}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map(tag => {
        const Icon = getTechIcon(tag);
        return (
          <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
            <Icon className="w-3.5 h-3.5" />
            {tag}
          </span>
        );
      })}
    </div>
  </motion.div>
);

type ProjectLink = {
  url: string;
  type: 'github' | 'demo' | 'paper' | 'external';
  label?: string;
};

const ProjectItem = ({ title, description, tags, links, index }: { title: string, description: string, tags: string[], links?: ProjectLink[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full"
  >
    <div className="flex flex-col gap-6 flex-grow">
      <div className="flex justify-between items-start">
        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h4>
        <div className="flex gap-3">
          {links?.map((link, i) => {
            let Icon = ExternalLink;
            if (link.type === 'github') Icon = Github;
            if (link.type === 'paper') Icon = FileText;
            if (link.type === 'demo') Icon = Globe;

            return (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all" title={link.label || link.type}>
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {tags.map(tag => {
          const Icon = getTechIcon(tag);
          return (
            <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors cursor-default">
              <Icon className="w-3.5 h-3.5" />
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

const BlogItem = ({ title, description, link, tags, index }: { title: string, description: string, link: string, tags: string[], index: number }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group block relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-cyan-500/10 transition-colors">
          <FaMedium className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h4>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
    </div>

    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map(tag => {
        const Icon = getTechIcon(tag);
        return (
          <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-white/5 text-gray-500 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-gray-300 transition-colors">
            <Icon className="w-3.5 h-3.5" />
            {tag}
          </span>
        );
      })}
    </div>
  </motion.a>
);

const CertificationItem = ({ 
  title, 
  issuer, 
  date, 
  credentialId, 
  link, 
  logo, 
  index,
  scale = 1.1 // Default slight scale to fill better
}: { 
  title: string, 
  issuer?: string, 
  date: string, 
  credentialId: string, 
  link: string, 
  logo?: string, 
  index: number,
  scale?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group flex flex-col items-center"
  >
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative mb-8 cursor-pointer"
    >
      <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] overflow-hidden bg-transparent">
        {logo ? (
          <img 
            src={logo} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500" 
            style={{ transform: `scale(${scale})` }}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-cyan-500/5 flex items-center justify-center border border-cyan-500/10">
            <BookOpen className="w-12 h-12 text-cyan-400/20" />
          </div>
        )}
      </div>

      <div className="absolute -bottom-1 -right-1 w-11 h-11 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400 shadow-2xl scale-0 group-hover:scale-100 transition-all duration-300 z-20 hover:bg-cyan-500 hover:text-black hover:border-transparent">
        <ExternalLink className="w-5 h-5" />
      </div>
    </a>

    <div className="text-center px-4 max-w-[260px]">
      <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight tracking-tight">{title}</h4>
      <div className="flex flex-col gap-2 items-center">
        <div className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
          <span className="text-[10px] font-mono text-gray-400 group-hover:text-cyan-400/80 uppercase tracking-[0.2em]">{date}</span>
        </div>
        <span className="text-[9px] font-mono text-gray-600 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" title={credentialId}>{credentialId}</span>
      </div>
    </div>
  </motion.div>
);

const ServiceCard = ({ title, description, tags, index }: { title: string, description: string, tags: string[], index: number }) => {
  const Icon = getTechIcon(tags[0]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col group"
    >
      <div className="mb-6 flex-grow">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-white/5 text-gray-500 group-hover:text-cyan-400/70 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Resume = () => {
  return (
    <div className="min-h-screen bg-[#050505] relative z-10 text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200">

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-24 md:space-y-32">

        {/* Tech Stack Section - The Hero Feature */}
        <section id="skills">
          <div className="flex items-center gap-4 mb-16">
            <h3 className="text-3xl font-bold text-white">Technical Architecture</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
          <TechStack />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Experience</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            <ExperienceItem
              index={0}
              role="Senior AI Engineer"
              company="Archetype Studio"
              period="Aug 2023 – Present"
              description="Architecting sophisticated Multi-Agent Orchestration workflows using LangGraph and AWS Bedrock to automate complex FinTech operations. Developed a state-of-the-art AI Coding Assistant that streamlines end-to-end development cycles. Engineered a production-grade MLOps pipeline for mobile model optimization, handling over 1 million daily inferences. Spearheaded the design of a high-precision edge-computing system for real-time transportation mode detection, achieving 99.3% validation accuracy."
              tags={["LangGraph", "Bedrock", "AWS SageMaker", "Flutter", "MLOps"]}
            />
            <ExperienceItem
              index={1}
              role="AI Engineer (Founding Team)"
              company="MindYogi.me"
              link="mindyogi.me"
              period="Dec 2025 – Present"
              description="Pioneering the development of advanced Agentic RAG systems for a wellness-focused platform, integrating self-reflective retrieval strategies to minimize hallucinations. Engineered a high-performance, low-latency Voice AI agent (<2s response time) using custom WebSocket protocols. Optimized vector search performance and retrieval accuracy on Pinecone through advanced semantic indexing and hybrid search techniques."
              tags={["RAG", "LangGraph", "Pinecone", "Voice AI", "FastAPI"]}
            />
            <ExperienceItem
              index={2}
              role="AI Engineer"
              company="Hypothesis AI"
              period="May 2025 – July 2025"
              description="Designed and deployed a scalable multilingual AI Voice Agent specifically for E-commerce abandoned checkout recovery, resulting in a 90% increase in conversion rates. Built a robust event-driven integration framework using FastAPI to sync real-time data between Shopify and downstream analytics platforms like Mixpanel. Leveraged prompt engineering and context-window management to ensure highly personalized customer interactions."
              tags={["OpenAI", "RAG", "FastAPI", "Mixpanel"]}
            />
            <ExperienceItem
              index={3}
              role="Research Engineer"
              company="Hitachi R&D Central Research Laboratory"
              period="Jan 2021 – July 2023"
              description="Developed a mission-critical Distributed Data Management Framework for large-scale Microservice Architectures. Implemented complex architectural patterns including CQRS and Event Sourcing to ensure eventual consistency and high availability. Leveraged Apache Kafka and EventStoreDB for high-throughput stream processing. Applied Domain-Driven Design (DDD) principles to decouple core business logic, reducing overall development time by 15%."
              tags={["CQRS", "Kafka", "EventStoreDB", "DDD", "Microservices"]}
            />
            <ExperienceItem
              index={4}
              role="Research Assistant"
              company="IIT Bombay"
              period="Sept 2020 – Nov 2020"
              description="Developed an interactive Geospatial web portal for real-time agricultural monitoring using remote sensing data. Processed and analyzed spatiotemporal satellite imagery (multi-TB scale) to perform automated crop acreage estimation. Conducted rigorous statistical modeling and hypothesis testing on large-scale malnutrition datasets to inform public policy recommendations."
              tags={["Remote Sensing", "Satellite Imaging", "Statistical Analysis"]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectItem
              index={0}
              title="AI-Powered Agentic Document Processing System"
              description="Developed an agentic, event-driven AI workflow with LlamaIndex for automated form filling tasks. Integrated Groq LLM for dynamic extraction from structured/unstructured docs. Implemented human-in-the-loop feedback system."
              tags={["LlamaIndex", "Groq LLM", "Hugging Face", "Human-in-the-loop"]}
              links={[
                { type: 'github', url: 'https://github.com/amanlonare/agentic_document_form_filler', label: 'View on GitHub' }
              ]}
            />
            <ProjectItem
              index={1}
              title="Multimodal AI System with Local LLMs"
              description="Architected multimodal AI chatbot integrating Ollama LLMs and ChromaDB. Enabled real-time audio transcription using Whisper models. Built intuitive UI with Streamlit and robust state management with SQLite."
              tags={["Ollama", "ChromaDB", "Whisper", "Streamlit", "SQLite"]}
              links={[
                { type: 'github', url: 'https://github.com/amanlonare/chatbot_local', label: 'View on GitHub' }
              ]}
            />
            <ProjectItem
              index={2}
              title="FarmGPT: MCP-Driven RAG & LLM Advisor"
              description="Architected modular decision support system using Model Context Protocol (MCP). Integrated RAG servers and ChromaDB for semantic search. Engineered embeddings for optimal LLM interaction with PLLaMa."
              tags={["MCP", "RAG", "ChromaDB", "PLLaMa", "SSE"]}
              links={[
                { type: 'github', url: 'https://github.com/amanlonare/dss_farmers.git', label: 'View on GitHub' }
              ]}
            />
            <ProjectItem
              index={3}
              title="Agriculture Monitoring with CNN"
              description="Developed CNN model for crop classification achieving 94% accuracy using multispectral satellite imagery. Created automated data pipeline processing 5TB+ of satellite data. Deployed real-time web dashboard."
              tags={["CNN", "Computer Vision", "Satellite Imagery", "Data Pipeline"]}
              links={[
                { type: 'demo', url: 'https://amanlonare95.users.earthengine.app/view/yieldmap', label: 'Live Demo' },
                { type: 'paper', url: 'https://amanlonare.github.io/pdf/ResearchPaper.pdf', label: 'Research Paper' },
                { type: 'external', url: 'https://drive.google.com/file/d/1Lz0lGihqu9yEgA_ge1wRRViohPJtWRxg/view', label: 'Thesis Report' }
              ]}
            />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Insights & Blogs</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <a href="https://medium.com/@amanlonare95" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-cyan-400 flex items-center gap-2 transition-colors">
              View all <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogItem
              index={0}
              title="Near Real Time Data Replication from MySQL to PostgreSQL"
              description="A deep dive into building a Change Data Capture (CDC) pipeline using Debezium, Kafka, and Docker for seamless, low-latency data replication between databases."
              link="https://medium.com/@amanlonare95/near-real-time-data-replication-from-mysql-to-postgresql-ii-3c8d7a56cc8f"
              tags={["CDC", "Debezium", "Kafka", "Docker", "MySQL", "PostgreSQL"]}
            />
            <BlogItem
              index={1}
              title="Performance Testing of RDS MySQL Database using sysbench"
              description="Implementing a benchmarking framework using sysbench to evaluate database performance under different workloads on Amazon RDS, monitoring key metrics like latency and IOPS."
              link="https://medium.com/@amanlonare95/performance-testing-of-rds-mysql-database-using-sysbench-d95eca450fa7"
              tags={["Amazon RDS", "MySQL", "sysbench", "EC2", "CloudWatch"]}
            />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <div className="flex flex-col items-center text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Professional Certifications</h3>
            <div className="h-1 w-24 bg-cyan-500 rounded-full mb-8" />
            <p className="text-gray-400 max-w-2xl text-lg">Validated expertise in Cloud Infrastructure, Machine Learning, and Artificial Intelligence through industry-leading certifications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
            <CertificationItem
              index={0}
              title="AWS Certified Machine Learning Engineer"
              date="2026"
              credentialId="UC-c7f98387-943f-41aa-8133-dc67f7b019e0"
              logo="/logos/aws-ml-engineer-clean.png"
              link="https://www.udemy.com/certificate/UC-c7f98387-943f-41aa-8133-dc67f7b019e0/" 
              scale={1.3}
            />
            <CertificationItem
              index={1}
              title="AWS Certified Developer Associate"
              date="2026"
              credentialId="UC-127f861e-325f-4d42-bfb6-c3f03f081db6"
              logo="/logos/aws-developer-clean.png"
              link="https://www.udemy.com/certificate/UC-127f861e-325f-4d42-bfb6-c3f03f081db6/"
              scale={1.1}
            />
            <CertificationItem
              index={2}
              title="Convolutional Neural Network"
              date="May 2020"
              credentialId="DGBA5HRZEC63"
              logo="/logos/deeplearning-ai-clean.png"
              link="https://www.coursera.org/account/accomplishments/verify/DGBA5HRZEC63"
              scale={1.0}
            />
            <CertificationItem
              index={3}
              title="Structuring Machine Learning"
              date="Nov 2019"
              credentialId="PG6XFU4J7SCL"
              logo="/logos/deeplearning-ai-clean.png"
              link="https://www.coursera.org/account/accomplishments/verify/PG6XFU4J7SCL"
              scale={1.0}
            />
            <CertificationItem
              index={4}
              title="Introduction to Tensorflow for AI"
              date="Jul 2019"
              credentialId="AXRH3VT6ACSQ"
              logo="/logos/deeplearning-ai-clean.png"
              link="https://www.coursera.org/account/accomplishments/verify/AXRH3VT6ACSQ"
              scale={1.0}
            />
            <CertificationItem
              index={5}
              title="Neural Networks & Deep Learning"
              date="Jul 2019"
              credentialId="2WUB7KD6BBYN"
              logo="/logos/deeplearning-ai-clean.png"
              link="https://www.coursera.org/account/accomplishments/verify/2WUB7KD6BBYN"
              scale={1.0}
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Engineering Services</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              index={0}
              title="Generative AI Solutions"
              description="End-to-end development of RAG systems, AI Agents, and custom LLM fine-tuning. Building intelligent assistants that understand your specific domain data."
              tags={["Generative AI", "RAG", "LLM Agents"]}
            />
            <ServiceCard
              index={1}
              title="MLOps & Cloud Architecture"
              description="Designing scalable ML infrastructure on AWS. Automating model training, deployment, and monitoring pipelines for production-grade AI systems."
              tags={["AWS", "MLOps", "Docker"]}
            />
            <ServiceCard
              index={2}
              title="Data Engineering"
              description="Building robust data pipelines, real-time streaming architectures, and efficient data storage solutions to power analytics and AI applications."
              tags={["Data Engineering", "Kafka", "ETL"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-32">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Let's Build Together</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Get in Touch</h4>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                I'm always open to discussing new projects, technical challenges, or opportunities to collaborate on innovative AI solutions.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "amanlonare95@gmail.com", href: "mailto:amanlonare95@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/aman-lonare-546229103/" },
                  { icon: Github, label: "GitHub Profile", href: "https://github.com/amanlonare" }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Your Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="email" id="email" className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="email@address.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                  <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </motion.form>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-16 text-center text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">© 2026 Aman Lonare. Built with precision using React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};
