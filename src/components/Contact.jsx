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
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Karthikha_Shree_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="fade-in py-20 px-4 md:py-32 relative z-10 bg-white dark:bg-slate-950 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mt-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6">Feel free to reach out for collaborations or just a friendly chat</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">📧</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">Email</p>
            <a 
              href="mailto:karthilkha.2006@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              karthilkha.2006@gmail.com
            </a>
          </div>

          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">📱</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">Phone</p>
            <a 
              href="tel:6374990947"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              +91 6374990947
            </a>
          </div>

          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">💼</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/karthikha-shree-s-m-4315ba296/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View Profile
            </a>
          </div>

          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">💻</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">GitHub</p>
            <a
              href="https://github.com/karthikha-shree"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              @karthikha-shree
            </a>
          </div>

          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">👁️</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">Resume</p>
            <button 
              onClick={handleResumeView}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
            >
              View Resume
            </button>
          </div>

          <div className="card-hover bg-white dark:bg-slate-800/50 dark:backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-2xl">
            <span className="text-4xl mb-4 block">📥</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">Download</p>
            <button 
              onClick={handleResumeDownload}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
            >
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
