// src/modules/Home/globalStyles.js
import styled from 'styled-components';

// Container principal da página Home
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`;

// Cores baseadas no tema verde sustentável da Vega
export const colors = {
  // Primary - Green Ecosystem (inspirado na Tractian mas verde)
  primary: '#059669',        // Emerald 600 - Crescimento sustentável
  primaryDark: '#047857',    // Emerald 700 - Estabilidade
  primaryLight: '#10b981',   // Emerald 500 - Energia
  
  // Secondary - Deep Forest
  secondary: '#064e3b',      // Emerald 900 - Autoridade ambiental
  secondaryLight: '#065f46', // Emerald 800
  
  // Accent - Energy Orange (sustentável)
  accent: '#f59e0b',         // Amber 500 - Energia renovável
  accentLight: '#fbbf24',    // Amber 400
  
  // Success & Growth
  success: '#22c55e',        // Green 500 - Sucesso sustentável
  
  // Neutrals - Clean & Pure
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
  
  white: '#ffffff',
  black: '#0f172a'
};

// Breakpoints responsivos
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
  large: '1900px'
};

// Container padrão para seções
export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1400px;
    padding: 0 4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

// Section wrapper padrão
export const Section = styled.section`
  padding: 6rem 0;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 4rem 0;
  }
  
  @media (min-width: ${breakpoints.large}) {
    padding: 8rem 0;
  }
`;

// Títulos padrão
export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${colors.neutral600};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.375rem;
    max-width: 800px;
  }
`;

// Grid layouts padrão
export const GridLayout = styled.div`
  display: grid;
  gap: 2rem;
  
  &.two-columns {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
  
  &.three-columns {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
  
  &.four-columns {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    gap: 3rem;
  }
`;

// Cards padrão
export const Card = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid ${colors.neutral200};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(5, 150, 105, 0.15);
    border-color: ${colors.primary};
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2.5rem;
  }
`;

// Botões padrão
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid;
  gap: 0.5rem;
  font-family: inherit;
  
  &.primary {
    background: ${colors.primary};
    color: ${colors.white};
    border-color: ${colors.primary};
    
    &:hover {
      background: ${colors.primaryDark};
      border-color: ${colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(5, 150, 105, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${colors.secondary};
    border-color: ${colors.neutral200};
    
    &:hover {
      border-color: ${colors.primary};
      color: ${colors.primary};
      background: rgba(5, 150, 105, 0.05);
      transform: translateY(-2px);
    }
  }
  
  &.outline {
    background: transparent;
    color: ${colors.primary};
    border-color: ${colors.primary};
    
    &:hover {
      background: ${colors.primary};
      color: ${colors.white};
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 1.125rem 2.25rem;
    font-size: 1.125rem;
  }
`;

// Badge/Tag padrão
export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.1);
  border: 1px solid rgba(5, 150, 105, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }

  svg {
    color: ${colors.primary};
    animation: float 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }
`;

// Backgrounds padrão
export const GradientBackground = styled.div`
  &.primary {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  }
  
  &.secondary {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.primaryDark});
  }
  
  &.light {
    background: ${colors.neutral50};
  }
  
  &.white {
    background: ${colors.white};
  }
  
  &.dark {
    background: linear-gradient(135deg, ${colors.neutral800}, ${colors.neutral900});
    color: ${colors.white};
  }
`;

// Utility classes para flexbox
export const FlexContainer = styled.div`
  display: flex;
  
  &.center {
    align-items: center;
    justify-content: center;
  }
  
  &.between {
    align-items: center;
    justify-content: space-between;
  }
  
  &.column {
    flex-direction: column;
  }
  
  &.wrap {
    flex-wrap: wrap;
  }
  
  &.gap-sm {
    gap: 1rem;
  }
  
  &.gap-md {
    gap: 2rem;
  }
  
  &.gap-lg {
    gap: 3rem;
  }
`;

// Export dos estilos globais já feito acima via export const