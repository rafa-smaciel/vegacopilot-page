// src/modules/components/Footer/index.js
import React from 'react';
import { 
  Container,
  Content,
  FooterSection,
  FooterTitle,
  FooterLinks,
  LogoSection,
  SocialIcons,
  BottomSection,
  Rights,
  ScrollToTopWrapper,
  ContactInfo,
  ContactItem
} from './styles';

// Ícones das redes sociais
import { 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaArrowUp
} from 'react-icons/fa';

// Componente ScrollToTop simples para o footer
const SimpleScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      aria-label="Voltar ao topo"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#e31937',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export const Footer = () => {
  // Links do footer organizados por seção
  const footerLinks = {
    solucoes: [
      { title: 'Vega Copilot', url: '/vega-copilot' },
      { title: 'Device Vega', url: '/device-vega' },
      { title: 'Lean Manufacturing', url: '/lean-manufacturing' },
      { title: 'Análise de Dados', url: '/analise-dados' },
      { title: 'Consultoria', url: '/consultoria' }
    ],
    industrias: [
      { title: 'Automotiva', url: '/automotiva' },
      { title: 'Metalurgia', url: '/metalurgia' },
      { title: 'Máquinas Pesadas', url: '/maquinas-pesadas' },
      { title: 'Manufatura', url: '/manufatura' },
      { title: 'Logística', url: '/logistica' }
    ],
    recursos: [
      { title: 'Blog', url: '/blog' },
      { title: 'Suporte Técnico', url: '/suporte' },
      { title: 'FAQ', url: '/faq' },
      { title: 'Documentação', url: '/documentacao' },
      { title: 'Webinars', url: '/webinars' }
    ],
    empresa: [
      { title: 'Sobre nós', url: '/sobre' },
      { title: 'Time', url: '/time' },
      { title: 'Parceiros', url: '/parceiros' },
      { title: 'Trabalhe Conosco', url: '/trabalhe-conosco' },
      { title: 'Contato', url: '/contato' }
    ]
  };

  return (
    <Container>
      <Content>
        <LogoSection>
          <img src="/vega-copilot-logo-light.svg" alt="Vega Copilot" />
          <p>Engenharia Inteligente para uma Produção Eficiente. Oferecemos a implementação completa para redução de custos industriais com as tecnologias mais atuais do mercado.</p>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>11-95009-1919</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>vega@vegarobotics.com.br</span>
            </ContactItem>
            <ContactItem>
              <FaGlobe />
              <span>www.vegarobotics.com.br</span>
            </ContactItem>
          </ContactInfo>
          <SocialIcons>
            <a href="https://linkedin.com/company/vega-robotics" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/vega.robotics" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/c/VegaRobotics" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </SocialIcons>
        </LogoSection>

        {Object.keys(footerLinks).map((section, index) => (
          <FooterSection key={index}>
            <FooterTitle>{section.charAt(0).toUpperCase() + section.slice(1)}</FooterTitle>
            <FooterLinks>
              {footerLinks[section].map((link, linkIndex) => (
                <a key={linkIndex} href={link.url}>
                  {link.title}
                </a>
              ))}
            </FooterLinks>
          </FooterSection>
        ))}
      </Content>

      <BottomSection>
        <Rights>
          &copy; {new Date().getFullYear()} VEGA Robotics®. Todos os direitos reservados.
        </Rights>
        <ScrollToTopWrapper>
          <SimpleScrollToTop />
        </ScrollToTopWrapper>
      </BottomSection>
    </Container>
  );
};