import React from "react";
import "./App.css";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Fotter";

function App() {

  useScrollAnimation();

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
