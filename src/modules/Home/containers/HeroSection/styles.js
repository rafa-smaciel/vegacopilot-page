// src/modules/Home/containers/HeroSection/styles.js - VIXEM COLOR PALETTE
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// PALETA DE CORES VIXEM - Baseada no logo VIXEM
const colors = {
  // Cores principais do logo VIXEM - Azul mais escuro
  primary: '#1E40AF', // Azul escuro principal do logo VIXEM
  primaryDark: '#1E3A8A', // Azul ainda mais escuro
  primaryLight: '#3B82F6', // Azul mais claro para contraste
  
  // Cores secundárias técnicas
  secondary: '#1A1A1A', // Preto/cinza escuro para contraste
  accent: '#C41E3A', // Vermelho como cor de destaque
  
  // Tons neutros
  neutral50: '#F8FAFC',
  neutral100: '#F1F5F9',
  neutral200: '#E2E8F0',
  neutral300: '#CBD5E0',
  neutral500: '#64748B',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1E293B',
  
  // Cores funcionais
  success: '#10B981', // Verde para status positivo
  warning: '#F59E0B', // Amarelo para alertas
  info: '#3B82F6', // Azul para informações
  
  // Cores base
  white: '#FFFFFF',
  black: '#0F172A'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

// Animações sutis
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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// CONTAINER PRINCIPAL
export const HeroContainer = styled.section`
  min-height: 60vh;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem 0rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 50vh;
    padding: 1.5rem 1rem 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 55vh;
    padding: 2rem 1.5rem 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 65vh;
    padding: 3rem 4rem 2rem;
  }

  /* Grid de fundo sutil com tema VIXEM */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="${colors.primary}" stroke-width="0.5" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    z-index: 1;
  }

  /* Elemento decorativo inspirado no logo */
  &::after {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 300px;
    height: 300px;
  /* Elemento decorativo minimalista */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 5%;
    width: 2px;
    height: 100px;
    background: ${colors.primary};
    border-radius: 1px;
    z-index: 1;
  }

  /* Segundo elemento sutil */
  &::before {
    content: '';
    position: absolute;
    bottom: 30%;
    left: 3%;
    width: 1px;
    height: 80px;
    background: ${colors.primaryLight};
    border-radius: 1px;
    z-index: 1;
  }
`;

// CONTENT
export const HeroContent = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
  align-items: center;
  z-index: 2;
  position: relative;
  width: 80%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 4rem;
  }
`;

// TEXTO
export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
  }
`;

// BADGE - Tema VIXEM/NVIDIA
export const SustainabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(15, 22, 41, 0.04);
  border: 1px solid rgba(15, 22, 41, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 1rem;

  svg {
    color: ${colors.primary};
    font-size: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1.2rem;
  }
`;

// TÍTULO - Destaque para VIXEM
export const HeroTitle = styled.h1`
  font-size: clamp(1.3rem, 3.2vw, 2.1rem);
  font-weight: 800;
  line-height: 1.15;
  color: ${colors.textPrimary};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;

  .highlight {
    color: ${colors.primary};
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.8rem;
    br {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.6rem;
    margin-bottom: 1.2rem;
  }
`;

// SUBTÍTULO
export const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 1.6vw, 1rem);
  color: ${colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 420px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    margin-bottom: 1.2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.1rem;
    max-width: 500px;
    margin-bottom: 1.8rem;
  }
`;

// STATS
export const HeroStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1.2rem 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 2rem;
    margin: 2rem 0;
  }
`;

// STAT INDIVIDUAL
export const Stat = styled.div`
  text-align: center;
  min-width: 80px;

  .number {
    font-size: clamp(1.1rem, 2.8vw, 1.4rem);
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .label {
    font-size: clamp(0.7rem, 1.3vw, 0.8rem);
    color: ${colors.textMuted};
    font-weight: 600;
    display: block;
    line-height: 1.2;
  }

  .label {
    font-size: clamp(0.7rem, 1.3vw, 0.8rem);
    color: ${colors.neutral500};
    font-weight: 600;
    display: block;
    line-height: 1.2;
  }

  @media (min-width: ${breakpoints.large}) {
    .number {
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
    }
    .label {
      font-size: 0.85rem;
    }
  }
`;

// BOTÕES
export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 1.2rem;
    margin-top: 2rem;
  }
`;

// BOTÃO PRIMÁRIO - Azul escuro igual ao header
export const PrimaryButton = styled(Link)`
  background: ${colors.primary} !important;
  color: ${colors.white} !important;
  padding: 0.7rem 1.4rem;
  border-radius: 4px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 2px solid ${colors.primary} !important;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(15, 22, 41, 0.25) !important;
  opacity: 1 !important;

  &:hover {
    background: ${colors.primaryDark} !important;
    color: ${colors.white} !important;
    border-color: ${colors.primaryDark} !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(15, 22, 41, 0.35) !important;
    text-decoration: none !important;
  }

  &:focus,
  &:active,
  &:visited {
    background: ${colors.primary} !important;
    color: ${colors.white} !important;
    text-decoration: none !important;
  }

  svg {
    color: ${colors.white} !important;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 240px;
    justify-content: center;
    font-size: 0.85rem;
    padding: 0.65rem 1.2rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.8rem 1.6rem;
    font-size: 0.95rem;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 240px;
    justify-content: center;
    font-size: 0.85rem;
    padding: 0.65rem 1.2rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.8rem 1.6rem;
    font-size: 0.95rem;
  }
`;

// BOTÃO SECUNDÁRIO - Azul escuro outline
export const SecondaryButton = styled(Link)`
  background: transparent;
  color: ${colors.primary};
  padding: 0.7rem 1.4rem;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(15, 22, 41, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 240px;
    justify-content: center;
    font-size: 0.85rem;
    padding: 0.65rem 1.2rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0.8rem 1.6rem;
    font-size: 0.95rem;
  }
`;

// VISUAL
export const HeroVisual = styled.div`
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`;

// CONTAINER DE VÍDEO - Azul escuro profissional
export const VideoContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(15, 22, 41, 0.15);
  background: ${colors.textPrimary};
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid rgba(15, 22, 41, 0.1);
  
  video, img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 14px;
    max-height: 500px;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 16px 32px rgba(15, 22, 41, 0.2);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 12px;
    max-width: 100%;
    
    video, img {
      border-radius: 10px;
      max-height: 350px;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 800px;
    
    video, img {
      max-height: 600px;
    }
  }
`;

// OVERLAY DO VÍDEO
export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 22, 41, 0.03);
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

// BOTÃO DE PLAY DO VÍDEO - Azul escuro clean
export const VideoPlayButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${colors.white};
  border: 2px solid ${colors.primary};
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
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(15, 22, 41, 0.25);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
    
    &:hover {
      transform: none;
    }
  }
`;

// STATS DO VÍDEO - Hierarquia de cinzas
export const VideoStats = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 3;
  
  .stat {
    background: rgba(15, 23, 42, 0.9);
    color: ${colors.white};
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: blur(10px);
    border-left: 2px solid ${colors.primary};
    
    .label {
      color: ${colors.textLight};
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
      padding: 5px 8px;
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

// MOCKUP CONTAINER - Azul escuro elegante
export const MockupContainer = styled.div`
  background: ${colors.primary};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 12px 24px rgba(15, 22, 41, 0.2);
  position: relative;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.2rem;
    border-radius: 12px;
    max-width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 580px;
    padding: 1.8rem;
  }
`;

// CONTEÚDO DO MOCKUP
export const MockupContent = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  padding: 1.2rem;
  color: ${colors.secondary};
  position: relative;
  z-index: 2;

  .title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: ${colors.textPrimary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .metric {
    text-align: center;
    padding: 0.6rem;
    background: ${colors.neutral50};
    border-radius: 6px;
    border: 1px solid rgba(30, 64, 175, 0.1);

    .value {
      font-size: 1.2rem;
      font-weight: 800;
      color: ${colors.primary};
      margin-bottom: 0.2rem;
      line-height: 1;
    }

    .label {
      font-size: 0.7rem;
      color: ${colors.textMuted};
      line-height: 1.2;
    }
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.success};
    font-size: 0.85rem;
    font-weight: 600;
    justify-content: center;
    padding: 0.4rem;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 4px;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    
    .title {
      font-size: 0.9rem;
    }
    
    .metric {
      .value {
        font-size: 1rem;
      }
      .label {
        font-size: 0.65rem;
      }
    }
    
    .status {
      font-size: 0.8rem;
    }
  }
`;