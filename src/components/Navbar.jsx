import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuToggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
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
    // Focus first link after animation
    setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 100);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    // Return focus to toggle button
    menuToggleRef.current?.focus();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('drawer-backdrop')) {
      closeDrawer();
    }
  };

  const handleLinkClick = (e) => {
    const href = e.target.getAttribute('href');
    // Close drawer for anchor links (SPA navigation)
    if (href && href.startsWith('#')) {
      closeDrawer();
    }
  };

  return (
    <header>
      <nav className="container navbar">
        <a href="#" className="logo">K</a>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-controls">
          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            onClick={openDrawer}
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
            aria-label="Open navigation"
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={handleBackdropClick}
      >
        <div 
          id="mobile-drawer"
          className={`drawer ${isOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button 
            className="drawer-close"
            onClick={closeDrawer}
            aria-label="Close navigation"
          >
            ✕
          </button>
          
          <ul className="drawer-links">
            <li>
              <a 
                ref={firstLinkRef}
                href="#about" 
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
