// src/modules/components/Header/index.js
import React, { useState, useEffect } from 'react';
import logoheader from '../../../../src/assets/logoheader.png';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownMenu,
  DropdownItem,
  AuthButtons,
  LoginButton,
  DemoButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavItem,
  CountrySelector,
  FlagIcon,
  BlogLink
} from './styles';

import { 
  FaChevronDown,
  FaBars,
  FaTimes,
  FaRocket,
  FaSignInAlt
} from 'react-icons/fa';

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para efeito do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dados de navegação
  const navigation = {
    produtos: {
      title: 'Produtos',
      items: [
        { name: 'Vega Copilot', description: 'IA Embarcada para Indústria', path: '/solucoes#vega-copilot' },
        { name: 'Device Vega', description: 'Hardware Industrial Robusto', path: '/solucoes#device-vega' },
        { name: 'Energy Efficiency', description: 'Sustentabilidade Inteligente', path: '/solucoes#energy-efficiency' }
      ]
    },
    industrias: {
      title: 'Indústrias',
      items: [
        { name: 'Automotiva', path: '/industrias/automotiva' },
        { name: 'Metalurgia', path: '/industrias/metalurgia' },
        { name: 'Máquinas Pesadas', path: '/industrias/maquinas-pesadas' },
        { name: 'Petróleo e Gás', path: '/industrias/petroleo-gas' },
        { name: 'Alimentos e Bebidas', path: '/industrias/alimentos-bebidas' },
        { name: 'Ver todas as indústrias', path: '/industrias' }
      ]
    },
    materiais: {
      title: 'Materiais',
      items: [
        { name: 'Blog', path: '/blog' },
        { name: 'Casos de Uso', path: '/casos-de-uso' },
        { name: 'Calculadora ROI', path: '/recursos/calculadora-roi' },
        { name: 'Academy', path: '/recursos/academy' },
        { name: 'Webinars', path: '/recursos/webinars' },
        { name: 'Ver todos os recursos', path: '/recursos' }
      ]
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo to="/">
          <img 
            src={logoheader}
            alt="Vega Robotics" 
          />
        </Logo>

        <Navigation>
          {/* Produtos */}
          <NavItem>
            <NavLink 
              onClick={(e) => handleDropdownToggle('produtos', e)}
              className={activeDropdown === 'produtos' ? 'active' : ''}
            >
              Produtos
              <FaChevronDown className={activeDropdown === 'produtos' ? 'rotated' : ''} />
            </NavLink>
            <NavDropdown active={activeDropdown === 'produtos'}>
              <DropdownMenu>
                {navigation.produtos.items.map((item, index) => (
                  <DropdownItem key={index} to={item.path}>
                    <div>
                      <strong>{item.name}</strong>
                      {item.description && <span>{item.description}</span>}
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </NavDropdown>
          </NavItem>

          {/* Indústrias */}
          <NavItem>
            <NavLink 
              onClick={(e) => handleDropdownToggle('industrias', e)}
              className={activeDropdown === 'industrias' ? 'active' : ''}
            >
              Indústrias
              <FaChevronDown className={activeDropdown === 'industrias' ? 'rotated' : ''} />
            </NavLink>
            <NavDropdown active={activeDropdown === 'industrias'}>
              <DropdownMenu>
                {navigation.industrias.items.map((item, index) => (
                  <DropdownItem key={index} to={item.path}>
                    <div>
                      <strong>{item.name}</strong>
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </NavDropdown>
          </NavItem>

          {/* Materiais */}
          <NavItem>
            <NavLink 
              onClick={(e) => handleDropdownToggle('materiais', e)}
              className={activeDropdown === 'materiais' ? 'active' : ''}
            >
              Materiais
              <FaChevronDown className={activeDropdown === 'materiais' ? 'rotated' : ''} />
            </NavLink>
            <NavDropdown active={activeDropdown === 'materiais'}>
              <DropdownMenu>
                {navigation.materiais.items.map((item, index) => (
                  <DropdownItem key={index} to={item.path}>
                    <div>
                      <strong>{item.name}</strong>
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </NavDropdown>
          </NavItem>

          {/* Blog */}
          <NavItem>
            <BlogLink to="/blog">
              Blog
            </BlogLink>
          </NavItem>
        </Navigation>

        <AuthButtons>
          <CountrySelector>
            <FlagIcon>🇧🇷</FlagIcon>
            BR
            <FaChevronDown style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }} />
          </CountrySelector>
          
          <LoginButton to="/login">
            <FaSignInAlt />
            Log in
          </LoginButton>
          
          <DemoButton to="/demonstracao">
            <FaRocket />
            Demonstração
          </DemoButton>
        </AuthButtons>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContent>

      {/* Menu Mobile */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavItem to="/solucoes" onClick={toggleMobileMenu}>
          Produtos
        </MobileNavItem>
        <MobileNavItem to="/industrias" onClick={toggleMobileMenu}>
          Indústrias
        </MobileNavItem>
        <MobileNavItem to="/recursos" onClick={toggleMobileMenu}>
          Materiais
        </MobileNavItem>
        <MobileNavItem to="/blog" onClick={toggleMobileMenu}>
          Blog
        </MobileNavItem>
        <MobileNavItem to="/casos-de-uso" onClick={toggleMobileMenu}>
          Casos de Uso
        </MobileNavItem>
        <MobileNavItem to="/empresa" onClick={toggleMobileMenu}>
          Empresa
        </MobileNavItem>
        <MobileNavItem to="/contato" onClick={toggleMobileMenu}>
          Contato
        </MobileNavItem>
        
        <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0', marginTop: '1rem' }}>
          <LoginButton to="/login" style={{ width: '100%', marginBottom: '0.5rem' }}>
            <FaSignInAlt />
            Log in
          </LoginButton>
          <DemoButton to="/demonstracao" style={{ width: '100%' }}>
            <FaRocket />
            Demonstração
          </DemoButton>
        </div>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;