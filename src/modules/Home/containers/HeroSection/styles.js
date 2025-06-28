// src/modules/Home/containers/HeroSection/styles.js - REMOVE ESPAÇOS EM BRANCO
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

// ===== CONTAINER PRINCIPAL - SEM ESPAÇOS =====
export const HeroContainer = styled.section`
  min-height: 70vh;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* REMOVE TODO PADDING */
  margin: 0; /* REMOVE TODA MARGEM */
  position: relative;
  overflow: hidden;
  
  /* Compensa altura do header se necessário */
  margin-top: -5px; /* Pequeno ajuste se houver gap do header */
  
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 60vh;
    padding: 0;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 65vh;
    padding: 0;
    margin: 0;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 75vh;
    padding: 0;
    margin: 0;
  }
`;

// ===== CONTENT - SEM PADDING EXTERNO =====
export const HeroContent = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2.5rem;
  align-items: center;
  z-index: 2;
  position: relative;
  width: 80%;
  padding: 1rem 2rem; /* PADDING INTERNO MÍNIMO */

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    width: 90%;
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.5rem;
    width: 95%;
    padding: 0.5rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 3rem;
    padding: 2rem 4rem;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
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
  margin-bottom: 0.8rem;
  width: fit-content;

  svg {
    color: ${colors.primary};
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 0.8rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 800;
  line-height: 1.2;
  color: ${colors.black};
  margin-bottom: 0.8rem;
  letter-spacing: -0.025em;

  .highlight {
    color: ${colors.primary};
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.6rem;
    br {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  color: ${colors.neutral600};
  line-height: 1.5;
  margin-bottom: 1.2rem;
  max-width: 400px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.1rem;
    max-width: 450px;
    margin-bottom: 1.5rem;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 1.2rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    margin: 1rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`;

export const Stat = styled.div`
  text-align: center;
  min-width: 70px;

  .number {
    font-size: clamp(1rem, 2.2vw, 1.25rem);
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.25rem;
  }

  .label {
    font-size: clamp(0.6rem, 1.1vw, 0.7rem);
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

export const HeroButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

export const PrimaryButton = styled(Link)`
  background: ${colors.primary} !important;
  color: ${colors.white} !important;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.8rem;
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
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 220px;
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
  padding: 0.6rem 1.2rem;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
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
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 220px;
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

export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(30, 64, 175, 0.1);
  background: ${colors.black};
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  border: 1px solid rgba(30, 64, 175, 0.1);
  aspect-ratio: 16/9;
  
  video, img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 6px;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 12px 28px rgba(30, 64, 175, 0.15);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 6px;
    max-width: 100%;
    aspect-ratio: 16/10;
    
    video, img {
      border-radius: 4px;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 650px;
    border-radius: 10px;
    
    video, img {
      border-radius: 8px;
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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${colors.white};
  border: 2px solid ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.primary};
  font-size: 1rem;
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(30, 64, 175, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

export const VideoStats = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 3;
  
  .stat {
    background: rgba(15, 23, 42, 0.9);
    color: ${colors.white};
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 4px;
    backdrop-filter: blur(10px);
    border-left: 2px solid ${colors.primary};
    
    .label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.65rem;
    }
    
    .value {
      font-weight: 600;
      color: ${colors.white};
      font-size: 0.7rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 8px;
    right: 8px;
    
    .stat {
      padding: 3px 6px;
      font-size: 0.65rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    bottom: 12px;
    right: 12px;
    
    .stat {
      padding: 5px 10px;
      font-size: 0.75rem;
    }
  }
`;

export const MockupContainer = styled.div`
  background: ${colors.primary};
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 8px 20px rgba(30, 64, 175, 0.12);
  position: relative;
  overflow: hidden;
  max-width: 480px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 6px;
    max-width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 550px;
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

export const MockupContent = styled.div`
  background: ${colors.white};
  border-radius: 6px;
  padding: 1rem;
  color: ${colors.secondary};
  position: relative;
  z-index: 2;

  .title {
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: ${colors.black};
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
    margin-bottom: 0.6rem;
  }

  .metric {
    text-align: center;
    padding: 0.5rem;
    background: rgba(30, 64, 175, 0.05);
    border-radius: 4px;
    border: 1px solid rgba(30, 64, 175, 0.1);

    .value {
      font-size: 0.95rem;
      font-weight: 800;
      color: ${colors.primary};
      margin-bottom: 0.1rem;
      line-height: 1;
    }

    .label {
      font-size: 0.6rem;
      color: ${colors.neutral500};
      line-height: 1.2;
    }
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${colors.success};
    font-size: 0.75rem;
    font-weight: 600;
    justify-content: center;
    padding: 0.3rem;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 3px;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem;
    
    .title {
      font-size: 0.8rem;
    }
    
    .metric {
      .value {
        font-size: 0.9rem;
      }
      .label {
        font-size: 0.55rem;
      }
    }
    
    .status {
      font-size: 0.7rem;
    }
  }
`;