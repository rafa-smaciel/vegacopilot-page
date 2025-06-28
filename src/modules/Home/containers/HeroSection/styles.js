// src/modules/Home/containers/HeroSection/styles.js - PROPORÇÃO VIXEM/TRACTIAN
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

// ===== CONTAINER PRINCIPAL - PROPORÇÃO EXATA VIXEM/TRACTIAN =====
export const HeroContainer = styled.section`
  /* Altura fixa para manter proporção das imagens */
  height: 100vh;
  width: 100vw;
  background: ${colors.white};
  display: flex;
  align-items: stretch; /* Estica filhos para altura total */
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 100vh;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100vh;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100vh;
    width: 100vw;
  }
`;

// ===== CONTENT - GRID EXATO 50/50 COMO VIXEM/TRACTIAN =====
export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Exatos 50% cada lado */
  gap: 0;
  align-items: stretch; /* Estica para altura total */
  z-index: 2;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr; /* Stack vertical em mobile */
    gap: 0;
    text-align: center;
    width: 100vw;
    height: 100vh;
    padding: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-rows: 1fr 1fr;
    gap: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  padding: 4rem 3rem 4rem 6rem; /* Padding mais generoso à esquerda */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh; /* Altura total */
  background: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
    height: 50vh; /* Metade da tela em mobile */
    padding: 2rem 3rem;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 2rem;
    height: 50vh;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 6rem 4rem 6rem 8rem;
    height: 100vh;
  }
`;

export const SustainabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(30, 64, 175, 0.08);
  border: 1px solid rgba(30, 64, 175, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
  width: fit-content;

  svg {
    color: ${colors.primary};
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// ===== TÍTULO - TAMANHO SIMILAR AO VIXEM =====
export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem); /* Maior como no VIXEM */
  font-weight: 800;
  line-height: 1.1;
  color: ${colors.black};
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  
  .highlight {
    color: ${colors.primary};
    font-weight: 900; /* Mais peso no destaque */
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 6vw, 2.5rem);
    line-height: 1.15;
    
    br {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 4.5rem;
    margin-bottom: 2rem;
    line-height: 1.05;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 1.8vw, 1.3rem); /* Maior como no VIXEM */
  color: ${colors.neutral600};
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px; /* Linha ótima para leitura */
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.4rem;
    max-width: 550px;
    margin-bottom: 2.5rem;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 2.5rem;
    margin: 2.5rem 0;
  }
`;

export const Stat = styled.div`
  text-align: center;
  min-width: 80px;

  .number {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
    color: ${colors.neutral500};
    font-weight: 600;
    display: block;
    line-height: 1.3;
  }

  @media (min-width: ${breakpoints.large}) {
    .number {
      font-size: 2rem;
      margin-bottom: 0.6rem;
    }
    .label {
      font-size: 0.9rem;
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
`;

// ===== BOTÕES - TAMANHOS GENEROSOS COMO VIXEM =====
export const PrimaryButton = styled(Link)`
  background: ${colors.primary} !important;
  color: ${colors.white} !important;
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${colors.primary} !important;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.25) !important;

  &:hover {
    background: ${colors.primaryDark} !important;
    color: ${colors.white} !important;
    border-color: ${colors.primaryDark} !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(30, 64, 175, 0.35) !important;
    text-decoration: none !important;
  }

  svg {
    color: ${colors.white} !important;
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
    font-size: 0.95rem;
    padding: 0.9rem 1.5rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }
`;

export const SecondaryButton = styled(Link)`
  background: transparent;
  color: ${colors.primary};
  padding: 1rem 2rem;
  border: 2px solid ${colors.primary};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 64, 175, 0.25);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
    font-size: 0.95rem;
    padding: 0.9rem 1.5rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }
`;

// ===== VISUAL - EXATOS 50% DA TELA COMO VIXEM/TRACTIAN =====
export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Altura total fixa */
  width: 100%;
  background: ${colors.black}; /* Fundo escuro como nas imagens */
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
    height: 50vh; /* Metade da tela em mobile */
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50vh;
    width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100vh;
    width: 100%;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  background: ${colors.black};
  width: 100%;
  height: 100vh; /* Altura total fixa */
  margin: 0;
  border: none;
  
  video, img {
    width: 100%;
    height: 100vh;
    display: block;
    object-fit: cover; /* Cover para preencher toda a área */
    object-position: center; /* Centraliza o conteúdo */
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50vh;
    width: 100%;
    
    video, img {
      height: 50vh;
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 50vh;
    width: 100%;
    
    video, img {
      height: 50vh;
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100vh;
    width: 100%;
    
    video, img {
      height: 100vh;
      width: 100%;
    }
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 64, 175, 0.03);
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${colors.white};
  border: 3px solid ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.primary};
  font-size: 1.2rem;
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(30, 64, 175, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 70px;
    height: 70px;
    font-size: 1.4rem;
  }
`;

export const VideoStats = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 3;
  
  .stat {
    background: rgba(15, 23, 42, 0.9);
    color: ${colors.white};
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(10px);
    border-left: 3px solid ${colors.primary};
    
    .label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.8rem;
    }
    
    .value {
      font-weight: 600;
      color: ${colors.white};
      font-size: 0.85rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 15px;
    right: 15px;
    
    .stat {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    bottom: 30px;
    right: 30px;
    
    .stat {
      padding: 10px 15px;
      font-size: 0.9rem;
    }
  }
`;