// src/modules/Home/index.js - Estrutura Principal Modular
import React, { useEffect } from 'react';
import { Container } from './globalStyles';

// Importando containers existentes
import HeroSection from './containers/HeroSection';
import CompanyLogosSection from './containers/CompanyLogosSection';
import PlantManagerSection from './containers/PlantManagerSection'; // ✨ NOVO
import ProductsSection from './containers/ProductsSection';
import TechnologySection from './containers/TechnologySection';
import IntegratedSystemSection from './containers/IntegratedSystemSection';
import CaseStudySection from './containers/CaseStudySection';
import SecuritySection from './containers/SecuritySection';
import TestimonialsSection from './containers/TestimonialsSection';
import ROISection from './containers/ROISection';
import NewsSection from './containers/NewsSection';
import IndustriesSection from './containers/IndustriesSection';
import PatentedTechSection from './containers/PatentedTechSection'; // ✨ NOVO
import EcosystemSection from './containers/EcosystemSection'; // ✨ NOVO
import CTAFormSection from './containers/CTAFormSection'; // ✨ NOVO

// Utilitário para animações
import AnimateOnScroll from '../../utils/AnimateOnScroll';

export const Home = () => {
  // Animação no scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <Container>
      {/* 1. Hero Principal - IA Forbes AI 50 */}
      <HeroSection />

      {/* 2. Logos de Clientes - Credibilidade */}
      <CompanyLogosSection />

      {/* 2.5. Gerente de Planta - CTA Intermediário ✅ IMPLEMENTADO */}
      <PlantManagerSection />

      {/* 3. Produtos Principais - Vega Copilot, Device Vega, Energy Efficiency */}
      <ProductsSection />

      {/* 4. Tecnologia/Engenharia - Cards com hover */}
      <TechnologySection />

      {/* 5. Sistema Integrado - Carrossel de funcionalidades */}
      <IntegratedSystemSection />

      {/* 6. Estudos de Caso - Abas com empresas */}
      <CaseStudySection />

      {/* 7. Segurança - Certificações */}
      <SecuritySection />

      {/* 8. Depoimentos - Carrossel de clientes */}
      <TestimonialsSection />

      {/* 9. ROI AtlasIntel - Métricas de retorno */}
      <ROISection />

      {/* 10. Novidades - Desenvolvimentos recentes */}
      <NewsSection />

      {/* 11. Indústrias - Grid de setores ✅ IMPLEMENTADO */}
      <IndustriesSection />

      {/* 12. Tecnologia Patenteada - 3 camadas IA ✅ IMPLEMENTADO */}
      <PatentedTechSection />

      {/* 13. Ecossistema - Parceiros SAP/Oracle/Siemens ✅ IMPLEMENTADO */}
      <EcosystemSection />

      {/* 14. CTA Form - Formulário + imagem do produto ✅ IMPLEMENTADO */}
      <CTAFormSection />

      {/* AnimateOnScroll Component */}
      <AnimateOnScroll />
    </Container>
  );
};

export default Home;