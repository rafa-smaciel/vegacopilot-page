// src/modules/Contato/styles.js
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

export const ContactSection = styled.section`
  display: flex;
  gap: 3rem;
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
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
  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ContactInfo = styled.div`
  flex: 1;
  max-width: 450px;
  background-color: #1a1a2e;
  color: white;
  padding: 2.5rem;
  border-radius: 10px;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ContactDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
`;

export const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #e31937;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ContactText = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.25rem;
`;

export const ContactValue = styled.p`
  font-size: 1rem;
  color: white;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.whatsapp) return '#25D366';
    if (props.linkedin) return '#0077B5';
    if (props.instagram) return '#E1306C';
    if (props.youtube) return '#FF0000';
    return 'rgba(255, 255, 255, 0.1)';
  }};
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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

export const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d1fae5;
  border-left: 4px solid #34d399;
  color: #065f46;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;