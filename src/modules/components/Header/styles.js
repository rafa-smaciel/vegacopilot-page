// src/modules/components/Header/styles.js - VIXEM COLOR PALETTE
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// PALETA DE CORES VIXEM - Baseada no logo VIXEM
const colors = {
  // Cores principais do logo VIXEM - Azul mais escuro
  primary: '#1E40AF', // Azul escuro principal do logo VIXEM
  primaryDark: '#1E3A8A', // Azul ainda mais escuro
  primaryLight: '#3B82F6', // Azul mais claro para contraste
  
  // Cores secundárias técnicas
  secondary: '#1A1A1A', // Preto/cinza escuro para contraste
  accent: '#C41E3A', // Vermelho como cor de destaque
  
  // Tons neutros
  neutral50: '#F8FAFC',
  neutral100: '#F1F5F9',
  neutral200: '#E2E8F0',
  neutral300: '#CBD5E0',
  neutral400: '#94A3B8',
  neutral500: '#64748B',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1E293B',
  
  // Cores funcionais
  success: '#10B981', // Verde para status positivo
  warning: '#F59E0B', // Amarelo para alertas
  info: '#3B82F6', // Azul para informações
  
  // Cores base
  white: '#FFFFFF',
  black: '#0F172A'
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  large: '1900px'
};

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.neutral200};
  transition: all 0.3s ease;
  box-shadow: ${props => props.isScrolled ? 
    '0 4px 20px rgba(15, 22, 41, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)' : 
    '0 1px 3px rgba(0, 0, 0, 0.05)'
  };
  backdrop-filter: blur(10px);
`;

export const HeaderContent = styled.div`
  max-width: none;
  margin: 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px; /* Ligeiramente maior para dar mais presença */
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 4rem;
    height: 72px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
    height: 60px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;

  img {
    height: 44px; /* Ligeiramente maior */
    object-fit: contain;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      height: 36px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem; /* Mais espaço entre itens */
  margin-left: 2rem;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0; /* Mais padding vertical */
  color: ${colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover, &.active {
    color: ${colors.primary};
  }

  &:hover::after, &.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${colors.primary};
    border-radius: 1px;
  }

  svg {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
    
    &.rotated {
      transform: rotate(180deg);
    }
  }
`;

export const NavDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  opacity: ${props => props.active ? 1 : 0};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  transform: translateY(${props => props.active ? '0' : '-10px'});
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const DropdownMenu = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(15, 22, 41, 0.1);
  border: 1px solid rgba(15, 22, 41, 0.08);
  padding: 0.75rem;
  min-width: 300px; /* Ligeiramente maior */
  margin-top: 0.75rem;
  backdrop-filter: blur(10px);
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 1rem 1.25rem; /* Mais padding */
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .item-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      svg {
        color: ${colors.primary};
        font-size: 0.9rem;
      }
    }

    strong {
      color: ${colors.textPrimary};
      font-weight: 600;
      font-size: 0.95rem;
    }

    span {
      color: ${colors.textMuted};
      font-size: 0.8rem;
      line-height: 1.4;
    }
  }

  &:hover {
    background: rgba(15, 22, 41, 0.04);
    transform: translateX(2px);
    
    div strong {
      color: ${colors.primary};
    }
    
    div .item-header svg {
      color: ${colors.primary};
      transform: scale(1.05);
    }
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Mais espaço */

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const CountrySelector = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.9rem; /* Mais padding */
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.neutral600};
  gap: 0.4rem;
  background: ${colors.neutral50};
  border: 1px solid ${colors.neutral200};

  &:hover {
    background: ${colors.neutral100};
    border-color: rgba(30, 64, 175, 0.2);
    color: ${colors.primary};
  }
`;

export const FlagIcon = styled.span`
  font-size: 1.1rem;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem; /* Mais padding */
  color: ${colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    color: ${colors.primary};
    background: rgba(15, 22, 41, 0.04);
    border-color: rgba(15, 22, 41, 0.08);
    transform: translateY(-1px);
  }

  svg {
    font-size: 0.875rem;
  }
`;

// BOTÃO PRIMÁRIO (DEMO) - Clean com detalhe vermelho
export const DemoButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.4rem;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};
  position: relative;
  overflow: hidden;

  /* Detalhe vermelho sutil */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background: ${colors.accent};
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(30, 64, 175, 0.2);
    
    &::after {
      transform: translateX(0);
    }
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 0.875rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px; /* Maior */
  height: 44px;
  background: none;
  border: 1px solid ${colors.neutral200};
  color: ${colors.neutral700};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    background: rgba(30, 64, 175, 0.05);
    color: ${colors.primary};
    border-color: rgba(30, 64, 175, 0.2);
  }

  svg {
    font-size: 1.125rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.neutral200};
  box-shadow: 
    0 20px 40px rgba(30, 64, 175, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-20px'});
  transition: all 0.3s ease;
  z-index: 999;
  max-height: ${props => props.isOpen ? '80vh' : '0'};
  overflow-y: auto;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const BlogLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${colors.primary};
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${colors.primary};
    border-radius: 1px;
  }
`;

export const MobileNavItem = styled(Link)`
  display: block;
  padding: 1.2rem 2rem; /* Mais padding */
  color: ${colors.textPrimary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  border-bottom: 1px solid ${colors.neutral100};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(15, 22, 41, 0.04);
    color: ${colors.primary};
    padding-left: 2.2rem;
  }

  &:hover::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;