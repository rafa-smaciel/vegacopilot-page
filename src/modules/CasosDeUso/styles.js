// src/modules/CasosDeUso/styles.js
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

export const CasesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 5rem 2rem;
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
    gap: 3rem;
  }
`;

export const CaseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CaseHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

export const CaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e31937;
  color: white;
  margin-right: 1rem;
  
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const CaseInfo = styled.div`
  flex: 1;
`;

export const CaseTitle = styled.h2`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 0.25rem;
`;

export const CaseIndustry = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const CaseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  flex: 1;
`;

export const CaseDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const CaseResults = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ResultValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e31937;
  margin-bottom: 0.25rem;
`;

export const ResultLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  max-width: 100px;
  text-align: center;
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  background-color: #f3f4f6;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const CTATitle = styled.h2`
  font-size: 2.25rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
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