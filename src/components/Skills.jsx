import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>Flutter (Mobile)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js & Express.js</li>
            <li>RESTful APIs</li>
            <li>MongoDB & Mongoose</li>
            <li>Authentication (JWT)</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Cloudinary</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Payment Gateways</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Specialized Skills</h3>
          <ul>
            <li>AI/ML Integration</li>
            <li>OCR & Document Processing</li>
            <li>Game Development (Python)</li>
            <li>Full-Stack Architecture</li>
            <li>Cloud File Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
