import React from "react";

const projects = [
  {
    title: "📚 College Question Bank System",
    desc: "A comprehensive full-stack MERN application enabling admins to manage departments, regulations, semesters, subjects, and question papers while providing students with easy access to academic resources.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"]
  },
  {
    title: "📖 CS Course Reference Center",
    desc: "A dedicated platform for Computer Science department course materials, providing students with organized access to syllabi, notes, and examination papers across multiple regulations.",
    tags: ["MERN Stack", "Cloud Storage", "PDF Viewer"]
  },
  {
    title: "🛒 E-Commerce Gadget Store (Internship)",
    desc: "Developed a fully functional e-commerce platform for gadgets with product catalogs, shopping cart functionality, and user authentication using Bootstrap for responsive design.",
    tags: ["MERN Stack", "Bootstrap", "REST API"]
  },
  {
    title: "🛍️ E-Commerce with Admin & Payment Gateway",
    desc: "Advanced e-commerce solution featuring comprehensive admin panel for inventory management and integrated payment gateway for secure transactions.",
    tags: ["MERN Stack", "Payment Gateway", "Admin Dashboard"]
  },
  {
    title: "🎮 The Lost Kingdom of Arthenis",
    desc: "An interactive text-based adventure game with GUI featuring choice-driven gameplay, inventory system, puzzle-solving mechanics, and multiple endings.",
    tags: ["Python", "Tkinter", "Pygame", "PIL"]
  },
  {
    title: "🤖 AI-Powered Form Filling Assistant",
    desc: "Innovative AI tool for automating Indian government service forms by extracting data from uploaded documents (Aadhaar, PAN, etc.) with multi-language support and voice input.",
    tags: ["Python", "OCR", "AI/ML", "NLP"]
  },
  {
    title: "💰 Expense Tracker App",
    desc: "Cross-platform mobile application for tracking personal expenses with intuitive UI and real-time data synchronization.",
    tags: ["Flutter", "Node.js", "Mobile Development"]
  }
];

function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-tags">
              {project.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
