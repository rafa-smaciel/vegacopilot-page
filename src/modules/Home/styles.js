// src/modules/Home/styles.js - Atualizado com novo design
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

const pulseAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Container principal
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Hero Section
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  background-image: url('/images/industrial-background.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 100%);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: #e31937;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid #e31937;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b81424;
    border-color: #b81424;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: transparent;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  span {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }
`;

export const ChevronIcon = styled.div`
  animation: ${pulseAnimation} 2s infinite ease-in-out;
  font-size: 1.5rem;
`;

// Section Styles (compartilhados)
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4b5563;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

// Solution Section
export const SolutionSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const SolutionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background-color: #e31937;
  color: white;
  font-size: 2rem;
`;

export const SolutionCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const SolutionCardDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4b5563;
`;

// Features Section
export const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9fafb;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  background-color: rgba(227, 25, 55, 0.1);
  color: #e31937;
  font-size: 1.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
`;

// Video Section
export const VideoSection = styled.section`
  padding: 5rem 2rem;
  background-color: #1a1a2e;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const VideoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const VideoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const VideoDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// Benefits Section
export const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const BenefitContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const BenefitInfo = styled.div`
  flex: 1;
`;

export const BenefitTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #e31937;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BenefitDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BenefitImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const BenefitMetrics = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const MetricItem = styled.div`
  flex: 1;
  min-width: 120px;
`;

export const MetricValue = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #e31937;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const MetricLabel = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  color: #4b5563;
`;

// Clients Section
export const ClientsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9fafb;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const ClientsTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const ClientsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ClientLogo = styled.img`
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

// Testimonial Section
export const TestimonialSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TestimonialImage = styled.img`
  width: 40%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

export const TestimonialContent = styled.div`
  flex: 1;
  padding: 3rem;
  color: white;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const TestimonialText = styled.blockquote`
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  
  &:before {
    content: '"';
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: -2rem;
    left: -1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const TestimonialAuthor = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const TestimonialCompany = styled.p`
  font-size: 1rem;
  color: #e31937;
`;

// CTA Section
export const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CTAButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;