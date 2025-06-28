// src/modules/Home/containers/PlantManagerSection/styles.js - CÓDIGO COMPLETO
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

export const PlantManagerContainer = styled.section`
  padding: 1rem 2rem; /* MUITO COMPACTO */
  margin: 0; /* SEM MARGEM */
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
  gap: 1.5rem; /* MENOR GAP */

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem; /* MUITO PRÓXIMO */
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 2rem;
  }
`;

export const PlantManagerText = styled.div`
  flex: 1;
`;

export const PlantManagerTitle = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.6rem); /* PEQUENO */
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 0.4rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.3rem;
  }
`;

export const PlantManagerSubtitle = styled.p`
  font-size: 0.85rem; /* PEQUENO */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.9rem;
  }
`;

export const PlantManagerButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem; /* PEQUENO */
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.8rem; /* PEQUENO */
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  white-space: nowrap;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(30, 64, 175, 0.2);
  }

  svg {
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.55rem 1rem;
    font-size: 0.75rem;
    width: 100%;
    max-width: 200px;
    justify-content: center;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.7rem 1.4rem;
    font-size: 0.85rem;
  }
`;