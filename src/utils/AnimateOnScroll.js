// src/utils/AnimateOnScroll.js
import { useEffect } from 'react';

/**
 * Adiciona animações quando os elementos entram no viewport durante o scroll
 */
const AnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Quando o elemento está a 75% da altura da tela, adiciona a classe 'visible'
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };
    
    // Executa a animação quando a página é carregada e durante o scroll
    animateElements();
    window.addEventListener('scroll', animateElements);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);
  
  return null;
};

export default AnimateOnScroll;