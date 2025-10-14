import React from "react";
import "./App.css";
import useScrollAnimations from "../public/useScrollAnimations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Fotter";

function App() {
  // Initialize scroll animations
  useScrollAnimations();

  return (
    <>
      <Header />
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
