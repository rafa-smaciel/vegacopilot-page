// src/modules/Home/containers/EcosystemSection/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral400: '#94a3b8',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  amber: '#f59e0b',
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const EcosystemContainer = styled.section`
  padding: 6rem 2rem;
  background: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const EcosystemContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1200px;
  }
`;

export const EcosystemTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const EcosystemSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.neutral600};
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    margin-bottom: 6rem;
  }
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 3rem;
    margin-bottom: 6rem;
  }
`;

export const PartnerCard = styled.div`
  background: ${colors.white};
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid ${colors.neutral200};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 300px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => {
      if (props.tier === 'platinum') return `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight})`;
      if (props.tier === 'gold') return `linear-gradient(90deg, ${colors.amber}, #fbbf24)`;
      return `linear-gradient(90deg, ${colors.neutral400}, ${colors.neutral500})`;
    }};
  }

  &:hover {
    transform: translateY(-12px);
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
    padding: 2rem 1.5rem;
    min-height: 250px;
    
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 4rem 3rem;
    min-height: 350px;
  }
`;

export const PartnerLogo = styled.img`
  height: 60px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  filter: grayscale(20%);

  ${PartnerCard}:hover & {
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50px;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 70px;
    margin-bottom: 2rem;
  }
`;

export const PartnerBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  
  background: ${props => {
    if (props.tier === 'platinum') return `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`;
    if (props.tier === 'gold') return `linear-gradient(135deg, ${colors.amber}, #fbbf24)`;
    return `linear-gradient(135deg, ${colors.neutral400}, ${colors.neutral500})`;
  }};
  
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const PartnerDescription = styled.p`
  font-size: 1rem;
  color: ${colors.neutral600};
  line-height: 1.6;
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.125rem;
  }
`;

export const EcosystemCTA = styled.div`
  background: linear-gradient(135deg, ${colors.neutral50}, ${colors.white});
  border: 2px solid ${colors.neutral200};
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors.secondary};
    margin-bottom: 1rem;
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.25rem;
    }

    @media (min-width: ${breakpoints.large}) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.125rem;
    color: ${colors.neutral600};
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    @media (min-width: ${breakpoints.large}) {
      font-size: 1.25rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 4rem 3rem;
  }
`;

export const CTAButton = styled(Link)`
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
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(5, 150, 105, 0.3);
  }

  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
    justify-content: center;
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 2.25rem;
    font-size: 1.125rem;
  }
`;