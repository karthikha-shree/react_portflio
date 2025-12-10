import React from "react";

const projects = [
  {
    title: "📚 College Question Bank System",
    desc: "A comprehensive full-stack MERN application enabling admins to manage departments, regulations, semesters, subjects, and question papers while providing students with easy access to academic resources.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "📖 CS Course Reference Center",
    desc: "A dedicated platform for Computer Science department course materials, providing students with organized access to syllabi, notes, and examination papers across multiple regulations.",
    tags: ["MERN Stack", "Cloud Storage", "PDF Viewer"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "🛒 E-Commerce Gadget Store",
    desc: "Fully functional e-commerce platform with product catalogs, shopping cart, user authentication, and responsive design using modern technologies.",
    tags: ["MERN Stack", "Bootstrap", "REST API"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "🛍️ E-Commerce with Payment Gateway",
    desc: "Advanced e-commerce solution with comprehensive admin panel for inventory management and integrated secure payment gateway for transactions.",
    tags: ["MERN Stack", "Payment Gateway", "Admin Dashboard"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "🎮 The Lost Kingdom of Arthenis",
    desc: "Interactive text-based adventure game with GUI featuring choice-driven gameplay, inventory system, puzzle-solving, and multiple endings.",
    tags: ["Python", "Tkinter", "Pygame", "PIL"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "🤖 AI-Powered Form Filling Assistant",
    desc: "Innovative AI tool for automating government forms by extracting data from documents with multi-language support and voice input capabilities.",
    tags: ["Python", "OCR", "AI/ML", "NLP"],
    color: "from-rose-500 to-orange-500"
  },
  {
    title: "💰 Expense Tracker App",
    desc: "Cross-platform mobile application for personal expense tracking with intuitive UI and real-time data synchronization across devices.",
    tags: ["Flutter", "Node.js", "Mobile Dev"],
    color: "from-teal-500 to-cyan-500"
  }
];

function Projects() {
  return (
    <section id="projects" className="fade-in py-20 px-4 md:py-32 relative z-10 bg-white dark:bg-slate-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="card-hover group bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-8 shadow-lg dark:shadow-2xl overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
