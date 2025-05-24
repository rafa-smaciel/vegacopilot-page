// src/modules/Home/containers/ProductsSection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral200: '#e2e8f0',
  neutral600: '#475569',
  success: '#22c55e',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const ProductsContainer = styled.section`
  padding: 6rem 2rem;
  background: ${colors.neutral50};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const ProductsHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 6rem;
  }
`;

export const ProductsTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
`;

export const ProductsSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.neutral600};
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 3rem;
  }
`;

export const ProductCard = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid ${colors.neutral200};
  position: relative;
  display: flex;
  flex-direction: column;

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
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(5, 150, 105, 0.15);
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
    &:hover {
      transform: none;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
    
    ${ProductCard}:hover & {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    height: 240px;
  }
`;

export const ProductBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(5, 150, 105, 0.9);
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const ProductInfo = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
  }
`;

export const ProductIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.75rem;
  }
`;

export const ProductDescription = styled.p`
  color: ${colors.neutral600};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const ProductFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  flex: 1;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: ${colors.neutral600};
    font-size: 0.9rem;

    svg {
      color: ${colors.success};
      font-size: 0.75rem;
      flex-shrink: 0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.5rem;
    
    li {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ProductCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  gap: 0.5rem;
  margin-top: auto;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(5, 150, 105, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: 0.75rem 1.25rem;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
    padding: 1rem 1.75rem;
  }
`;