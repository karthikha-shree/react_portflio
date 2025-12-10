import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Responsive Design", "Flutter (Mobile)"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js & Express.js", "RESTful APIs", "MongoDB & Mongoose", "Authentication (JWT)", "Python"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git & GitHub", "Cloudinary", "Postman", "VS Code", "Payment Gateways"]
    },
    {
      title: "Specialized Skills",
      icon: "🚀",
      skills: ["AI/ML Integration", "OCR & Document Processing", "Game Development", "Full-Stack Architecture", "Cloud Solutions"]
    }
  ];

  return (
    <section id="skills" className="fade-in py-20 px-4 md:py-32 relative z-10 bg-gray-50 dark:bg-slate-900/50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-8 shadow-lg dark:shadow-2xl"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
