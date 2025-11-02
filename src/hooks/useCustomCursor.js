import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById('custom-cursor');
    if (!customCursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const deltaX = mouseX - cursorX;
      const deltaY = mouseY - cursorY;

      // Use smoother easing and prevent excessive updates
      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        cursorX += deltaX * 0.1;
        cursorY += deltaY * 0.1;

        customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animateCursor);

    // Add hover effects with stable protection against element disappearing
    const hoverElements = document.querySelectorAll('a, button, .tech-item, .profile-card, .contact-method, .faq-item, .stat-item, .location-item, .contact-form-section, .form-group');
    
    const handleMouseEnter = () => {
      customCursor.classList.add('hover');
    };
    
    const handleMouseLeave = () => {
      customCursor.classList.remove('hover');
    };

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};

export default useCustomCursor;