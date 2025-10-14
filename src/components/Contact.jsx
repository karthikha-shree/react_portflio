import React from "react";

function Contact() {
  return (
    <section id="contact" className="fade-in">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <a href="mailto:karthilkha.2006@gmail.com">karthilkha.2006@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <a href="tel:6374990947">+91 6374990947</a>
        </div>
        <div className="contact-item">
          <span>💼</span>
          <a
            href="https://www.linkedin.com/in/karthikha-shree-s-m-4315ba296/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <span>💻</span>
          <a
            href="https://github.com/karthikha-shree"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: @karthikha-shree
          </a>
        </div>
        <div className="contact-item">
          <span>🌐</span>
          <a
            href="/KARTHIKHA SHREE_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View my Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
