// src/utils/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button`
  position: ${props => props.isFixed ? 'fixed' : 'relative'};
  bottom: ${props => props.isFixed ? '20px' : 'auto'};
  right: ${props => props.isFixed ? '20px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-secondary, #e31937);
  color: var(--color-white, #fff);
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 10;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #b81424;
    transform: translateY(-3px);
  }

  @media (min-width: 1900px) {
    width: 50px;
    height: 50px;
  }
`;

const ScrollToTopButton = ({ isFixed = false }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button 
      onClick={scrollToTop} 
      visible={isFixed ? visible : true} 
      isFixed={isFixed}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp />
    </Button>
  );
};

export { ScrollToTopButton };
export default ScrollToTopButton;