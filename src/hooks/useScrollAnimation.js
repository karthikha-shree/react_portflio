import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    // Small delay to ensure all components are mounted
    const timeoutId = setTimeout(() => {
      // Configuration
      const observerConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Find all elements with fade-in class
      const fadeElements = document.querySelectorAll('.fade-in');
      console.log(`Found ${fadeElements.length} elements with .fade-in class`);

      if (prefersReducedMotion) {
        // If user prefers reduced motion, make all elements visible immediately
        fadeElements.forEach(element => {
          element.classList.add('visible');
        });
        console.log('Reduced motion detected, all elements made visible');
        return;
      }

      // Create intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is entering viewport - fade in
            entry.target.classList.add('visible');
            console.log('Element entering viewport:', entry.target.id || entry.target.className);
          } else {
            // Element is leaving viewport - fade out
            entry.target.classList.remove('visible');
            console.log('Element leaving viewport:', entry.target.id || entry.target.className);
          }
        });
      }, observerConfig);

      // Start observing all fade elements
      fadeElements.forEach((element) => {
        observer.observe(element);
        
        // Check if element is already in viewport on load
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          element.classList.add('visible');
          console.log('Element already in viewport:', element.id || element.className);
        }
      });

      console.log(`Scroll animations initialized for ${fadeElements.length} elements`);

      // Store observer for cleanup
      window.scrollAnimationObserver = observer;
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (window.scrollAnimationObserver) {
        window.scrollAnimationObserver.disconnect();
        delete window.scrollAnimationObserver;
      }
    };
  }, []);
};

export default useScrollAnimation;