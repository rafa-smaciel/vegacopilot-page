// src/modules/Solucoes/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    max-width: 700px;
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const ContentSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const SolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f3f4f6;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const SolutionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e31937, #b81424);
  margin-bottom: 1.5rem;
  color: white;
  
  svg {
    width: 35px;
    height: 35px;
  }
`;

export const SolutionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const SolutionDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const SolutionFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: auto;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  
  svg {
    color: #10b981;
    margin-right: 0.5rem;
    width: 12px;
    height: 12px;
  }
`;

export const BusinessModelSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const BusinessModelTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const BusinessModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const ModelCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #f3f4f6;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    border-color: #e31937;
  }
`;

export const ModelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f3f4f6;
  margin-bottom: 1.5rem;
  color: #e31937;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ModelTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

export const ModelPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e31937;
  margin-bottom: 1rem;
`;

export const ModelDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ModelFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: auto;
`;

export const SolutionPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e31937;
  margin-bottom: 1rem;
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  
  h2 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    max-width: 800px;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 700px;
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    color: #1a1a2e;
    background: white;
    border: 2px solid white;
    
    &:hover {
      background: transparent;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
    }
  ` : `
    color: white;
    background: transparent;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: #1a1a2e;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
    }
  `}
`;