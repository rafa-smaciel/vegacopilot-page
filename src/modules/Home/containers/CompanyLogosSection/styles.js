// src/modules/Home/containers/CompanyLogosSection/styles.js - VERSÃO COMPACTA
import styled, { keyframes } from 'styled-components';

const colors = {
  primary: '#059669',
  primaryLight: '#10b981',
  neutral200: '#e2e8f0',
  neutral500: '#64748b',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
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

export const LogosContainer = styled.section`
  padding: 2.5rem 2rem; /* Mais espaço */
  background-color: ${colors.white};
  text-align: center;
  border-bottom: 1px solid ${colors.neutral200};
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3.5rem 4rem;
  }
`;

export const LogosTitle = styled.h2`
  font-size: 1.2rem;
  color: ${colors.neutral500};
  margin-bottom: 2rem; /* Mais espaço abaixo */
  font-weight: 600;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
  }
`;

// Carrossel com máscara para efeito fade nas bordas
export const LogosCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  mask: linear-gradient(
    to right,
    transparent,
    white 10%,
    white 90%,
    transparent
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent,
    white 10%,
    white 90%,
    transparent
  );

  @media (max-width: ${breakpoints.mobile}) {
    mask: linear-gradient(
      to right,
      transparent,
      white 5%,
      white 95%,
      transparent
    );
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      white 5%,
      white 95%,
      transparent
    );
  }
`;

export const LogosTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem; /* Reduzido de 4rem */
  animation: ${scroll} 25s linear infinite; /* Mais rápido */
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2.5rem; /* Reduzido de 3rem */
    animation-duration: 18s; /* Mais rápido */
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 4rem;
    animation-duration: 30s;
  }
`;

export const CompanyLogo = styled.img`
  height: 50px; /* Reduzido de 60px */
  opacity: ${props => props.featured ? '0.8' : '0.6'};
  transition: all 0.3s ease;
  filter: ${props => props.featured ? 'grayscale(0%)' : 'grayscale(100%)'};
  flex-shrink: 0;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    filter: grayscale(0%);
  }

  /* Destaque especial para clientes em operação */
  ${props => props.featured && `
    border: 2px solid transparent;
    border-radius: 6px; /* Menor */
    padding: 6px; /* Menor */
    background: linear-gradient(white, white) padding-box,
                linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight}) border-box;
    
    &:hover {
      background: linear-gradient(${colors.neutral50}, ${colors.neutral50}) padding-box,
                  linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight}) border-box;
    }
  `}

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px; /* Reduzido de 45px */
  }

  @media (min-width: ${breakpoints.large}) {
    height: 55px; /* Reduzido de 70px */
  }
`;