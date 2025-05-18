// src/modules/components/Header/styles.js
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  
  ${({ scrolled }) => scrolled ? css`
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    a {
      color: #1a1a2e;
    }
  ` : css`
    background-color: transparent;
    
    a {
      color: white;
    }
  `}
  
  @media (min-width: 1900px) {
    height: 100px;
    padding: 0 4rem;
  }
  
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  
  .MobileLogo {
    display: none;
  }
  
  @media (max-width: 850px) {
    width: 100%;
    justify-content: space-between;
    
    .WebLogo {
      display: none;
    }
    
    .MobileLogo {
      display: flex;
    }
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 40px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
    
    @media (min-width: 1900px) {
      height: 48px;
    }
    
    @media (max-width: 850px) {
      &.mobile {
        height: 34px;
        width: 34px;
      }
    }
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: currentColor;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 850px) {
    display: flex;
  }
`;

export const CenterSide = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 850px) {
    position: fixed;
    top: 0;
    left: ${({ menuOpen }) => menuOpen ? '0' : '-100%'};
    width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #1a1a2e;
    transition: left 0.3s ease;
    padding: 80px 2rem 2rem;
    overflow-y: auto;
    z-index: 999;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
    
    & > div {
      width: 100%;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 80px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  
  ${({ $isActive }) => $isActive && css`
    color: #e31937 !important;
    
    &::after {
      width: 100%;
    }
  `}
  
  &::after {
    content: '';
    position: absolute;
    bottom: 25px;
    left: 1rem;
    width: ${({ $isActive }) => $isActive ? '60%' : '0'};
    height: 3px;
    background-color: #e31937;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #e31937 !important;
    
    &::after {
      width: 60%;
    }
  }
  
  @media (min-width: 1900px) {
    height: 100px;
    font-size: 18px;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 850px) {
    height: auto;
    padding: 1.25rem 0;
    font-size: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    color: white !important;
    
    &::after {
      display: none;
    }
  }
`;

export const NavItemWithDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const DropdownIcon = styled(FaChevronDown)`
  margin-left: 0.5rem;
  font-size: 12px;
  transition: transform 0.3s ease;
  
  ${({ open }) => open && css`
    transform: rotate(180deg);
  `}
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 220px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  
  ${({ open }) => open && css`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
  
  @media (max-width: 850px) {
    position: relative;
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.05);
    margin-left: 1rem;
    border-radius: 0;
    max-height: ${({ open }) => open ? '500px' : '0'};
    overflow: hidden;
    transform: none;
    transition: max-height 0.3s ease;
  }
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  font-size: 15px;
  color: #1a1a2e !important;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  ${({ $isActive }) => $isActive && css`
    color: #e31937 !important;
    background-color: rgba(227, 25, 55, 0.05);
  `}
  
  &:hover {
    background-color: rgba(227, 25, 55, 0.05);
    color: #e31937 !important;
  }
  
  @media (max-width: 850px) {
    color: white !important;
    padding: 1rem 1.5rem;
    
    &:hover {
      background-color: rgba(227, 25, 55, 0.2);
    }
    
    ${({ $isActive }) => $isActive && css`
      background-color: rgba(227, 25, 55, 0.2);
    `}
  }
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;
  
  @media (max-width: 850px) {
    display: block;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 850px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #e31937;
  color: white !important;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid #e31937;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b81424;
    border-color: #b81424;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(227, 25, 55, 0.2);
  }
  
  @media (min-width: 1900px) {
    padding: 0.875rem 1.75rem;
    font-size: 16px;
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid currentColor;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 1900px) {
    padding: 0.875rem 1.75rem;
    font-size: 16px;
  }
`;