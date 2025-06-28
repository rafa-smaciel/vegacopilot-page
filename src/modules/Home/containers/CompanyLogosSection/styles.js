// src/modules/Home/containers/CompanyLogosSection/styles.js - TAMANHO TRACTIAN
import styled, { keyframes } from 'styled-components';

const colors = {
  primary: '#1E40AF',
  primaryDark: '#1E3A8A',
  primaryLight: '#3B82F6',
  secondary: '#1F2937',
  accent: '#7C3AED',
  neutral50: '#F8FAFC',
  neutral100: '#F1F5F9',
  neutral200: '#E2E8F0',
  neutral300: '#CBD5E1',
  neutral400: '#94A3B8',
  neutral500: '#64748B',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1E293B',
  neutral900: '#0F172A',
  white: '#FFFFFF',
  black: '#000000'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
`;

// ===== CONTAINER - ALTURA AUMENTADA =====
export const LogosContainer = styled.section`
  padding: 0.8rem 2rem; /* ALTURA AUMENTADA */
  margin: 0;
  background: ${colors.white};
  text-align: center;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      ${colors.neutral50} 0%, 
      ${colors.white} 50%, 
      ${colors.neutral50} 100%
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1rem 4rem;
  }
`;

export const LogosCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  mask: linear-gradient(
    to right,
    transparent 0%,
    ${colors.white} 5%,
    ${colors.white} 95%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent 0%,
    ${colors.white} 5%,
    ${colors.white} 95%,
    transparent 100%
  );
`;

export const LogosTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem; /* TRACTIAN SPACING */
  animation: ${scroll} 40s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.6rem;
    animation-duration: 30s;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1rem;
    animation-duration: 50s;
  }
`;

// ===== CARDS - TAMANHOS TRACTIAN =====
export const IndustryCard = styled.div`
  position: relative;
  width: 90px; /* TAMANHO TRACTIAN */
  height: 60px; /* ALTURA TRACTIAN */
  border-radius: 6px; /* BORDER TRACTIAN */
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03); /* SOMBRA TRACTIAN */
  border: 1px solid transparent;
  background: ${colors.white};
  
  ${props => props.featured && `
    border-color: ${colors.primary};
    box-shadow: 0 2px 6px rgba(30, 64, 175, 0.06);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      z-index: 3;
    }
  `}

  &:hover {
    transform: translateY(-1px) scale(1.005); /* HOVER TRACTIAN */
    box-shadow: 0 3px 8px rgba(30, 64, 175, 0.08);
    border-color: ${colors.primary};
    animation: ${float} 2s ease-in-out infinite;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 75px; /* MOBILE TRACTIAN */
    height: 50px;
    
    &:hover {
      transform: translateY(-0.5px) scale(1.002);
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 105px; /* LARGE TRACTIAN */
    height: 70px;
  }
`;

export const IndustryImage = styled.img`
  width: 100%;
  height: 75%; /* TRACTIAN PROPORTION */
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.95) saturate(0.9);

  ${IndustryCard}:hover & {
    filter: brightness(1.05) saturate(1.1);
    transform: scale(1.01); /* HOVER TRACTIAN */
  }
`;

export const IndustryLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 25%; /* TRACTIAN HEIGHT */
  background: linear-gradient(
    to top,
    rgba(30, 64, 175, 0.95) 0%,
    rgba(30, 64, 175, 0.8) 100%
  );
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.6rem; /* TRACTIAN SIZE */
  text-align: center;
  padding: 0 0.2rem; /* TRACTIAN PADDING */
  transition: all 0.3s ease;

  ${IndustryCard}:hover & {
    background: linear-gradient(
      to top,
      ${colors.primary} 0%,
      rgba(30, 64, 175, 0.9) 100%
    );
    font-size: 0.65rem; /* HOVER TRACTIAN */
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.55rem; /* MOBILE TRACTIAN */
    
    ${IndustryCard}:hover & {
      font-size: 0.6rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.7rem; /* LARGE TRACTIAN */
    
    ${IndustryCard}:hover & {
      font-size: 0.75rem;
    }
  }
`;