// src/modules/Home/containers/CaseStudySection/styles.js
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
  white: '#ffffff'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const CaseStudyContainer = styled.section`
  padding: 6rem 2rem;
  background: ${colors.neutral50};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const CaseStudyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.025em;
  line-height: 1.1;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 4rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  border-bottom: 2px solid ${colors.neutral200};

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  opacity: ${props => props.active ? 1 : 0.6};
  transform: ${props => props.active ? 'translateY(-2px)' : 'none'};

  img {
    height: 40px;
    object-fit: contain;
    filter: ${props => props.active ? 'none' : 'grayscale(100%)'};
    transition: filter 0.3s ease;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    
    img {
      filter: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    
    img {
      height: 30px;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.25rem 2rem;
    
    img {
      height: 50px;
    }
  }
`;

export const TabUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  height: 4px;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 2px;
  transition: all 0.3s ease;
  width: calc(100% / ${props => props.totalTabs});
  left: calc(${props => props.activeIndex} * (100% / ${props => props.totalTabs}));
`;

export const CaseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: ${colors.white};
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 5rem;
    padding: 4rem;
  }
`;

export const CaseInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CaseTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.secondary};
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const CaseDescription = styled.p`
  font-size: 1rem;
  color: ${colors.neutral600};
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.125rem;
  }
`;

export const CaseQuote = styled.blockquote`
  font-size: 1.125rem;
  font-style: italic;
  color: ${colors.neutral700};
  line-height: 1.6;
  margin: 2rem 0;
  padding-left: 1.5rem;
  border-left: 4px solid ${colors.primary};
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: ${colors.primary};
    position: absolute;
    left: -0.5rem;
    top: -1rem;
    font-family: Georgia, serif;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin: 1.5rem 0;
    padding-left: 1rem;

    &::before {
      font-size: 2.5rem;
      top: -0.75rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
  }
`;

export const CaseAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 1.5rem 0;
  }
`;

export const AuthorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.primary};

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 0.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`;

export const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: ${colors.neutral600};
  margin-bottom: 0.125rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

export const AuthorCompany = styled.p`
  font-size: 0.9rem;
  color: ${colors.primary};
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

export const CaseLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    color: ${colors.secondary};
    transform: translateX(4px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`;

export const CaseVisual = styled.div`
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    order: -1;
  }
`;

export const CaseImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 350px;
  }
`;

export const CaseMetrics = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

export const MetricCard = styled.div`
  flex: 1;
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid ${colors.primary};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
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
  font-size: 0.875rem;
  color: ${colors.neutral600};
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.95rem;
  }
`;