// src/modules/components/Header/index.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

// Logos - ajuste os caminhos conforme sua estrutura de assets
const logoLight = '/vega-copilot-logo-light.svg';
const logoDark = '/vega-copilot-logo-dark.svg';
const logoMobile = '/vega-icon.svg';

export const Header = () => {
  const menuRef = useRef();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  
  // Links principais de navegação atualizados
  const navLinks = [
    { title: 'Home', path: '/' },
    { 
      title: 'Soluções', 
      path: '/solucoes',
      dropdown: true,
      children: [
        { title: 'Vega Copilot (AIoT)', path: '/solucoes#vega-copilot' },
        { title: 'Device Vega', path: '/solucoes#device-vega' },
        { title: 'Projetos de Melhoria', path: '/solucoes#projetos-melhoria' },
      ]
    },
    { title: 'Tecnologia', path: '/tecnologia' },
    { title: 'Casos de Uso', path: '/casos-de-uso' },
    { title: 'Empresa', path: '/empresa' },
    { title: 'Contato', path: '/contato' },
  ];

  // Detecta scroll para mudar aparência do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha menu ao mudar de rota
  useEffect(() => {
    setMenuOpen(false);
    setProductDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  
  const toggleProductDropdown = (e) => {
    e.preventDefault();
    setProductDropdownOpen(prev => !prev);
  };

  return (
    <>
      {menuOpen && <S.Overlay onClick={toggleMenu} />}
      <S.Container scrolled={isScrolled}>
        <S.LeftSide>
          <S.LogoLink to="/" className="WebLogo">
            <img src={isScrolled ? logoDark : logoLight} alt="Vega Robotics" />
          </S.LogoLink>
          <S.LogoLink to="/" className="MobileLogo">
            <img src={logoMobile} alt="Vega Robotics" />
          </S.LogoLink>
          <S.MenuHamburger onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </S.MenuHamburger>
        </S.LeftSide>

        <S.CenterSide menuOpen={menuOpen} ref={menuRef}>
          <S.CloseButton onClick={toggleMenu}>&times;</S.CloseButton>
          
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <S.NavItemWithDropdown>
                  <S.NavLink 
                    to={link.path} 
                    $isActive={pathname === link.path || pathname.includes('/solucoes')}
                    onClick={toggleProductDropdown}
                  >
                    {link.title}
                    <S.DropdownIcon open={productDropdownOpen} />
                  </S.NavLink>
                  <S.DropdownMenu open={productDropdownOpen}>
                    {link.children.map((child, childIndex) => (
                      <S.DropdownItem 
                        key={childIndex} 
                        to={child.path}
                        $isActive={pathname === child.path}
                        onClick={() => setProductDropdownOpen(false)}
                      >
                        {child.title}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownMenu>
                </S.NavItemWithDropdown>
              ) : (
                <S.NavLink 
                  to={link.path} 
                  $isActive={pathname === link.path}
                >
                  {link.title}
                </S.NavLink>
              )}
            </div>
          ))}
        </S.CenterSide>

        <S.RightSide>
          <S.ButtonContainer>
            <S.SecondaryButton to="/demonstracao">
              Solicite um Piloto
            </S.SecondaryButton>
            <S.PrimaryButton to="/comecar-agora">
              Comece Agora
            </S.PrimaryButton>
          </S.ButtonContainer>
        </S.RightSide>
      </S.Container>
    </>
  );
};

export default Header;