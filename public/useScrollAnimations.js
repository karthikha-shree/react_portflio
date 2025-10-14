import { useEffect } from 'react';

/**
 * Custom hook to initialize scroll animations
 * Works with the global scroll-animations.js script
 */
const useScrollAnimations = () => {
  useEffect(() => {
    // Delay to ensure DOM is fully rendered and all components are mounted
    const timeoutId = setTimeout(() => {
      console.log('React hook initializing scroll animations...');
      
      // First try to initialize directly
      if (window.reinitScrollAnimations) {
        window.reinitScrollAnimations();
      } else {
        // If the function doesn't exist yet, wait a bit more
        const retryTimeout = setTimeout(() => {
          if (window.reinitScrollAnimations) {
            window.reinitScrollAnimations();
          } else {
            console.log('Scroll animations script not loaded yet');
          }
        }, 500);
        
        return () => clearTimeout(retryTimeout);
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);
};

export default useScrollAnimations;