// src/modules/Home/styles.js
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Seção Hero (Banner principal)
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.85)),
    #1a1a2e;
  background-size: cover;
  color: white;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
  animation: ${fadeIn} 1s ease-in-out;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #e31937;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #e31937;
  
  &:hover {
    background-color: #b81424;
    border-color: #b81424;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(227, 25, 55, 0.3);
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
`;

// Seção de empresas parceiras
export const TrustedBySection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const TrustedByTitle = styled.h2`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const CompanyLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const CompanyLogo = styled.img`
  height: 60px;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

// Seção de características
export const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9fafb;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const FeaturesSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #e31937;
  margin-bottom: 1.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
`;

// Seção de benefícios
export const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const BenefitsSectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BenefitsSectionSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

export const BenefitsStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const BenefitStatCard = styled.div`
  width: 250px;
  
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

export const BenefitStatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #e31937;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const BenefitStatLabel = styled.div`
  font-size: 1rem;
  color: white;
  opacity: 0.9;
`;

// Seção de Tecnologias
export const TechSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const TechSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TechSectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

export const TechCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TechCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
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

export const TechCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TechCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 1.5rem 1.5rem 0.5rem;
`;

export const TechCardDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  padding: 0 1.5rem 1.5rem;
`;

// Seção CTA
export const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #e31937 0%, #b81424 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: white;
  color: #e31937;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
  
  &:hover {
    background-color: transparent;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;