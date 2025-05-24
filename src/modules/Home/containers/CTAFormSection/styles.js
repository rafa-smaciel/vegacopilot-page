// src/modules/Home/containers/CTAFormSection/styles.js
import styled from 'styled-components';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral300: '#cbd5e1',
  neutral400: '#94a3b8',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1e293b',
  neutral900: '#0f172a',
  success: '#22c55e',
  white: '#ffffff',
  red: '#ef4444'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const CTAContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.neutral800} 0%, ${colors.neutral900} 100%);
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 4rem;
  }
`;

export const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    gap: 6rem;
  }
`;

export const CTAText = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
  }
`;

export const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${colors.white};
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 1.1;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

export const CTASubtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
  }
`;

export const CTAForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  font-size: 1rem;
  font-family: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.2);
  }

  &:invalid {
    border-color: ${colors.red};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 1.75rem;
    font-size: 1.125rem;
  }
`;

export const FormSelect = styled.select`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  font-size: 1rem;
  font-family: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.2);
  }

  option {
    background: ${colors.neutral800};
    color: ${colors.white};
    padding: 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 1.75rem;
    font-size: 1.125rem;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  font-size: 1rem;
  font-family: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    min-height: 80px;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 1.75rem;
    font-size: 1.125rem;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  border: 2px solid ${colors.primary};

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(5, 150, 105, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.375rem 2.25rem;
    font-size: 1.25rem;
  }
`;

export const CTAVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`;

export const CTAImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    border-radius: 12px;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 600px;
  }
`;

export const DeviceOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 15px;
    left: 15px;
    right: 15px;
    padding: 0.75rem;
  }
`;

export const DeviceInfo = styled.div`
  text-align: center;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.white};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }

  .status {
    font-size: 0.8rem;
    color: ${colors.success};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    h4 { font-size: 0.9rem; }
    p { font-size: 0.8rem; }
    .status { font-size: 0.75rem; }
  }
`;

export const TechBadges = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    top: 15px;
    right: 15px;
    gap: 0.25rem;
  }
`;

export const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.9);
  color: ${colors.white};
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
    
    svg {
      font-size: 0.6rem;
    }
  }
`;