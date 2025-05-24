// src/modules/Home/containers/PatentedTechSection/styles.js
import styled, { keyframes } from 'styled-components';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral400: '#94a3b8',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  success: '#22c55e',
  amber: '#f59e0b',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

// Animações
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const layerGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px var(--layer-color, ${colors.primary});
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px var(--layer-color, ${colors.primary});
    transform: scale(1.05);
  }
`;

export const TechContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.neutral50} 0%, ${colors.white} 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="tech-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="${colors.primary}" stroke-width="0.5" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23tech-grid)"/></svg>');
    z-index: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const TechContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
  }
`;

export const TechHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 6rem;
  }
`;

export const TechBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${colors.amber}, #fbbf24);
  color: ${colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  animation: ${float} 3s ease-in-out infinite;

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
`;

export const TechTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TechSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.neutral600};
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

export const TechLayersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  .layers-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;

    .layers-content {
      order: 2;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
`;

export const TechVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
    min-height: 300px;
  }

  @media (min-width: ${breakpoints.large}) {
    min-height: 500px;
  }
`;

export const LayersAnimation = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  
  .layer-visual {
    position: absolute;
    border-radius: 50%;
    border: 3px solid var(--layer-color, ${colors.primary});
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.9) 0%, 
      rgba(255, 255, 255, 0.1) 70%, 
      transparent 100%
    );
    animation: ${layerGlow} 3s ease-in-out infinite;
  }

  .layer-1 {
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0s;
  }

  .layer-2 {
    width: 180px;
    height: 180px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 1s;
  }

  .layer-3 {
    width: 260px;
    height: 260px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 2s;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 250px;
    height: 250px;

    .layer-1 { width: 80px; height: 80px; }
    .layer-2 { width: 150px; height: 150px; }
    .layer-3 { width: 220px; height: 220px; }
  }

  @media (min-width: ${breakpoints.large}) {
    width: 400px;
    height: 400px;

    .layer-1 { width: 120px; height: 120px; }
    .layer-2 { width: 220px; height: 220px; }
    .layer-3 { width: 320px; height: 320px; }
  }
`;

export const TechLayer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: ${colors.white};
  border-radius: 16px;
  border: 1px solid ${colors.neutral200};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
    border-radius: 16px 16px 0 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 12px 32px rgba(5, 150, 105, 0.15);
    border-color: ${colors.primary};

    &::before {
      transform: scaleX(1);
    }
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

  .layer-content {
    flex: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: left;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
    gap: 2rem;
  }
`;

export const LayerIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${colors.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${TechLayer}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
  }
`;

export const LayerNumber = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const LayerTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`;

export const LayerDescription = styled.p`
  font-size: 1rem;
  color: ${colors.neutral600};
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.125rem;
  }
`;

export const TechPatentInfo = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(5, 150, 105, 0.05);
  border: 1px solid rgba(5, 150, 105, 0.2);
  border-radius: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3rem;
  }
`;

export const PatentBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.primary};
  color: ${colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);

  svg {
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const PatentText = styled.p`
  font-size: 0.9rem;
  color: ${colors.neutral600};
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;

  strong {
    color: ${colors.secondary};
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;