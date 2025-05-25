// src/modules/components/Footer/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterSection,
  SectionTitle,
  FooterLink,
  AppDownloads,
  AppButton,
  FooterBottom,
  CompanyInfo,
  CompanyLogo,
  CompanyDetails,
  SocialMedia,
  SocialLink,
  LegalInfo,
  ScrollToTopButton
} from './styles';

import { 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaTwitter,
  FaArrowUp,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          {/* Monitoramento de Condição */}
          <FooterSection>
            <SectionTitle>MONITORAMENTO DE CONDIÇÃO</SectionTitle>
            <FooterLink to="/solucoes">Visão Geral</FooterLink>
            <FooterLink to="/solucoes/insights-diagnosticos">Insights e Diagnósticos</FooterLink>
            <FooterLink to="/solucoes/ativos-monitorados">Ativos Monitorados</FooterLink>
            <FooterLink to="/solucoes/analise-vibracao">Análise de Vibração</FooterLink>
            <FooterLink to="/solucoes/supervisorio">Supervisório</FooterLink>
          </FooterSection>

          {/* Gestão de Energia */}
          <FooterSection>
            <SectionTitle>GESTÃO DE ENERGIA</SectionTitle>
            <FooterLink to="/energia">Visão Geral</FooterLink>
            <FooterLink to="/energia/asset-performance">Asset Performance Management</FooterLink>
            <FooterLink to="/energia/relatorios">Relatórios de Energia</FooterLink>
            <FooterLink to="/energia/monitoramento-processos">Monitoramento de Processos</FooterLink>
            <FooterLink to="/energia/eficiencia-energetica">Eficiência Energética</FooterLink>
            <FooterLink to="/energia/supervisorio">Supervisório</FooterLink>
          </FooterSection>

          {/* Gestão de Ativos */}
          <FooterSection>
            <SectionTitle>GESTÃO DE ATIVOS</SectionTitle>
            <FooterLink to="/ativos">Visão Geral</FooterLink>
            <FooterLink to="/ativos/planejamento-programacao">Planejamento e Programação</FooterLink>
            <FooterLink to="/ativos/dashboard-indicadores">Dashboard Indicadores</FooterLink>
            <FooterLink to="/ativos/manutencao">Manutenção</FooterLink>
            <FooterLink to="/ativos/geolocalizacao">Geolocalização</FooterLink>
            <FooterLink to="/ativos/gestao-ordens-servico">Gestão de Ordens de Serviço</FooterLink>
            <FooterLink to="/ativos/controle-estoque">Controle de Estoque</FooterLink>
            <FooterLink to="/ativos/procedimentos-automaticos">Procedimentos Automáticos</FooterLink>
            <FooterLink to="/ativos/aplicativo-movel">Aplicativo Móvel</FooterLink>
          </FooterSection>

          {/* Indústrias */}
          <FooterSection>
            <SectionTitle>INDÚSTRIAS</SectionTitle>
            <FooterLink to="/industrias/alimentos-bebidas">Alimentícia e Bebidas</FooterLink>
            <FooterLink to="/industrias/mineracao">Mineração</FooterLink>
            <FooterLink to="/industrias/usinas-agricola">Usinas e Agrícola</FooterLink>
            <FooterLink to="/industrias/automotiva">Automotiva</FooterLink>
            <FooterLink to="/industrias/quimica">Química</FooterLink>
          </FooterSection>

          {/* Recursos */}
          <FooterSection>
            <SectionTitle>RECURSOS</SectionTitle>
            <FooterLink to="/recursos/convenca-chefe">Convença seu Chefe</FooterLink>
            <FooterLink to="/recursos/calculadora-roi">Calculadora ROI</FooterLink>
            <FooterLink to="/recursos/academy">Academy</FooterLink>
            <FooterLink to="/recursos/releases">Releases</FooterLink>
            <FooterLink to="/recursos">Ver todos os Recursos</FooterLink>
          </FooterSection>
        </FooterTop>

        {/* Suporte e Sobre */}
        <FooterTop>
          <FooterSection>
            <SectionTitle>SUPORTE</SectionTitle>
            <FooterLink to="/contato">Fale Conosco</FooterLink>
            <FooterLink to="/suporte/central-ajuda">Central de Ajuda</FooterLink>
            <FooterLink to="/legal/politicas">Políticas</FooterLink>
            <FooterLink to="/legal/termos">Termos de Uso</FooterLink>
            <FooterLink to="/seguranca">Trust Center</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>SOBRE</SectionTitle>
            <FooterLink to="/empresa">Sobre Nós</FooterLink>
            <FooterLink to="/empresa/carreiras">Carreiras</FooterLink>
            <FooterLink to="/casos-de-uso">Estudos de Caso</FooterLink>
            <FooterLink to="/empresa/imprensa">Imprensa</FooterLink>
            <FooterLink to="/empresa/comunidade">Comunidade</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>BAIXE NOSSO APP</SectionTitle>
            <AppDownloads>
              <AppButton href="#" target="_blank" rel="noopener noreferrer">
                <FaApple />
                <div>
                  <span>Disponível na</span>
                  <strong>App Store</strong>
                </div>
              </AppButton>
              <AppButton href="#" target="_blank" rel="noopener noreferrer">
                <FaGooglePlay />
                <div>
                  <span>Disponível no</span>
                  <strong>Google Play</strong>
                </div>
              </AppButton>
              <AppButton href="#" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://via.placeholder.com/24x24?text=SAP" 
                  alt="SAP Store" 
                  style={{ width: '24px', height: '24px' }}
                />
                <div>
                  <span>Disponível na</span>
                  <strong>SAP Store</strong>
                </div>
              </AppButton>
            </AppDownloads>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <CompanyInfo>
            <CompanyLogo>
              <img 
                src="https://via.placeholder.com/150x40?text=VEGA+ROBOTICS&color=ffffff&background=059669" 
                alt="Vega Robotics" 
              />
            </CompanyLogo>
            <CompanyDetails>
              <p>© VEGA ROBOTICS TECNOLOGIA E INOVAÇÃO LTDA</p>
              <p>CNPJ: 00.000.000/0001-00</p>
            </CompanyDetails>
          </CompanyInfo>

          <SocialMedia>
            <SocialLink href="https://linkedin.com/company/vegarobotics" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://instagram.com/vegarobotics" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://youtube.com/@vegarobotics" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="https://tiktok.com/@vegarobotics" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </SocialLink>
            <SocialLink href="https://twitter.com/vegarobotics" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialMedia>

          <LegalInfo>
            <p>Avenida Paulista, 1000 • São Paulo • SP, 01310-000</p>
            <FooterLink to="/legal/privacidade">Suas escolhas de privacidade</FooterLink>
          </LegalInfo>
        </FooterBottom>

        <ScrollToTopButton onClick={scrollToTop} aria-label="Voltar ao topo">
          <FaArrowUp />
        </ScrollToTopButton>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;