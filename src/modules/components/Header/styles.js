// src/modules/components/Header/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Cores - copiadas localmente para evitar dependência
const colors = {
  primary: '#059669',
  primaryDark: '#047857',
  primaryLight: '#10b981',
  secondary: '#064e3b',
  neutral50: '#f8fafc',
  neutral100: '#f1f5f9',
  neutral200: '#e2e8f0',
  neutral400: '#94a3b8',
  neutral500: '#64748b',
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#1e293b',
  white: '#ffffff'
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  max-width: none;
  margin: 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 4rem;
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
    height: 40px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      height: 32px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
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
  padding: 0.5rem 0;
  color: ${colors.neutral600};
  text-decoration: none;
  font-weight: 400;
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.neutral200};
  padding: 0.5rem;
  min-width: 280px;
  margin-top: 0.5rem;
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.875rem 1rem;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      color: ${colors.neutral700};
      font-weight: 600;
      font-size: 0.95rem;
    }

    span {
      color: ${colors.neutral500};
      font-size: 0.8rem;
      line-height: 1.3;
    }
  }

  &:hover {
    background: rgba(5, 150, 105, 0.05);
    
    div strong {
      color: ${colors.primary};
    }
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const CountrySelector = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.neutral600};
  gap: 0.25rem;
  background: ${colors.neutral100};

  &:hover {
    background: ${colors.neutral200};
  }
`;

export const FlagIcon = styled.span`
  font-size: 1rem;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${colors.neutral600};
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    color: ${colors.primary};
    background: rgba(5, 150, 105, 0.05);
  }

  svg {
    font-size: 0.875rem;
  }
`;

export const DemoButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 2px solid ${colors.primary};

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
  }

  svg {
    font-size: 0.875rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: ${colors.neutral700};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    background: ${colors.neutral100};
    color: ${colors.primary};
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
  padding: 0.5rem 0;
  color: ${colors.neutral600};
  text-decoration: none;
  font-weight: 400;
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
  }
`;

export const MobileNavItem = styled(Link)`
  display: block;
  padding: 1rem 2rem;
  color: ${colors.neutral700};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  border-bottom: 1px solid ${colors.neutral100};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(5, 150, 105, 0.05);
    color: ${colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;