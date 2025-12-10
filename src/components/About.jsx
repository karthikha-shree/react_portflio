import React from "react";

function About() {
  return (
    <section id="about" className="fade-in py-20 px-4 md:py-32 relative z-10 bg-gray-50 dark:bg-slate-900 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase">About Me</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 mb-4">
            Passionate Developer <span className="gradient-text">& Creator</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-2xl border border-gray-100 dark:border-slate-700">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a dedicated <span className="font-bold text-blue-600 dark:text-blue-400">MERN Stack Developer</span> with a strong foundation in full-stack web development and a passion for creating intuitive, user-friendly applications.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My expertise spans across <span className="font-bold text-purple-600 dark:text-purple-400">MongoDB, Express.js, React, and Node.js</span>, along with experience in Python development and modern cloud solutions.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I thrive on solving complex problems and building solutions that make a real-world impact. Every project is an opportunity to combine technical excellence with creative problem-solving.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <p className="text-4xl font-black text-blue-600 dark:text-blue-400">7+</p>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-purple-600 dark:text-purple-400">2+</p>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2">Years</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-pink-600 dark:text-pink-400">∞</p>
            <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2">Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
