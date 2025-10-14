import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a nav link is clicked
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">K</div>
        
        {/* Desktop Navigation */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>

        <div className="nav-controls">
          {/* Mobile Hamburger Menu */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>☰</span>
          </button>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
