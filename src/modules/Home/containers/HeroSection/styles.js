// src/modules/Home/containers/HeroSection/styles.js - PROPORÇÕES TRACTIAN EXATAS CORRIGIDAS
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

// ===== CONTAINER PRINCIPAL - ALTURA REDUZIDA =====
export const HeroContainer = styled.section`
  /* ALTURA REDUZIDA: Remove espaços em branco */
  height: 65vh;
  min-height: 500px; /* Altura mínima reduzida */
  max-height: 650px; /* Altura máxima reduzida */
  width: 100vw;
  background: ${colors.white};
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 60vh;
    min-height: 450px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 62vh;
    min-height: 480px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 70vh;
    min-height: 550px;
    max-height: 700px;
  }
`;

// ===== CONTENT - GRID EXATO 50/50 =====
export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  z-index: 2;
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    text-align: center;
    width: 100vw;
    height: 100%;
    padding: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-rows: 1fr 1fr;
    gap: 0;
    width: 100vw;
    height: 100%;
    padding: 0;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
  }
`;

// ===== TEXTO - PADDING REDUZIDO COMO TRACTIAN =====
export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  padding: 2rem 2rem 2rem 4rem; /* PADDING MUITO REDUZIDO */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
    height: 50%;
    padding: 1.5rem 2rem;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 1.5rem;
    height: 50%;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3rem 3rem 3rem 5rem; /* Padding maior só em telas grandes */
    height: 100%;
  }
`;

export const SustainabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(30, 64, 175, 0.08);
  border: 1px solid rgba(30, 64, 175, 0.2);
  padding: 0.3rem 0.7rem; /* REDUZIDO */
  border-radius: 6px;
  font-size: 0.75rem; /* MENOR */
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 0.8rem; /* REDUZIDO */
  width: fit-content;

  svg {
    color: ${colors.primary};
    font-size: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

// ===== TÍTULO - TAMANHO REDUZIDO =====
export const HeroTitle = styled.h1`
  font-size: clamp(1.3rem, 2.8vw, 1.9rem); /* MUITO MENOR */
  font-weight: 800;
  line-height: 1.1;
  color: ${colors.black};
  margin-bottom: 0.6rem; /* REDUZIDO */
  letter-spacing: -0.02em;
  
  .highlight {
    color: ${colors.primary};
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.4rem;
    font-size: clamp(1.2rem, 3.5vw, 1.5rem);
    line-height: 1.15;
    
    br {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.2rem; /* MENOR que os 2.8rem anteriores */
    margin-bottom: 0.8rem;
    line-height: 1.05;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.8rem, 1.1vw, 0.9rem); /* MUITO REDUZIDO */
  color: ${colors.neutral600};
  line-height: 1.5;
  margin-bottom: 1rem; /* REDUZIDO */
  max-width: 380px; /* MENOR */
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin-bottom: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    max-width: 420px;
    margin-bottom: 1.2rem;
  }
`;

// ===== STATS - MAIS COMPACTOS =====
export const HeroStats = styled.div`
  display: flex;
  gap: 1rem; /* REDUZIDO */
  margin: 1rem 0; /* REDUZIDO */

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    margin: 0.6rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.3rem;
    margin: 1.3rem 0;
  }
`;

export const Stat = styled.div`
  text-align: center;
  min-width: 55px; /* MENOR */

  .number {
    font-size: clamp(0.95rem, 1.5vw, 1.2rem); /* MENOR */
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.2rem;
  }

  .label {
    font-size: clamp(0.6rem, 0.8vw, 0.7rem); /* MENOR */
    color: ${colors.neutral500};
    font-weight: 600;
    display: block;
    line-height: 1.2;
  }

  @media (min-width: ${breakpoints.large}) {
    .number {
      font-size: 1.4rem;
      margin-bottom: 0.3rem;
    }
    .label {
      font-size: 0.75rem;
    }
  }
`;

// ===== BOTÕES - TAMANHOS REDUZIDOS =====
export const HeroButtons = styled.div`
  display: flex;
  gap: 0.5rem; /* REDUZIDO */
  margin-top: 1rem; /* REDUZIDO */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.8rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 0.7rem;
    margin-top: 1.4rem;
  }
`;

export const PrimaryButton = styled(Link)`
  background: ${colors.primary} !important;
  color: ${colors.white} !important;
  padding: 0.6rem 1.2rem; /* REDUZIDO */
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.8rem; /* MENOR */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border: 2px solid ${colors.primary} !important;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(30, 64, 175, 0.12) !important; /* MENOR */

  &:hover {
    background: ${colors.primaryDark} !important;
    color: ${colors.white} !important;
    border-color: ${colors.primaryDark} !important;
    transform: translateY(-0.5px); /* MENOR */
    box-shadow: 0 2px 6px rgba(30, 64, 175, 0.2) !important;
    text-decoration: none !important;
  }

  svg {
    color: ${colors.white} !important;
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 180px;
    justify-content: center;
    font-size: 0.75rem;
    padding: 0.55rem 1rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.7rem 1.4rem;
    font-size: 0.85rem;
  }
`;

export const SecondaryButton = styled(Link)`
  background: transparent;
  color: ${colors.primary};
  padding: 0.6rem 1.2rem; /* REDUZIDO */
  border: 2px solid ${colors.primary};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem; /* MENOR */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-0.5px); /* MENOR */
    box-shadow: 0 1px 4px rgba(30, 64, 175, 0.12);
  }

  svg {
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 180px;
    justify-content: center;
    font-size: 0.75rem;
    padding: 0.55rem 1rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.7rem 1.4rem;
    font-size: 0.85rem;
  }
`;

// ===== VISUAL - 50% DA TELA =====
export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${colors.black};
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
    height: 50%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50%;
    width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100%;
    width: 100%;
  }
`;

// ===== VIDEO CONTAINER CORRIGIDO =====
export const VideoContainer = styled.div`
  position: relative;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  background: ${colors.black};
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain; /* Mantém proporções sem cortar */
    object-position: center;
    max-width: 100%;
    max-height: 100%;
    /* Remove distorção forçando dimensões mínimas */
    min-width: 100%;
    min-height: 100%;
  }
  
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
    width: 100%;
    
    video {
      height: 100%;
      width: 100%;
      object-fit: contain;
      /* Para mobile, permite um pouco mais de flexibilidade */
      min-width: unset;
      min-height: unset;
    }
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    
    video {
      height: 100%;
      width: 100%;
      object-fit: contain;
      min-width: unset;
      min-height: unset;
    }
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100%;
    width: 100%;
    
    video {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
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
  width: 50px; /* MENOR */
  height: 50px;
  border-radius: 50%;
  background: ${colors.white};
  border: 2px solid ${colors.primary}; /* BORDA MENOR */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.primary};
  font-size: 1rem; /* MENOR */
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.05); /* MENOR */
    box-shadow: 0 4px 8px rgba(30, 64, 175, 0.25); /* MENOR */
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 45px;
    height: 45px;
    font-size: 0.9rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }
`;

export const VideoStats = styled.div`
  position: absolute;
  bottom: 15px; /* MENOR */
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px; /* MENOR */
  z-index: 3;
  
  .stat {
    background: rgba(15, 23, 42, 0.9);
    color: ${colors.white};
    padding: 6px 10px; /* MENOR */
    border-radius: 4px; /* MENOR */
    font-size: 0.8rem; /* MENOR */
    display: flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: blur(10px);
    border-left: 2px solid ${colors.primary}; /* MENOR */
    
    .label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
    }
    
    .value {
      font-weight: 600;
      color: ${colors.white};
      font-size: 0.8rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 10px;
    right: 10px;
    
    .stat {
      padding: 4px 8px;
      font-size: 0.75rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    bottom: 20px;
    right: 20px;
    
    .stat {
      padding: 8px 12px;
      font-size: 0.85rem;
    }
  }
`;