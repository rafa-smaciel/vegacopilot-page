// src/modules/Home/containers/CompanyLogosSection/styles.js - MODERN INDUSTRY CARDS
import styled, { keyframes } from 'styled-components';

// PALETA DE CORES VIXEM - Atualizada
const colors = {
  // Cores principais - azul moderno
  primary: '#1E40AF', // Azul principal
  primaryDark: '#1E3A8A', // Azul escuro
  primaryLight: '#3B82F6', // Azul claro
  
  // Cores secundárias
  secondary: '#1F2937', // Cinza escuro
  accent: '#7C3AED', // Roxo
  
  // Tons neutros modernos
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
  
  // Cores base
  white: '#FFFFFF',
  black: '#000000'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

// Animação de scroll infinito
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Animação de float para elementos
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
`;

export const LogosContainer = styled.section`
  padding: 4rem 2rem;
  background: ${colors.white};
  text-align: center;
  overflow: hidden;
  position: relative;

  /* Gradiente sutil de fundo */
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

  /* Conteúdo acima do gradiente */
  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 3rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 5rem 4rem;
  }
`;

export const LogosTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.secondary};
  margin-bottom: 3.5rem;
  font-weight: 700;
  text-align: center;
  position: relative;

  /* Linha decorativa moderna */
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
    border-radius: 2px;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

export const LogosCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  /* Máscara de fade nas bordas */
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
  gap: 2rem;
  animation: ${scroll} 40s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.5rem;
    animation-duration: 30s;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 2.5rem;
    animation-duration: 50s;
  }
`;

export const IndustryCard = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  background: ${colors.white};
  
  /* Efeito de destaque para cards featured */
  ${props => props.featured && `
    border-color: ${colors.primary};
    box-shadow: 0 8px 30px rgba(30, 64, 175, 0.15);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      z-index: 3;
    }
  `}

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(30, 64, 175, 0.2);
    border-color: ${colors.primary};
    animation: ${float} 2s ease-in-out infinite;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 160px;
    height: 100px;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 240px;
    height: 140px;
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
    transform: scale(1.05);
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
  font-size: 0.9rem;
  text-align: center;
  padding: 0 0.5rem;
  transition: all 0.3s ease;

  ${IndustryCard}:hover & {
    background: linear-gradient(
      to top,
      ${colors.primary} 0%,
      rgba(30, 64, 175, 0.9) 100%
    );
    font-size: 0.95rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    
    ${IndustryCard}:hover & {
      font-size: 0.85rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    
    ${IndustryCard}:hover & {
      font-size: 1.05rem;
    }
  }
`;

/* Elementos decorativos adicionais podem ser adicionados via pseudo-elementos no LogosContainer acima */