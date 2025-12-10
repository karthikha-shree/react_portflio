import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuToggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Lock/unlock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const openDrawer = () => {
    setIsOpen(true);
    setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 100);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    menuToggleRef.current?.focus();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('drawer-backdrop')) {
      closeDrawer();
    }
  };

  const handleLinkClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      closeDrawer();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-md">
      <nav className="container flex justify-between items-center py-4">
        <a href="#" className="text-3xl font-black gradient-text hover:scale-110 transition-transform duration-300">
          K
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-8">
          <li><a href="#about" className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#projects" className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#skills" className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a></li>
          <li><a href="#contact" className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            className="md:hidden bg-transparent border-none cursor-pointer p-2 rounded transition-all duration-300 hover:bg-white/10"
            onClick={openDrawer}
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
            aria-label="Open navigation"
          >
            <div className="flex flex-col gap-1 w-6 h-5">
              <span className="h-0.5 w-full bg-gray-800 dark:bg-gray-100 transition-all duration-300"></span>
              <span className="h-0.5 w-full bg-gray-800 dark:bg-gray-100 transition-all duration-300"></span>
              <span className="h-0.5 w-full bg-gray-800 dark:bg-gray-100 transition-all duration-300"></span>
            </div>
          </button>

          {/* Theme Toggle */}
          <button 
            className="glass border border-white/20 dark:border-slate-700/50 rounded-xl px-4 py-2 text-xl cursor-pointer backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="inline-block group-hover:rotate-180 transition-transform duration-500">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 drawer-backdrop ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={handleBackdropClick}
      >
        <div 
          id="mobile-drawer"
          className={`fixed top-0 right-0 w-80 max-w-[80vw] h-screen bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button 
            className="absolute top-4 right-4 bg-none border-none text-2xl cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={closeDrawer}
            aria-label="Close navigation"
          >
            ✕
          </button>
          
          <ul className="list-none flex flex-col items-center justify-center h-full gap-8">
            <li>
              <a 
                ref={firstLinkRef}
                href="#about" 
                onClick={handleLinkClick}
                className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li><a href="#projects" onClick={handleLinkClick} className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
