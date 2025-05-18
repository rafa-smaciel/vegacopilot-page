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
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
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
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SolutionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f3f4f6;
  margin-bottom: 1.5rem;
  color: #e31937;
  
  svg {
    width: 35px;
    height: 35px;
  }
`;

export const SolutionTitle = styled.h2`
  font-size: 1.75rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
`;

export const SolutionDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  background-color: #f3f4f6;
  
  h2 {
    font-size: 2.25rem;
    color: #1a1a2e;
    margin-bottom: 1rem;
    max-width: 800px;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: #4b5563;
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
  color: white;
  background: #e31937;
  border: 2px solid #e31937;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b81424;
    border-color: #b81424;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(227, 25, 55, 0.3);
  }
`;