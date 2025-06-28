// src/modules/Home/index.js - PROPORÇÕES TRACTIAN EXATAS
import React, { useEffect } from 'react';
import styled from 'styled-components';

// Importando containers existentes
import HeroSection from './containers/HeroSection';
import CompanyLogosSection from './containers/CompanyLogosSection';
import PlantManagerSection from './containers/PlantManagerSection';
import ProductsSection from './containers/ProductsSection';
import TechnologySection from './containers/TechnologySection';
import IntegratedSystemSection from './containers/IntegratedSystemSection';
import CaseStudySection from './containers/CaseStudySection';
import SecuritySection from './containers/SecuritySection';
import TestimonialsSection from './containers/TestimonialsSection';
import ROISection from './containers/ROISection';
import NewsSection from './containers/NewsSection';
import IndustriesSection from './containers/IndustriesSection';
import PatentedTechSection from './containers/PatentedTechSection';
import EcosystemSection from './containers/EcosystemSection';
import CTAFormSection from './containers/CTAFormSection';

// ===== CONTAINER PRINCIPAL - PROPORÇÕES TRACTIAN =====
const TractianContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
  /* Remove TODOS os espaços - Estilo Tractian */
  > * {
    margin: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* Seções grudadas sem gaps */
  > section {
    margin: 0 !important;
    display: block;
  }
  
  /* Remove qualquer espaço entre elementos */
  > * + * {
    margin-top: 0 !important;
  }
`;

// ===== WRAPPERS PROPORCIONAIS TRACTIAN =====
const SectionWrapper = styled.div`
  margin: 0;
  padding: 0;
  
  /* Remove padding inferior de TODAS as seções */
  > section {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* HERO - Altura ajustada para 80vh */
  &.hero {
    > section {
      padding: 0 !important;
      margin: 0 !important;
      height: 80vh !important;
      min-height: 650px !important;
      max-height: 850px !important;
    }
  }
  
  /* LOGOS - Espaçamento aumentado */
  &.logos {
    > section {
      padding: 0.8rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.6rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 1rem 4rem !important;
      }
    }
  }
  
  /* PLANT MANAGER - Espaçamento aumentado */
  &.plant-manager {
    > section {
      padding: 1rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.8rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 1.2rem 4rem !important;
      }
    }
  }
  
  /* SEÇÕES NORMAIS - Padding Tractian (reduzido) */
  &.normal {
    > section {
      padding: 3rem 2rem !important; /* MUITO MENOR que 6rem */
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 2rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 4rem 4rem !important;
      }
    }
  }
  
  /* CTA - Compacto */
  &.cta {
    > section {
      padding: 3rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 2rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 4rem 4rem !important;
      }
    }
  }
`;

// ===== RESET GLOBAL TRACTIAN =====
const TractianReset = styled.div`
  margin: 0;
  padding: 0;
  
  /* Remove gaps de todos os filhos */
  * {
    box-sizing: border-box;
  }
  
  /* Força sem espaços */
  section {
    margin: 0 !important;
    padding-bottom: 0 !important;
  }
  
  /* Remove espaços residuais */
  > * + * {
    margin-top: 0 !important;
  }
  
  /* Força containers internos sem espaço inferior */
  div[class*="Container"] {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* Remove margens de últimos elementos */
  * :last-child {
    margin-bottom: 0 !important;
  }
`;

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

  // CSS global Tractian
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.style.margin = '0';
      mainContainer.style.padding = '0';
    }
    
    const style = document.createElement('style');
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      section { margin: 0 !important; }
      .tractian-layout section { padding-bottom: 0 !important; }
      body { overflow-x: hidden; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <TractianReset className="tractian-layout">
      <TractianContainer className="tractian-proportions">
        {/* 1. HERO - 75vh (Tractian) */}
        <SectionWrapper className="hero">
          <HeroSection />
        </SectionWrapper>

        {/* 2. LOGOS - Ultra compacto (Tractian) */}
        {/* <SectionWrapper className="logos">
          <CompanyLogosSection />
        </SectionWrapper> */}

        {/* 3. PLANT MANAGER - Ultra compacto (Tractian) */}
        <SectionWrapper className="plant-manager">
          <PlantManagerSection />
        </SectionWrapper>

        {/* 4. PRODUTOS - Padding reduzido (Tractian) */}
        <SectionWrapper className="normal">
          <ProductsSection />
        </SectionWrapper>

        {/* 5. TECNOLOGIA - Padding reduzido */}
        <SectionWrapper className="normal">
          <TechnologySection />
        </SectionWrapper>

        {/* 6. SISTEMA INTEGRADO - Padding reduzido */}
        <SectionWrapper className="normal">
          <IntegratedSystemSection />
        </SectionWrapper>

        {/* 7. ESTUDOS DE CASO - Padding reduzido */}
        <SectionWrapper className="normal">
          <CaseStudySection />
        </SectionWrapper>

        {/* 8. SEGURANÇA - Padding reduzido */}
        <SectionWrapper className="normal">
          <SecuritySection />
        </SectionWrapper>

        {/* 9. DEPOIMENTOS - Padding reduzido */}
        <SectionWrapper className="normal">
          <TestimonialsSection />
        </SectionWrapper>

        {/* 10. ROI - Padding reduzido */}
        <SectionWrapper className="normal">
          <ROISection />
        </SectionWrapper>

        {/* 11. NOVIDADES - Padding reduzido */}
        <SectionWrapper className="normal">
          <NewsSection />
        </SectionWrapper>

        {/* 12. INDÚSTRIAS - Padding reduzido */}
        <SectionWrapper className="normal">
          <IndustriesSection />
        </SectionWrapper>

        {/* 13. TECNOLOGIA PATENTEADA - Padding reduzido */}
        <SectionWrapper className="normal">
          <PatentedTechSection />
        </SectionWrapper>

        {/* 14. ECOSSISTEMA - Padding reduzido */}
        <SectionWrapper className="normal">
          <EcosystemSection />
        </SectionWrapper>

        {/* 15. CTA FORM - Compacto */}
        <SectionWrapper className="cta">
          <CTAFormSection />
        </SectionWrapper>
      </TractianContainer>
    </TractianReset>
  );
};

export default Home;