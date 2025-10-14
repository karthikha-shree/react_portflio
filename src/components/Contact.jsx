import React from "react";

function Contact() {
  const resumeFileName = "KARTHIKHA_SHREE _RESUME.pdf";
  
  const handleResumeView = (e) => {
    e.preventDefault();
    const resumeUrl = `${window.location.origin}/${resumeFileName}`;
    console.log('Trying to view resume at:', resumeUrl);
    window.open(resumeUrl, '_blank');
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const resumeUrl = `${window.location.origin}/${resumeFileName}`;
    console.log('Trying to download resume from:', resumeUrl);
    
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Karthikha_Shree_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span>📧 </span>
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
          <span>👁️</span>
          <button onClick={handleResumeView}>
            View Resume
          </button>
        </div>
        <div className="contact-item">
          <span>📥</span>
          <button onClick={handleResumeDownload}>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
