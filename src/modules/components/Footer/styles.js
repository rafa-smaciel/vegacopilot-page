// src/modules/components/Footer/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryLight: '#10b981',
  secondary: '#064e3b',
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

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};
  position: relative;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    padding: 4rem 4rem 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 1rem 1.5rem;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  &:last-of-type {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  line-height: 1.4;

  &:hover {
    color: ${colors.primary};
    transform: translateX(2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

export const AppDownloads = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
  }
`;

export const AppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 160px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }

  svg, img {
    font-size: 1.5rem;
    color: ${colors.white};
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    span {
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1;
    }
    
    strong {
      font-size: 0.875rem;
      color: ${colors.white};
      font-weight: 600;
      line-height: 1.2;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 0.8rem;
    min-width: 140px;
    
    svg, img {
      font-size: 1.25rem;
    }
    
    div {
      span {
        font-size: 0.65rem;
      }
      
      strong {
        font-size: 0.8rem;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`;

export const CompanyLogo = styled.div`
  img {
    height: 40px;
    object-fit: contain;
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      height: 32px;
    }
  }
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    line-height: 1.3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    order: -1;
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(5, 150, 105, 0.3);
  }

  svg {
    font-size: 1.125rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    
    svg {
      font-size: 1rem;
    }
  }
`;

export const LegalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    line-height: 1.3;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const ScrollToTopButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);

  &:hover {
    background: ${colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(5, 150, 105, 0.4);
  }

  svg {
    font-size: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 45px;
    height: 45px;
    top: 15px;
    right: 15px;
    
    svg {
      font-size: 1.125rem;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    top: 30px;
    right: 30px;
  }
`;