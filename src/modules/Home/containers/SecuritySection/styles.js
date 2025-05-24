// src/modules/Home/containers/SecuritySection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1e293b',
  neutral900: '#0f172a',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const SecurityContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const SecurityContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1200px;
  }
`;

export const SecurityText = styled.div`
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 5rem;
  }
`;

export const SecurityTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.white};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const SecurityDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  max-width: 400px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
  }
`;

export const SecurityCertifications = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 3rem;
    margin-bottom: 5rem;
  }
`;

export const CertificationBadge = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.2);
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

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.4;
    margin-top: 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 1rem;
    
    p {
      font-size: 0.85rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem 2rem;
    
    p {
      font-size: 1rem;
    }
  }
`;

export const CertificationLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: brightness(0.9);
  transition: filter 0.3s ease;

  ${CertificationBadge}:hover & {
    filter: brightness(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 100px;
    height: 100px;
    margin-bottom: 1.25rem;
  }
`;

export const CertificationTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
  }
`;

export const TrustCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: rgba(5, 150, 105, 0.1);
  border: 1px solid rgba(5, 150, 105, 0.3);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3rem;
    gap: 2rem;
  }
`;

export const TrustCenterText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.white};

  svg {
    color: ${colors.primary};
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
    
    svg {
      font-size: 1.25rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    
    svg {
      font-size: 1.75rem;
    }
  }
`;

export const TrustCenterButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};

  &:hover {
    background: ${colors.primaryLight};
    border-color: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(5, 150, 105, 0.3);
  }

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
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