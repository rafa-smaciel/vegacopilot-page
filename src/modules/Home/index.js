// src/modules/Home/index.js - ESPAÇOS INFERIORES REDUZIDOS
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

// Container principal ZERO gaps
const NoGapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
  /* Remove absolutamente TODOS os espaços */
  > * {
    margin: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* Seções grudadas - força zero gap */
  > section {
    margin: 0 !important;
    display: block;
  }
  
  /* Remove qualquer espaço entre elementos */
  > * + * {
    margin-top: 0 !important;
  }
`;

// Wrapper que força padding específico sem afetar margins
const SectionWrapper = styled.div`
  margin: 0;
  padding: 0;
  
  /* Remove padding inferior de TODAS as seções */
  > section {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* Hero - sem padding vertical */
  &.hero {
    > section {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
  
  /* Ultra compacto - logos e plant manager */
  &.ultra-tight {
    > section {
      padding: 0.2rem 2rem 0.2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.1rem 1rem 0.1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 0.3rem 4rem 0.3rem !important;
      }
    }
  }
  
  /* Compacto - outras seções */
  &.tight {
    > section {
      padding: 0.3rem 2rem 0.3rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.2rem 1rem 0.2rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 0.4rem 4rem 0.4rem !important;
      }
    }
  }
  
  /* CTA - compacto também */
  &.cta {
    > section {
      padding: 0.4rem 2rem 0.4rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.3rem 1rem 0.3rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 0.5rem 4rem 0.5rem !important;
      }
    }
  }
`;

// Reset global dentro do componente
const GlobalReset = styled.div`
  /* Reset completo */
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

  // Remove qualquer espaço do body quando componente monta
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    // Remove gaps do container pai se existir
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.style.margin = '0';
      mainContainer.style.padding = '0';
    }
    
    // Força CSS global para remover espaços
    const style = document.createElement('style');
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      section { margin: 0 !important; }
      .tight-layout section { padding-bottom: 0 !important; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <GlobalReset className="tight-layout">
      <NoGapsContainer className="no-gaps">
        {/* 1. Hero Principal - SEM espaços */}
        <SectionWrapper className="hero">
          <HeroSection />
        </SectionWrapper>

        {/* 2. Logos - Grudado no Hero (SEM título, imagens menores) */}
        <SectionWrapper className="ultra-tight">
          <CompanyLogosSection />
        </SectionWrapper>

        {/* 3. Plant Manager - Grudado nos Logos */}
        <SectionWrapper className="ultra-tight">
          <PlantManagerSection />
        </SectionWrapper>

        {/* 4. Produtos - Ultra Compacto */}
        <SectionWrapper className="tight">
          <ProductsSection />
        </SectionWrapper>

        {/* 4. Tecnologia - Ultra Compacto */}
        <SectionWrapper className="tight">
          <TechnologySection />
        </SectionWrapper>

        {/* 5. Sistema Integrado - Ultra Compacto */}
        <SectionWrapper className="tight">
          <IntegratedSystemSection />
        </SectionWrapper>

        {/* 6. Estudos de Caso - Ultra Compacto */}
        <SectionWrapper className="tight">
          <CaseStudySection />
        </SectionWrapper>

        {/* 7. Segurança - Ultra Compacto */}
        <SectionWrapper className="tight">
          <SecuritySection />
        </SectionWrapper>

        {/* 8. Depoimentos - Ultra Compacto */}
        <SectionWrapper className="tight">
          <TestimonialsSection />
        </SectionWrapper>

        {/* 9. ROI - Ultra Compacto */}
        <SectionWrapper className="tight">
          <ROISection />
        </SectionWrapper>

        {/* 10. Novidades - Ultra Compacto */}
        <SectionWrapper className="tight">
          <NewsSection />
        </SectionWrapper>

        {/* 11. Indústrias - Ultra Compacto */}
        <SectionWrapper className="tight">
          <IndustriesSection />
        </SectionWrapper>

        {/* 12. Tecnologia Patenteada - Ultra Compacto */}
        <SectionWrapper className="tight">
          <PatentedTechSection />
        </SectionWrapper>

        {/* 13. Ecossistema - Ultra Compacto */}
        <SectionWrapper className="tight">
          <EcosystemSection />
        </SectionWrapper>

        {/* 14. CTA Form - Compacto */}
        <SectionWrapper className="cta">
          <CTAFormSection />
        </SectionWrapper>
      </NoGapsContainer>
    </GlobalReset>
  );
};

export default Home;