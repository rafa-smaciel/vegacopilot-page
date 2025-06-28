// src/modules/Home/containers/CompanyLogosSection/styles.js - IMAGENS REDUZIDAS
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
    transform: translateY(-3px);
  }
`;

export const LogosContainer = styled.section`
  padding: 0.8rem 2rem; /* REDUZIDO de 1rem */
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
  gap: 1rem; /* REDUZIDO de 1.5rem */
  animation: ${scroll} 40s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.8rem;
    animation-duration: 30s;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.2rem;
    animation-duration: 50s;
  }
`;

export const IndustryCard = styled.div`
  position: relative;
  width: 120px; /* REDUZIDO de 160px */
  height: 80px; /* REDUZIDO de 100px */
  border-radius: 8px; /* REDUZIDO de 12px */
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); /* REDUZIDO */
  border: 2px solid transparent;
  background: ${colors.white};
  
  ${props => props.featured && `
    border-color: ${colors.primary};
    box-shadow: 0 4px 12px rgba(30, 64, 175, 0.08);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      z-index: 3;
    }
  `}

  &:hover {
    transform: translateY(-2px) scale(1.01); /* REDUZIDO */
    box-shadow: 0 6px 16px rgba(30, 64, 175, 0.12);
    border-color: ${colors.primary};
    animation: ${float} 2s ease-in-out infinite;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px; /* REDUZIDO de 140px */
    height: 65px; /* REDUZIDO de 80px */
    
    &:hover {
      transform: translateY(-1px) scale(1.005);
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 140px; /* REDUZIDO de 180px */
    height: 90px; /* REDUZIDO de 120px */
  }
`;

export const IndustryImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.9) saturate(0.8);

  ${IndustryCard}:hover & {
    filter: brightness(1.1) saturate(1.2);
    transform: scale(1.02); /* REDUZIDO de 1.03 */
  }
`;

export const IndustryLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
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
  font-size: 0.7rem; /* REDUZIDO de 0.8rem */
  text-align: center;
  padding: 0 0.3rem; /* REDUZIDO de 0.4rem */
  transition: all 0.3s ease;

  ${IndustryCard}:hover & {
    background: linear-gradient(
      to top,
      ${colors.primary} 0%,
      rgba(30, 64, 175, 0.9) 100%
    );
    font-size: 0.75rem; /* REDUZIDO de 0.85rem */
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.6rem; /* REDUZIDO de 0.7rem */
    
    ${IndustryCard}:hover & {
      font-size: 0.65rem; /* REDUZIDO de 0.75rem */
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.8rem; /* REDUZIDO de 0.9rem */
    
    ${IndustryCard}:hover & {
      font-size: 0.85rem; /* REDUZIDO de 0.95rem */
    }
  }
`;