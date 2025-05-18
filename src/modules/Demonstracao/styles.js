// src/modules/Demonstracao/styles.js
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

export const DemoSection = styled.section`
  display: flex;
  gap: 3rem;
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (min-width: 1900px) {
    max-width: 1400px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  max-width: 700px;
  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const BenefitsContainer = styled.div`
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.75rem;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
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

export const Checkbox = styled.input`
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
  accent-color: #e31937;
`;

export const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
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

export const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d1fae5;
  border-left: 4px solid #34d399;
  color: #065f46;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

export const BenefitsTitle = styled.h2`
  font-size: 1.75rem;
  color: #1a1a2e;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BenefitItem = styled.div`
  display: flex;
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

export const BenefitIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  background-color: #e31937;
  color: white;
  border-radius: 50%;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const BenefitContent = styled.div`
  flex: 1;
`;

export const BenefitHeading = styled.h3`
  font-size: 1.125rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

export const BenefitText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
`;

export const DemoVideo = styled.section`
  padding: 5rem 2rem;
  background-color: #f3f4f6;
  
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
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const VideoDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;