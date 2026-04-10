import { useState, useEffect } from "react";
import { Resume } from "./components/Resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Chatbot from "./components/Chatbot";
import ConnectellaCaseStudy from "./components/ConnectellaCaseStudy";
import AiRoleplayCaseStudy from "./components/AiRoleplayCaseStudy";
import SevaAiCaseStudy from "./components/SevaAiCaseStudy";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCaseStudy]);

  return (
    <div className="bg-[#050505] min-h-screen text-white relative overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        {activeCaseStudy === 'connectella' ? (
          <ConnectellaCaseStudy key="connectella" onBack={() => setActiveCaseStudy(null)} onOpenProject={(id) => setActiveCaseStudy(id)} />
        ) : activeCaseStudy === 'roleplay' ? (
          <AiRoleplayCaseStudy key="roleplay" onBack={() => setActiveCaseStudy(null)} onOpenProject={(id) => setActiveCaseStudy(id)} />
        ) : activeCaseStudy === 'seva' ? (
          <SevaAiCaseStudy key="seva" onBack={() => setActiveCaseStudy(null)} onOpenProject={(id) => setActiveCaseStudy(id)} />
        ) : (
          <div key="portfolio">
            <Hero />

            <Resume onOpenProject={(id) => setActiveCaseStudy(id)} />
          </div>
        )}
      </AnimatePresence>
      <Chatbot />
    </div>
  );
}
