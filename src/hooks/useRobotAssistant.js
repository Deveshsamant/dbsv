import { useEffect } from 'react';

const useRobotAssistant = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const initRobotAssistant = () => {
      console.log('Initializing robot assistant');
      // Use querySelector instead of getElementById to ensure we get the elements
      const robotAssistant = document.querySelector('#robot-assistant');
      const tooltip = document.querySelector('#tooltip');
      
      if (!robotAssistant || !tooltip) {
        console.warn('Robot assistant elements not found, retrying...');
        // Retry after a short delay to ensure elements are rendered
        setTimeout(() => {
          const retryRobotAssistant = document.querySelector('#robot-assistant');
          const retryTooltip = document.querySelector('#tooltip');
          if (retryRobotAssistant && retryTooltip) {
            console.log('Robot assistant elements found on retry');
            initializeAssistant(retryRobotAssistant, retryTooltip);
          } else {
            console.error('Robot assistant elements still not found after retry');
            // Try one more time with a longer delay
            setTimeout(() => {
              const finalRobotAssistant = document.querySelector('#robot-assistant');
              const finalTooltip = document.querySelector('#tooltip');
              if (finalRobotAssistant && finalTooltip) {
                console.log('Robot assistant elements found on final retry');
                initializeAssistant(finalRobotAssistant, finalTooltip);
              } else {
                console.error('Robot assistant elements not found after all retries');
              }
            }, 2000);
          }
        }, 1000);
        return;
      }

      console.log('Robot assistant elements found');
      initializeAssistant(robotAssistant, tooltip);
    };

    const initializeAssistant = (robotAssistant, tooltip) => {
      let tooltipTimeout;

      // Robot click animation
      const handleClick = () => {
        console.log('Robot clicked');
        robotAssistant.style.transform = 'scale(0.9)';
        setTimeout(() => {
          robotAssistant.style.transform = 'scale(1)';
        }, 150);
        
        // Show random message
        const messages = [
          'Hello! I\'m your AI assistant!',
          'Hover over elements to learn more!',
          'Welcome to the digital cosmos!',
          'Ready to explore? Let\'s go!',
          'I\'m here to help you navigate!',
          'Click me for helpful tips!',
          'Explore the portfolio to learn more!',
          'I can guide you through the site!'
        ];
        
        showTooltip(messages[Math.floor(Math.random() * messages.length)], tooltip);
      };

      // Show tooltip function
      const showTooltip = (message, tooltipElement) => {
        console.log('Showing tooltip:', message);
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        
        // Update the tooltip text content
        tooltipElement.innerHTML = `<span class="tooltip-text">${message}</span>`;
        tooltipElement.classList.add('show');
        
        tooltipTimeout = setTimeout(() => {
          tooltipElement.classList.remove('show');
        }, 3000);
      };

      robotAssistant.addEventListener('click', handleClick);

      // Update tooltip based on hovered element
      const handleMouseOver = (e) => {
        const element = e.target.closest('[data-tooltip]');
        if (element && element.dataset.tooltip) {
          showTooltip(element.dataset.tooltip, tooltip);
        }
      };

      const handleMouseOut = (e) => {
        const element = e.target.closest('[data-tooltip]');
        if (element) {
          setTimeout(() => {
            if (!document.querySelector(':hover[data-tooltip]')) {
              tooltip.classList.remove('show');
            }
          }, 100);
        }
      };

      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      // Cleanup function
      return () => {
        robotAssistant.removeEventListener('click', handleClick);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
      };
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initRobotAssistant);
      return () => document.removeEventListener('DOMContentLoaded', initRobotAssistant);
    } else {
      // DOM is already ready, but wait a bit to ensure elements are rendered
      setTimeout(initRobotAssistant, 100);
    }
  }, []);

  return {};
};

export default useRobotAssistant;