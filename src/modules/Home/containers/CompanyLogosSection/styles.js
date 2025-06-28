// src/modules/Home/containers/CompanyLogosSection/styles.js - UPDATED STYLES
import styled, { keyframes } from 'styled-components';

// PALETA DE CORES VIXEM - Consistente com HeroSection
const colors = {
  // Cores principais do logo VIXEM - Azul escuro
  primary: '#0F1629', // Azul muito escuro, quase navy
  primaryDark: '#0A0F1C', // Azul extremamente escuro
  primaryLight: '#1E293B', // Azul escuro para variações
  
  // Modulação de cinzas para hierarquia
  textPrimary: '#0F172A', // Quase preto para textos principais
  textSecondary: '#1E293B', // Cinza escuro para textos secundários
  textMuted: '#64748B', // Cinza médio para textos auxiliares
  textLight: '#94A3B8', // Cinza claro para placeholders
  
  // Cores neutros
  neutral50: '#F8FAFC',
  neutral100: '#F1F5F9',
  neutral200: '#E2E8F0',
  neutral300: '#CBD5E0',
  neutral500: '#64748B',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1E293B',
  
  // Cores base
  white: '#FFFFFF',
  black: '#0F172A'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

// Animação de scroll infinito mais suave
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const LogosContainer = styled.section`
  padding: 3rem 2rem;
  background: ${colors.white};
  text-align: center;
  border-top: 1px solid ${colors.neutral100};
  overflow: hidden;
  position: relative;

  /* Elemento decorativo bem sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: ${colors.textLight};
    opacity: 0.4;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2.5rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 4rem 4rem;
  }
`;

export const LogosTitle = styled.h2`
  font-size: 1.3rem;
  color: ${colors.textSecondary};
  margin-bottom: 3rem;
  font-weight: 600;
  text-align: center;
  position: relative;

  /* Linha decorativa mais sutil */
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: ${colors.textLight};
    border-radius: 1px;
    opacity: 0.6;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.4rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

// Carrossel com máscara aprimorada
export const LogosCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  /* Máscara de fade mais suave */
  mask: linear-gradient(
    to right,
    transparent,
    ${colors.white} 10%,
    ${colors.white} 90%,
    transparent
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent,
    ${colors.white} 10%,
    ${colors.white} 90%,
    transparent
  );

  @media (max-width: ${breakpoints.mobile}) {
    mask: linear-gradient(
      to right,
      transparent,
      ${colors.white} 5%,
      ${colors.white} 95%,
      transparent
    );
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      ${colors.white} 5%,
      ${colors.white} 95%,
      transparent
    );
  }
`;

export const LogosTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: ${scroll} 35s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 3rem;
    animation-duration: 25s;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 5rem;
    animation-duration: 45s;
  }
`;

export const CompanyLogo = styled.img`
  height: 80px;
  width: 120px;
  opacity: 0.7;
  transition: all 0.4s ease;
  filter: grayscale(30%) brightness(1.1);
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(15, 22, 41, 0.08);

  &:hover {
    opacity: 1;
    transform: scale(1.05) translateY(-2px);
    filter: grayscale(0%) brightness(1.2);
    box-shadow: 0 4px 16px rgba(15, 22, 41, 0.15);
  }

  /* Imagens em destaque - um pouco mais visíveis */
  ${props => props.featured && `
    position: relative;
    padding: 10px;
    background: ${colors.neutral50};
    border: 2px solid ${colors.neutral200};
    box-shadow: 0 3px 12px rgba(15, 22, 41, 0.1);
    opacity: 0.8;
    border-radius: 12px;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
      border-radius: 12px 12px 0 0;
    }
    
    &:hover {
      border-color: ${colors.primary};
      box-shadow: 0 6px 20px rgba(15, 22, 41, 0.2);
      background: ${colors.white};
      opacity: 1;
      transform: scale(1.08) translateY(-4px);
    }
  `}

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    width: 90px;
    opacity: 0.6;
    
    ${props => props.featured && `
      padding: 8px;
      opacity: 0.75;
    `}
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100px;
    width: 150px;
    
    ${props => props.featured && `
      padding: 12px;
    `}
  }
`;