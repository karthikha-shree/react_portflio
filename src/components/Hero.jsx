import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 animate-pulse"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <span >
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          Karthikha Shree <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S M</span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
          Full-Stack Developer & Digital Creator
        </p>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Crafting scalable web applications with modern technologies. Specialized in MERN Stack, Cloud Solutions, and creating seamless user experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#contact" 
            className="group px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-12">
          <svg className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
