// src/modules/Home/containers/PlantManagerSection/styles.js - VERSÃO COMPACTA
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
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

export const PlantManagerContainer = styled.section`
  padding: 2.5rem 2rem; /* Mais espaço */
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3.5rem 4rem;
  }
`;

export const PlantManagerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem; /* Mais espaço */

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 3rem;
  }
`;

export const PlantManagerText = styled.div`
  flex: 1;
`;

export const PlantManagerTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem); /* Reduzido */
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 0.5rem; /* Reduzido de 0.75rem */
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.4rem;
  }
`;

export const PlantManagerSubtitle = styled.p`
  font-size: 1rem; /* Reduzido de 1.125rem */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.1rem;
  }
`;

export const PlantManagerButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.6rem; /* Reduzido de 1rem 2rem */
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 6px; /* Reduzido de 8px */
  font-weight: 600;
  font-size: 0.95rem; /* Reduzido de 1rem */
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  white-space: nowrap;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(5, 150, 105, 0.3); /* Sombra menor */
  }

  svg {
    font-size: 0.95rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem 1.4rem; /* Reduzido */
    font-size: 0.9rem;
    width: 100%;
    max-width: 280px; /* Reduzido de 300px */
    justify-content: center;
    
    &:hover {
      transform: none; /* Remove hover no mobile */
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.9rem 1.8rem; /* Reduzido */
    font-size: 1rem;
  }
`;  