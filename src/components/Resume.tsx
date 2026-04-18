import { TechStack } from "./TechStack";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Download, Brain, Database, Mic, Settings, Layers, Server, Satellite, BarChart, Box, ExternalLink, FileText, Globe, BookOpen, Send, User, MessageSquare, ArrowUpRight, Search, Accessibility, ShieldCheck, Zap, Activity, LayoutTemplate, PenTool, Palette, Sparkles, Image, Users } from "lucide-react";
import { SiLangchain, SiFlutter, SiFastapi, SiOpenai, SiMixpanel, SiApachekafka } from "react-icons/si";
import { FaCogs, FaProjectDiagram, FaAws, FaMedium, FaBehance } from "react-icons/fa";
import About from "./About";

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

  // Design & Product
  if (normalizedTag.includes("design systems")) return Layers;
  if (normalizedTag.includes("accessibility") || normalizedTag.includes("accessible")) return Accessibility;
  if (normalizedTag.includes("wcag")) return ShieldCheck;
  if (normalizedTag.includes("prototyping")) return Layers;
  if (normalizedTag.includes("wireframing")) return LayoutTemplate;
  if (normalizedTag.includes("user research") || normalizedTag.includes("r&d")) return Search;
  if (normalizedTag.includes("medical ux")) return Activity;
  if (normalizedTag.includes("lms design")) return BookOpen;
  if (normalizedTag.includes("operational efficiency")) return Zap;
  if (normalizedTag.includes("foundational design")) return PenTool;
  if (normalizedTag.includes("internal agency processes")) return Settings;
  if (normalizedTag.includes("creative collaboration")) return Users;
  if (normalizedTag.includes("visual storytelling")) return Image;
  if (normalizedTag.includes("creative styling")) return Palette;
  if (normalizedTag.includes("seasonal concepts")) return Sparkles;
  if (normalizedTag.includes("ai ux") || normalizedTag.includes("conversational ux")) return Brain;
  if (normalizedTag.includes("micro interaction")) return Zap;

  // Legacy/Technical (Keeping for fallback)
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
  if (normalizedTag.includes("research")) return Search;
  if (normalizedTag.includes("conversational")) return MessageSquare;

  return Settings; // Default icon
};

const ExperienceItem = ({ role, company, period, description, tags, index, link, image }: { role: string, company: string, period: string, description: string, tags: string[], index: number, link?: string, image?: string }) => (
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

    <div className="flex items-center gap-4 mb-4">
      {image && (
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white p-2 flex items-center justify-center">
          <img src={image} alt={company} className="w-full h-full object-contain" />
        </div>
      )}
      <div className="flex items-center gap-3">
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

const ProjectItem = ({ title, description, link, tags, index, titleColor, image, onOpenProject }: { title: string, description: string, link: string, tags: string[], index: number, titleColor?: string, image?: string, onOpenProject?: () => void }) => (
  <motion.button
    onClick={(e) => {
      e.preventDefault();
      if (onOpenProject) {
        onOpenProject();
      }
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full overflow-hidden text-left w-full cursor-pointer"
  >
    {image && (
      <div className="relative h-48 md:h-64 overflow-hidden w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
      </div>
    )}
    
    <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
      <div className="flex justify-between items-start">
        <h4 
          className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--hover-color,#00f2ff)] text-left"
          style={{ '--hover-color': titleColor || '#00f2ff' } as React.CSSProperties}
        >
          {title}
        </h4>
        <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all shrink-0">
          <ArrowUpRight className="w-5 lg:w-6 lg:h-6" />
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed font-light text-left">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {tags.map(tag => {
          const Icon = getTechIcon(tag);
          return (
            <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors cursor-default">
              <Icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  </motion.button>
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

export const Resume = ({ onOpenProject }: { onOpenProject?: (id: string) => void }) => {
  return (
    <div className="min-h-screen bg-[#050505] relative z-10 text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-200">

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-24 md:space-y-32">

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <section id="experience">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            <ExperienceItem
              index={0}
              role="Data Analyst (Gaming)"
              company="Ubisoft Entertainment SA"
              period="July '22 - July '25"
              image="/companies/ubisoft.png"
              description="Designed 10+ KPI dashboards using Tableau and Power BI, improving reporting efficiency by 35%. Reduced manual reporting workload by 50% through optimized SQL queries and automated data pipelines. Performed statistical analysis on large datasets to identify anomalies and performance patterns, supporting behavioral analysis and high-level decision support."
              tags={["SQL", "Tableau", "Power BI", "KPI Tracking", "Statistical Analysis"]}
            />
            <ExperienceItem
              index={1}
              role="Data Analyst Intern"
              company="Kuber Enterprise"
              period="Feb '18 - Feb '19"
              description="Collected and cleaned complex data using Python and Excel, improving reporting accuracy by 20%. Implemented and managed executive dashboards tracking 8+ KPIs to facilitate strategic business decisions."
              tags={["Python", "Excel", "Data Cleaning", "Business Intelligence"]}
            />
            <ExperienceItem
              index={2}
              role="MSc Business Analytics Student"
              company="University of Southampton"
              period="Sept '25 - Present"
              image="/companies/univ_sa.png"
              description="Focusing on Decision Analytics, Simulation Modeling, Risk Management, and Data Mining. Applying advanced analytical techniques to solve complex business problems."
              tags={["Decision Analytics", "Simulation Modeling", "Risk Management", "Data Mining"]}
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
              title="Northrop Grumman Challenge"
              description="Designed 'The Brain', a multi-agent LLM module for secure backend reasoning, focusing on data privacy and efficient decision-making paths."
              tags={["AI", "Python", "Predictive Modelling"]}
              link="#"
              titleColor="#00f2ff"
              image="/projects/ai_brain.png"
              onOpenProject={() => onOpenProject?.('northrop')}
            />
            <ProjectItem
              index={1}
              title="MedTech Innovation Programme"
              description="Designed the operational logic and data architecture for an accessible smart medication dispenser to support elderly users."
              tags={["Data Architecture", "IoT", "Logic Design"]}
              link="#"
              image="/projects/medtech.png"
              onOpenProject={() => onOpenProject?.('medtech')}
            />
            <ProjectItem
              index={2}
              title="BOSS Global Business Competition"
              description="Managed end-to-end operations of a simulated holiday enterprise, optimizing supply chains and forecasting demand through predictive modeling."
              tags={["Supply Chain Optimization", "Forecasting", "Business Strategy"]}
              link="#"
              image="/projects/business_sim.png"
              onOpenProject={() => onOpenProject?.('boss')}
            />
            <ProjectItem
              index={3}
              title="IoT-Based Dual-Axis Solar Tracker"
              description="Designed an automated Arduino-based tracking system using data from light sensors to maximize solar energy absorption efficiency."
              tags={["IoT", "Arduino", "Automation"]}
              link="#"
              image="/projects/solar_tracker.png"
            />
          </div>
        </section>

        {/* Retail & Hospitality Section */}
        <section id="hospitality">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-3xl font-bold text-white">Retail & Hospitality Experience</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="space-y-16">
            <ExperienceItem
              index={0}
              role="Online Assistant"
              company="Sainsbury's"
              period="Part Time"
              image="/companies/sainsburys.png"
              description="Executed high-volume online fulfilment orders during early morning shifts. Consistently maintained a high picking rate of 198 Items Per Hour (IPH) while ensuring accuracy and order quality."
              tags={["Operations", "Efficiency", "Supply Chain"]}
            />
            <ExperienceItem
              index={1}
              role="Supermarket Assistant"
              company="Waitrose"
              period="Dec '25 - Jan '26"
              image="/companies/waitrose.png"
              description="Managed tills, customer service interactions, and online delivery execution during the peak Christmas break. Optimized shop-floor operations through proactive communication and active stocking."
              tags={["Customer Service", "Inventory Management", "Logistics"]}
            />
            <ExperienceItem
              index={2}
              role="Team Member"
              company="Taco Bell"
              period="Part Time"
              image="/companies/tacobell.png"
              description="Thrived in a high-pressure hospitality setting by rapidly processing customer orders and managing front-of-house operations. Ensured seamless service execution and food preparation during peak hours."
              tags={["Hospitality", "Fast-Paced Environment", "Teamwork"]}
            />
          </div>
        </section>


        {/* Tech Stack Section */}
        <section id="skills">
          <div className="flex items-center gap-4 mb-16">
            <h3 className="text-3xl font-bold text-white">Skills</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
          <TechStack />
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
                I'm always open to discussing new projects, design challenges, or opportunities to collaborate on innovative digital products.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "lonareamogh@gmail.com", href: "mailto:lonareamogh@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/amoghlonare" },
                  { icon: FaBehance, label: "Behance Profile", href: "https://www.behance.net/amoghlonare" }
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
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const targetEmail = "lonareamogh@gmail.com";
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" id="name" name="name" required className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Your Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="email" id="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="email@address.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                  <textarea id="message" name="message" required rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
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
          <p className="text-sm">© 2026 Amogh Lonare. Built with precision using React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};
