// src/modules/Home/containers/HeroSection/styles.js - VERSÃO COMPACTA
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral500: '#64748b',
  neutral600: '#475569',
  success: '#22c55e',
  white: '#ffffff',
  black: '#0f172a'
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

// CONTAINER PRINCIPAL - ALTURA REDUZIDA
export const HeroContainer = styled.section`
  min-height: 60vh; /* AQUI: Reduzido de 75vh para 60vh */
  background: linear-gradient(135deg, ${colors.white} 0%, ${colors.neutral50} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem 0rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${breakpoints.mobile}) {
    min-height: 50vh; /* Mobile ainda menor */
    padding: 1.5rem 1rem 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 55vh; /* Tablet intermediário */
    padding: 2rem 1.5rem 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 65vh; /* Large um pouco maior */
    padding: 3rem 4rem 2rem;
  }

  /* Grid de fundo sutil */
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
`;

// CONTENT - VOLTA AO GRID NORMAL
export const HeroContent = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Proporção equilibrada */
  gap: 3rem; /* Gap normal */
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

// TEXTO - SIMPLES
export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
  }
`;

// BADGE - ESPAÇAMENTO OTIMIZADO
export const SustainabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(5, 150, 105, 0.1);
  border: 1px solid rgba(5, 150, 105, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 1rem; /* Mais espaço abaixo */

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

// TÍTULO - ESPAÇAMENTOS REFINADOS
export const HeroTitle = styled.h1`
  font-size: clamp(1.3rem, 3.2vw, 2.1rem);
  font-weight: 800;
  line-height: 1.15; /* Melhor line-height */
  color: ${colors.secondary};
  margin-bottom: 1rem; /* Mais espaço abaixo */
  letter-spacing: -0.025em;

  .highlight {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

// SUBTÍTULO - ESPAÇAMENTOS OTIMIZADOS
export const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 1.6vw, 1rem);
  color: ${colors.neutral600};
  line-height: 1.5; /* Melhor legibilidade */
  margin-bottom: 1.5rem; /* Mais espaço antes das stats */
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

// STATS - ESPAÇAMENTOS EQUILIBRADOS
export const HeroStats = styled.div`
  display: flex;
  gap: 1.5rem; /* Mais espaço entre stats */
  margin: 1.5rem 0; /* Mais margem vertical */

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

// STAT INDIVIDUAL - ESPAÇAMENTOS REFINADOS
export const Stat = styled.div`
  text-align: center;
  min-width: 80px;

  .number {
    font-size: clamp(1.1rem, 2.8vw, 1.4rem);
    font-weight: 800;
    color: ${colors.primary};
    display: block;
    line-height: 1;
    margin-bottom: 0.3rem; /* Espaço entre número e label */
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

// BOTÕES - ESPAÇAMENTOS OTIMIZADOS
export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem; /* Espaço adequado entre botões */
  margin-top: 1.5rem; /* Mais espaço acima */

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

// BOTÃO PRIMÁRIO - IGUAL TRACTIAN
export const PrimaryButton = styled(Link)`
  background: ${colors.primary};
  color: ${colors.white};
  padding: 0.7rem 1.4rem; /* Menor */
  border-radius: 5px; /* Menor */
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem; /* Menor */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 2px solid ${colors.primary};
  white-space: nowrap;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-1px); /* Hover menor */
    box-shadow: 0 6px 12px rgba(5, 150, 105, 0.25);
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

// BOTÃO SECUNDÁRIO - IGUAL TRACTIAN
export const SecondaryButton = styled(Link)`
  background: transparent;
  color: ${colors.secondary};
  padding: 0.7rem 1.4rem; /* Menor */
  border: 2px solid ${colors.neutral200};
  border-radius: 5px; /* Menor */
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem; /* Menor */
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
    transform: translateY(-1px); /* Hover menor */
    background: rgba(5, 150, 105, 0.05);
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

// VISUAL - SIMPLES E FUNCIONAL
export const HeroVisual = styled.div`
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`;

// CONTAINER DE VÍDEO - GRANDE MAS BEM PROPORCIONADO
export const VideoContainer = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(5, 150, 105, 0.25);
  background: ${colors.black};
  width: 100%;
  max-width: 700px; /* GRANDE MAS CONTROLADO */
  margin: 0 auto;
  
  video, img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
    max-height: 500px; /* ALTURA GRANDE MAS CONTROLADA */
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 12px;
    max-width: 100%;
    
    video, img {
      border-radius: 12px;
      max-height: 350px;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 800px; /* MAIOR EM TELAS GRANDES */
    
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
  background: linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%);
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

// BOTÃO DE PLAY DO VÍDEO - MENOR
export const VideoPlayButton = styled.button`
  width: 60px; /* Menor */
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.primary};
  font-size: 1.2rem;
  
  &:hover {
    background: ${colors.white};
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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

// STATS DO VÍDEO - VOLTA AO NORMAL
export const VideoStats = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 3;
  
  .stat {
    background: rgba(0, 0, 0, 0.75);
    color: ${colors.white};
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: blur(10px);
    
    .label {
      opacity: 0.8;
    }
    
    .value {
      font-weight: 600;
      color: ${colors.primary};
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

// MOCKUP CONTAINER - COMPACTO
export const MockupContainer = styled.div`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 16px;
  padding: 1.5rem; /* Menor */
  box-shadow: 0 15px 30px rgba(5, 150, 105, 0.25);
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

// CONTEÚDO DO MOCKUP - COMPACTO
export const MockupContent = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  padding: 1.2rem; /* Menor */
  color: ${colors.secondary};
  position: relative;
  z-index: 2;

  .title {
    font-size: 1rem; /* Menor */
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: ${colors.secondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem; /* Menor */
    margin-bottom: 0.8rem;
  }

  .metric {
    text-align: center;
    padding: 0.6rem; /* Menor */
    background: ${colors.neutral50};
    border-radius: 6px;

    .value {
      font-size: 1.2rem; /* Menor */
      font-weight: 800;
      color: ${colors.primary};
      margin-bottom: 0.2rem;
      line-height: 1;
    }

    .label {
      font-size: 0.7rem; /* Menor */
      color: ${colors.neutral500};
      line-height: 1.2;
    }
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.success};
    font-size: 0.85rem; /* Menor */
    font-weight: 600;
    justify-content: center;
    padding: 0.4rem;
    background: rgba(34, 197, 94, 0.1);
    border-radius: 4px;
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