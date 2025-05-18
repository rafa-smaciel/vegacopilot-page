// src/modules/components/Footer/styles.js
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #1a1a2e;
  color: #f9fafb;
  padding: 4rem 0 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  img {
    width: 180px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #d1d5db;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1900px) {
    max-width: 400px;
    
    img {
      width: 200px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d1d5db;
  font-size: 14px;
  
  svg {
    color: #e31937;
  }
  
  @media (min-width: 1900px) {
    font-size: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    svg {
      width: 18px;
      height: 18px;
      fill: #e5e7eb;
    }

    &:hover {
      background-color: #e31937;
      transform: translateY(-2px);
      
      svg {
        fill: #ffffff;
      }
    }
  }

  @media (min-width: 1900px) {
    a {
      width: 42px;
      height: 42px;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 160px;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1900px) {
    min-width: 180px;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #f9fafb;

  @media (min-width: 1900px) {
    font-size: 20px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 14px;
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #e31937;
    }
  }

  @media (min-width: 1900px) {
    a {
      font-size: 16px;
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.2);

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Rights = styled.p`
  font-size: 14px;
  color: #9ca3af;

  @media (min-width: 1900px) {
    font-size: 16px;
  }
`;

export const ScrollToTopWrapper = styled.div`
  display: flex;
  align-items: center;
`;