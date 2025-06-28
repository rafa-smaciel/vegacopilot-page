// src/modules/Home/containers/PlantManagerSection/styles.js - TAMANHO TRACTIAN
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  primary: '#1E40AF',
  primaryDark: '#1E3A8A',
  primaryLight: '#3B82F6',
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

// ===== CONTAINER - ALTURA AUMENTADA =====
export const PlantManagerContainer = styled.section`
  padding: 1rem 2rem; /* ALTURA AUMENTADA */
  margin: 0;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.2rem 4rem;
  }
`;

export const PlantManagerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem; /* TRACTIAN GAP */

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 0.6rem; /* ULTRA COMPACTO TRACTIAN */
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 1.5rem;
  }
`;

export const PlantManagerText = styled.div`
  flex: 1;
`;

// ===== TÍTULO - TAMANHO TRACTIAN =====
export const PlantManagerTitle = styled.h2`
  font-size: clamp(1rem, 1.8vw, 1.4rem); /* TRACTIAN SIZE */
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 0.3rem; /* TRACTIAN MARGIN */
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.2rem;
  }
`;

export const PlantManagerSubtitle = styled.p`
  font-size: 0.8rem; /* TRACTIAN SIZE */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.85rem;
  }
`;

// ===== BOTÃO - TAMANHO TRACTIAN =====
export const PlantManagerButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem; /* TRACTIAN GAP */
  padding: 0.5rem 1rem; /* TRACTIAN PADDING */
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem; /* TRACTIAN SIZE */
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  white-space: nowrap;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-0.5px); /* HOVER TRACTIAN */
    box-shadow: 0 2px 6px rgba(30, 64, 175, 0.15);
  }

  svg {
    font-size: 0.7rem; /* TRACTIAN ICON */
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.45rem 0.9rem;
    font-size: 0.7rem;
    width: 100%;
    max-width: 180px; /* TRACTIAN MAX-WIDTH */
    justify-content: center;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;