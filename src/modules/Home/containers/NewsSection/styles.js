// src/modules/Home/containers/NewsSection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  neutral800: '#1e293b',
  neutral900: '#0f172a',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const NewsContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const NewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
  }
`;

export const NewsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 5rem;
  }
`;

export const NewsTitle = styled.h2`
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

export const NewsSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
  }
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 3rem;
    margin-bottom: 4rem;
  }
`;

export const NewsCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(5, 150, 105, 0.2);
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

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${NewsCard}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 220px;
  }
`;

export const NewsBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${colors.primary};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(10px);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const NewsCardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 200px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
    height: auto;
    min-height: 180px;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2rem;
    height: 220px;
  }
`;

export const NewsCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.white};
  line-height: 1.2;
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

export const NewsCardDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  flex: 1;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    -webkit-line-clamp: 4;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const NewsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    color: ${colors.primaryLight};
    transform: translateX(4px);
  }

  svg {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const NewsFooter = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 1.5rem;
  }
`;

export const NewsFooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;

  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
    background: rgba(5, 150, 105, 0.1);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
    padding: 1.125rem 2.25rem;
  }
`;