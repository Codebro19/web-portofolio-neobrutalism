import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
