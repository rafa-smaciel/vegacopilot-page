// src/modules/Tecnologia/styles.js
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

export const TechGrid = styled.div`
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

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const TechImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const TechTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 1.5rem 1.5rem 0.5rem;
`;

export const TechDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  padding: 0 1.5rem 1.5rem;
`;

export const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f3f4f6;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const ProcessTitle = styled.h2`
  font-size: 2.25rem;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }
`;

export const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #e31937;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StepDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;