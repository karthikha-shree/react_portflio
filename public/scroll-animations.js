// Fade-in/Fade-out scroll animations using IntersectionObserver
// This script handles continuous animations that play every time elements enter/leave viewport

(function() {
  'use strict';

  // Configuration
  const OBSERVER_CONFIG = {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: '0px 0px -100px 0px' // Start animation 100px before element fully enters viewport
  };

  // Check for reduced motion preference
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Initialize scroll animations
  function initScrollAnimations() {
    console.log('Initializing scroll animations...');

    // Add JS enabled class to body
    document.body.classList.add('js-enabled');

    // Find all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    console.log(`Found ${fadeElements.length} .fade-in elements`);
    
    if (fadeElements.length === 0) {
      console.log('No .fade-in elements found');
      return;
    }

    // If user prefers reduced motion, make all elements visible immediately
    if (prefersReducedMotion()) {
      console.log('Reduced motion detected, showing all elements');
      fadeElements.forEach(element => {
        element.classList.add('visible');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
      return;
    }

    // Add js-enabled class and set initial state
    fadeElements.forEach((element) => {
      element.classList.add('js-enabled');
      
      // Check if element is already in viewport
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight - 100 && rect.bottom > 0;
      
      if (isInViewport) {
        element.classList.add('visible');
      }
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        
        if (entry.isIntersecting) {
          // Element is entering viewport - fade in
          console.log('Element entering viewport:', element.id || element.className);
          element.classList.add('visible');
        } else {
          // Element is leaving viewport - fade out
          console.log('Element leaving viewport:', element.id || element.className);
          element.classList.remove('visible');
        }
      });
    }, OBSERVER_CONFIG);

    // Start observing all fade elements
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    console.log(`Initialized scroll animations for ${fadeElements.length} elements`);

    // Store observer for potential cleanup
    window.scrollAnimationObserver = observer;
  }

  // Cleanup function
  function cleanupScrollAnimations() {
    if (window.scrollAnimationObserver) {
      window.scrollAnimationObserver.disconnect();
      delete window.scrollAnimationObserver;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    // DOM is already loaded
    initScrollAnimations();
  }

  // Re-initialize when new content is added (for SPA compatibility)
  window.reinitScrollAnimations = function() {
    console.log('Reinitializing scroll animations...');
    cleanupScrollAnimations();
    setTimeout(initScrollAnimations, 100); // Small delay to ensure DOM updates
  };

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanupScrollAnimations);

})();