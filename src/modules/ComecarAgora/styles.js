// src/modules/ComecarAgora/styles.js
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

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f9fafb;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
  
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : 'calc(50% - 0.75rem)'};
  
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e31937;
    box-shadow: 0 0 0 2px rgba(227, 25, 55, 0.2);
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #e31937;
    box-shadow: 0 0 0 2px rgba(227, 25, 55, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #e31937;
    box-shadow: 0 0 0 2px rgba(227, 25, 55, 0.2);
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #e31937;
  border: 2px solid #e31937;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background: #b81424;
    border-color: #b81424;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(227, 25, 55, 0.3);
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 1.75rem;
  color: #1a1a2e;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background-color: #e31937;
  color: white;
  border-radius: 50%;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const InfoText = styled.div`
  h3 {
    font-size: 1.125rem;
    color: #1a1a2e;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.5;
  }
`;