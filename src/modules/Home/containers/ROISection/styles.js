// src/modules/Home/containers/ROISection/styles.js
import styled from 'styled-components';

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
  white: '#ffffff',
  blue: '#3b82f6'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const ROIContainer = styled.section`
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, ${colors.neutral50} 0%, ${colors.white} 100%);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem 6rem;
  }
`;

export const ROIContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 6rem;
    margin-bottom: 6rem;
  }
`;

export const ROIText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

export const PartnerBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: ${colors.white};
  border: 2px solid ${colors.primary};
  border-radius: 12px;
  width: fit-content;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const PartnerLogo = styled.img`
  height: 40px;
  object-fit: contain;

  @media (max-width: ${breakpoints.mobile}) {
    height: 30px;
  }
`;

export const PartnerName = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.primary};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const ROITitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.1;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

export const ROIDescription = styled.p`
  font-size: 1.125rem;
  color: ${colors.neutral600};
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
  }
`;

export const ROIButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${colors.blue};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: fit-content;
  border: 2px solid ${colors.blue};

  &:hover {
    background: #2563eb;
    border-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  }

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 2.25rem;
    font-size: 1.125rem;
  }
`;

export const ROIVisual = styled.div`
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    order: -1;
  }
`;

export const ROIImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 8px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 3rem;
  }
`;

export const MetricCard = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.neutral200};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(5, 150, 105, 0.15);
    border-color: ${colors.primary};
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
  }
`;

export const MetricIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.5rem;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;

  ${MetricCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.5rem;
  }
`;

export const MetricLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.neutral600};
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const MetricDescription = styled.p`
  font-size: 0.875rem;
  color: ${colors.neutral500};
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.95rem;
  }
`;