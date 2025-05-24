// src/modules/Home/containers/IntegratedSystemSection/styles.js
import styled from 'styled-components';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral400: '#94a3b8',
  neutral600: '#475569',
  neutral800: '#1e293b',
  neutral900: '#0f172a',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const SystemContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 0;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 0;
  }
`;

export const SystemContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    padding: 0 4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const SystemText = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 6rem;
  }
`;

export const SystemTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.white};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const SystemDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    max-width: 800px;
  }
`;

export const SystemCarousel = styled.div`
  position: relative;
`;

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  pointer-events: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.secondary};
  font-size: 1.25rem;
  pointer-events: all;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${colors.white};
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * (100 / 3)}%);

  @media (max-width: ${breakpoints.mobile}) {
    transform: translateX(-${props => props.currentIndex * 100}%);
  }
`;

export const FunctionCard = styled.div`
  flex: 0 0 33.333%;
  padding: 1rem;
  min-height: 400px;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    flex: 0 0 100%;
    min-height: 350px;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 450px;
    padding: 1.5rem;
  }

  &.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  }
`;

export const FunctionImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${FunctionCard}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 220px;
    margin-bottom: 2rem;
  }
`;

export const FunctionBadge = styled.div`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 0.75rem;
  }
`;

export const FunctionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.white};
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }
`;

export const FunctionDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1.5rem;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? colors.primary : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? colors.primary : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 10px;
    height: 10px;
  }
`;