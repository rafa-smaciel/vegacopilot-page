// src/modules/Home/containers/IndustriesSection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral400: '#94a3b8',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1e293b',
  neutral900: '#0f172a',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const IndustriesContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const IndustriesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
  }
`;

export const IndustriesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 6rem;
  }
`;

export const IndustriesTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.white};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
`;

export const IndustriesSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    max-width: 800px;
  }
`;

export const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 3rem;
  }
`;

export const IndustryCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.primary};
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(5, 150, 105, 0.2);

    &::before {
      transform: scaleX(1);
    }
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
    padding: 1.5rem;
    min-height: 240px;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem 2rem;
    min-height: 320px;
  }
`;

export const IndustryIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${IndustryCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const IndustryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }
`;

export const IndustryDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const IndustryLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.primary};
  border-radius: 6px;
  background: transparent;
  margin-top: auto;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(5, 150, 105, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;