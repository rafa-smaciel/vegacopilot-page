// src/modules/Home/containers/TestimonialsSection/styles.js
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
  neutral800: '#1e293b',
  white: '#ffffff',
  amber: '#f59e0b'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const TestimonialsContainer = styled.section`
  padding: 6rem 2rem;
  background: ${colors.neutral50};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const TestimonialsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    max-width: 900px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
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

export const CarouselContainer = styled.div`
  position: relative;
  background: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid ${colors.neutral200};
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
  background: ${colors.white};
  border: 2px solid ${colors.neutral200};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${colors.neutral600};
  font-size: 1.25rem;
  pointer-events: all;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(5, 150, 105, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TestimonialCard = styled.div`
  padding: 3rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    min-height: 350px;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 4rem;
    min-height: 450px;
  }
`;

export const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.25rem;
    
    &.filled {
      color: ${colors.amber};
    }
    
    &.empty {
      color: ${colors.neutral200};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
    
    svg {
      font-size: 1rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 2rem;
    
    svg {
      font-size: 1.5rem;
    }
  }
`;

export const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  color: ${colors.neutral700};
  line-height: 1.6;
  margin: 0 0 2rem 0;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  justify-content: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
`;

export const AuthorAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.primary};
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: ${breakpoints.large}) {
    width: 100px;
    height: 100px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }
`;

export const AuthorName = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 0.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
  }
`;

export const AuthorRole = styled.p`
  font-size: 0.95rem;
  color: ${colors.neutral600};
  margin-bottom: 0.125rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const AuthorCompany = styled.p`
  font-size: 0.95rem;
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

export const CompanyBadge = styled.span`
  display: inline-block;
  background: ${colors.neutral100};
  color: ${colors.neutral600};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: ${colors.neutral50};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? colors.primary : colors.neutral400};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? colors.primary : colors.neutral500};
    transform: scale(1.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 10px;
    height: 10px;
  }
`;