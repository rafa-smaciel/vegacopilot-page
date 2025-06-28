// src/modules/Home/containers/HeroSection/styles.js - OTIMIZADO UX
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  primary: '#1E40AF',
  primaryDark: '#1E3A8A',
  primaryLight: '#3B82F6',
  secondary: '#1A1A1A',
  neutral500: '#64748B',
  neutral600: '#475569',
  success: '#10B981',
  white: '#FFFFFF',
  black: '#0F172A'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ===== CONTAINER PRINCIPAL - ESPAÇOS MÍNIMOS =====
export const HeroContainer = styled.section`
  min-height: 80vh;
  background: ${colors.white};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 70vh;
    padding: 1.5rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 75vh;
    padding: 1.8rem 0;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 85vh;
    padding: 2.5rem 0;
  }
`;

// ===== CONTENT - PADDING OTIMIZADO =====
export const HeroContent = styled.div`
  max-width: none;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
  align-items: flex-start;
  z-index: 2;
  position: relative;
  width: 100vw;
  height: 80vh;
  padding: 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
    width: 100%;
    padding: 0;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
    width: 100%;
    padding: 0;
    height: auto;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: none;
    gap: 1.5rem;
    padding: 0;
    width: 100vw;
    height: 80vh;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  padding: 2rem 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  max-width: none;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
    height: auto;
    padding: 2rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const SustainabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(30, 64, 175, 0.08);
  border: 1px solid rgba(30, 64, 175, 0.2);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 0.6rem;
  width: fit-content;

  svg {
    color: ${colors.primary};
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 0.6rem;
  }
`;

// ===== TÍTULO OTIMIZADO PARA UX =====
export const HeroTitle = styled.h1`
  /* Tamanho responsivo otimizado para legibilidade */
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700; /* Reduzido de 800 para melhor legibilidade */
  line-height: 1.3; /* Melhorado para leitura */
  color: ${colors.black};
  margin-bottom: 0.6rem;
  letter-spacing: -0.015em; /* Reduzido para melhor legibilidade */
  
  /* Melhor hierarquia visual */
  .highlight {
    color: ${colors.primary};
    font-weight: 800; /* Destaque apenas no highlight */
  }

  /* Quebras de linha otimizadas para mobile */
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.4rem;
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    line-height: 1.25;
    
    br {
      display: none; /* Remove quebras forçadas no mobile */
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    line-height: 1.2;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  color: ${colors.neutral600};
  line-height: 1.5; /* Otimizado para leitura */
  margin-bottom: 1rem;
  max-width: 420px; /* Linha ideal para leitura */
  
  /* Melhor contraste e legibilidade */
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin-bottom: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.05rem;
    max-width: 460px;
    margin-bottom: 1.2rem;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    margin: 0.8rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.2rem;
    margin: 1.2rem 0;
  }
`;

export const Stat = styled.div`
  text-align: center;
  min-width: 65px;

  .number {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.2rem;
  }

  .label {
    font-size: clamp(0.6rem, 1vw, 0.68rem);
    color: ${colors.neutral500};
    font-weight: 600;
    display: block;
    line-height: 1.2;
  }

  @media (min-width: ${breakpoints.large}) {
    .number {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }
    .label {
      font-size: 0.72rem;
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
`;

// ===== BOTÕES OTIMIZADOS =====
export const PrimaryButton = styled(Link)`
  background: ${colors.primary} !important;
  color: ${colors.white} !important;
  padding: 0.55rem 1.1rem; /* Reduzido para melhor proporção */
  border-radius: 4px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.78rem; /* Otimizado para legibilidade */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: 2px solid ${colors.primary} !important;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(30, 64, 175, 0.2) !important;

  &:hover {
    background: ${colors.primaryDark} !important;
    color: ${colors.white} !important;
    border-color: ${colors.primaryDark} !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3) !important;
    text-decoration: none !important;
  }

  svg {
    color: ${colors.white} !important;
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 200px;
    justify-content: center;
    font-size: 0.74rem;
    padding: 0.5rem 0.9rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.65rem 1.3rem;
    font-size: 0.82rem;
  }
`;

export const SecondaryButton = styled(Link)`
  background: transparent;
  color: ${colors.primary};
  padding: 0.55rem 1.1rem;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.78rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(30, 64, 175, 0.2);
  }

  svg {
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 200px;
    justify-content: center;
    font-size: 0.74rem;
    padding: 0.5rem 0.9rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.65rem 1.3rem;
    font-size: 0.82rem;
  }
`;

// ===== VISUAL OTIMIZADO =====
export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 80vh;
  width: 100%;
  margin-left: auto;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
    height: 40vh;
    justify-content: center;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  background: ${colors.black};
  width: 70%;
  height: 80vh;
  margin: 0;
  border: none;
  aspect-ratio: unset;
  margin-left: auto;
  
  video, img {
    width: 100%;
    height: 80vh;
    display: block;
    object-fit: contain;
  }

  &:hover {
    box-shadow: none;
    transform: none;
    transition: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 0;
    max-width: 100%;
    height: 40vh;
    width: 80%;
    
    video, img {
      height: 40vh;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 100%;
    border-radius: 0;
    height: 80vh;
    width: 70%;
    
    video, img {
      height: 80vh;
    }
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 64, 175, 0.02);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${VideoContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    opacity: 1;
  }
`;

export const VideoPlayButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.white};
  border: 2px solid ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.primary};
  font-size: 0.9rem;
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(30, 64, 175, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 0.8rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 44px;
    height: 44px;
    font-size: 1rem;
  }
`;

export const VideoStats = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 3;
  
  .stat {
    background: rgba(15, 23, 42, 0.9);
    color: ${colors.white};
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 0.68rem;
    display: flex;
    align-items: center;
    gap: 3px;
    backdrop-filter: blur(10px);
    border-left: 2px solid ${colors.primary};
    
    .label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.62rem;
    }
    
    .value {
      font-weight: 600;
      color: ${colors.white};
      font-size: 0.68rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 6px;
    right: 6px;
    
    .stat {
      padding: 2px 5px;
      font-size: 0.62rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    bottom: 10px;
    right: 10px;
    
    .stat {
      padding: 4px 8px;
      font-size: 0.72rem;
    }
  }
`;

export const MockupContainer = styled.div`
  background: ${colors.primary};
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 6px 16px rgba(30, 64, 175, 0.1);
  position: relative;
  overflow: hidden;
  max-width: 460px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem;
    border-radius: 4px;
    max-width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 520px;
    padding: 1.2rem;
    border-radius: 8px;
  }
`;

export const MockupContent = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  padding: 0.8rem;
  color: ${colors.secondary};
  position: relative;
  z-index: 2;

  .title {
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${colors.black};
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .metric {
    text-align: center;
    padding: 0.4rem;
    background: rgba(30, 64, 175, 0.05);
    border-radius: 3px;
    border: 1px solid rgba(30, 64, 175, 0.1);

    .value {
      font-size: 0.85rem;
      font-weight: 800;
      color: ${colors.primary};
      margin-bottom: 0.1rem;
      line-height: 1;
    }

    .label {
      font-size: 0.55rem;
      color: ${colors.neutral500};
      line-height: 1.2;
    }
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${colors.success};
    font-size: 0.7rem;
    font-weight: 600;
    justify-content: center;
    padding: 0.25rem;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 3px;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem;
    
    .title {
      font-size: 0.75rem;
    }
    
    .metric {
      .value {
        font-size: 0.8rem;
      }
      .label {
        font-size: 0.5rem;
      }
    }
    
    .status {
      font-size: 0.65rem;
    }
  }
`;