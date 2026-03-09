/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Resume } from "./components/Resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <About />
      <div id="skills">
        <Resume />
      </div>
      <Chatbot />
    </div>
  );
}
