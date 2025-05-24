// src/modules/Home/containers/TechnologySection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  secondary: '#064e3b',
  neutral600: '#475569',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const TechContainer = styled.section`
  padding: 6rem 2rem;
  background: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const TechHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 6rem;
  }
`;

export const TechTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
`;

export const TechSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.neutral600};
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 3rem;
  }
`;

export const TechCard = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${colors.secondary};
  min-height: 300px;
  display: flex;
  align-items: flex-end;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(6, 78, 59, 0.3);
  }

  &.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 250px;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 350px;
  }
`;

export const TechImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  z-index: 1;

  ${TechCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${TechCard}:hover & {
      transform: none;
    }
  }
`;

export const TechOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(6, 78, 59, 0.3) 50%,
    rgba(6, 78, 59, 0.9) 100%
  );
  z-index: 2;
  transition: opacity 0.3s ease;

  ${TechCard}:hover & {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(6, 78, 59, 0.5) 40%,
      rgba(6, 78, 59, 0.95) 100%
    );
  }
`;

export const TechContent = styled.div`
  position: relative;
  z-index: 3;
  padding: 2rem;
  color: ${colors.white};
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
  }
`;

export const TechCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const TechButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: none;

  &:hover {
    background: ${colors.white};
    color: ${colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.65rem 1.25rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
`;