// src/modules/Home/containers/CompanyLogosSection/styles.js - VIXEM PALETTE
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
  padding: 2.5rem 2rem; // REDUZIDO
  background: ${colors.white}; // Background simples
  text-align: center;
  border-top: 1px solid ${colors.neutral100}; // Border mais sutil
  overflow: hidden;
  position: relative;

  /* Elemento decorativo bem sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px; // REDUZIDO
    height: 1px; // REDUZIDO
    background: ${colors.textLight}; // Cinza claro
    opacity: 0.3; // Bem sutil
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1rem; // REDUZIDO
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3rem 4rem; // REDUZIDO
  }
`;

export const LogosTitle = styled.h2`
  font-size: 1.1rem; // REDUZIDO
  color: ${colors.textLight}; // Cinza mais claro
  margin-bottom: 2.5rem;
  font-weight: 500; // REDUZIDO - menos bold
  text-align: center;
  position: relative;

  /* Linha decorativa mais sutil */
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px; // REDUZIDO
    height: 1px; // REDUZIDO
    background: ${colors.textLight}; // Cinza claro
    border-radius: 1px;
    opacity: 0.5; // Bem sutil
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.2rem; // REDUZIDO
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem; // REDUZIDO
    margin-bottom: 2rem;
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
    ${colors.white} 8%,
    ${colors.white} 92%,
    transparent
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent,
    ${colors.white} 8%,
    ${colors.white} 92%,
    transparent
  );

  @media (max-width: ${breakpoints.mobile}) {
    mask: linear-gradient(
      to right,
      transparent,
      ${colors.white} 4%,
      ${colors.white} 96%,
      transparent
    );
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      ${colors.white} 4%,
      ${colors.white} 96%,
      transparent
    );
  }
`;

export const LogosTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  animation: ${scroll} 30s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2.8rem;
    animation-duration: 22s;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 4.5rem;
    animation-duration: 35s;
  }
`;

export const CompanyLogo = styled.img`
  height: 52px;
  opacity: 0.4; // REDUZIDO - bem mais sutil
  transition: all 0.4s ease;
  filter: grayscale(100%) brightness(1.2); // TODAS em cinza + mais claras
  flex-shrink: 0;
  object-fit: contain;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.7; // REDUZIDO - hover mais sutil
    transform: scale(1.02) translateY(-1px); // REDUZIDO - movimento mais sutil
    filter: grayscale(80%) brightness(1.1); // Ainda em cinza no hover
  }

  /* Parceiros em destaque - também em cinza mas com estrutura visual */
  ${props => props.featured && `
    position: relative;
    padding: 8px;
    background: ${colors.neutral50};
    border: 1px solid ${colors.neutral200};
    box-shadow: 0 1px 3px rgba(15, 22, 41, 0.05); // Shadow mais sutil
    opacity: 0.5; // Um pouco mais visível que os outros
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px; // REDUZIDO - linha bem sutil
      background: ${colors.textLight}; // Cinza claro em vez de azul
      border-radius: 4px 4px 0 0;
    }
    
    &:hover {
      border-color: ${colors.neutral300}; // Cinza em vez de azul
      box-shadow: 0 2px 6px rgba(15, 22, 41, 0.08); // Shadow mais sutil
      background: ${colors.neutral100};
      opacity: 0.8; // Não chega a 100% de opacidade
    }
  `}

  @media (max-width: ${breakpoints.mobile}) {
    height: 44px;
    opacity: 0.35; // Ainda mais sutil no mobile
    
    ${props => props.featured && `
      padding: 6px;
      opacity: 0.45;
    `}
  }

  @media (min-width: ${breakpoints.large}) {
    height: 58px;
    
    ${props => props.featured && `
      padding: 10px;
    `}
  }
`;