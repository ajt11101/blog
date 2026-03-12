"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Navigation from "./components/Navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="pt-20">
        {/*s
        {activeSection === "home" && (
          <>
            <Hero />
            <About />
            <Blog />
          </>
        )}
        */}
        {activeSection === "about" && <About />}
        {activeSection === "blog" && <Blog />}
      </div>
    </main>
  );
}
