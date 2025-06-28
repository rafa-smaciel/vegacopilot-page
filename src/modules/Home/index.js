// src/modules/Home/index.js - ZERO ESPAÇOS GARANTIDO
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
    padding-top: 0 !important;
    padding-bottom: 0 !important;
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
      padding: 1rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 0.8rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 1.5rem 4rem !important;
      }
    }
  }
  
  /* Compacto - outras seções */
  &.tight {
    > section {
      padding: 1.5rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 1.2rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 2rem 4rem !important;
      }
    }
  }
  
  /* CTA com mais espaço */
  &.cta {
    > section {
      padding: 2rem 2rem !important;
      margin: 0 !important;
      
      @media (max-width: 768px) {
        padding: 1.5rem 1rem !important;
      }
      
      @media (min-width: 1900px) {
        padding: 3rem 4rem !important;
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
  }
  
  /* Remove espaços residuais */
  > * + * {
    margin-top: 0 !important;
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
    
    return () => {
      // Cleanup se necessário
    };
  }, []);

  return (
    <GlobalReset className="tight-layout">
      <NoGapsContainer className="no-gaps">
        {/* 1. Hero Principal - SEM espaços */}
        <SectionWrapper className="hero">
          <HeroSection />
        </SectionWrapper>

        {/* 2. Logos - Grudado no Hero */}
        <SectionWrapper className="ultra-tight">
          <CompanyLogosSection />
        </SectionWrapper>

        {/* 3. Plant Manager - Grudado nos Logos */}
        <SectionWrapper className="ultra-tight">
          <PlantManagerSection />
        </SectionWrapper>

        {/* 4. Produtos - Compacto */}
        <SectionWrapper className="tight">
          <ProductsSection />
        </SectionWrapper>

        {/* 5. Tecnologia - Compacto */}
        <SectionWrapper className="tight">
          <TechnologySection />
        </SectionWrapper>

        {/* 6. Sistema Integrado - Compacto */}
        <SectionWrapper className="tight">
          <IntegratedSystemSection />
        </SectionWrapper>

        {/* 7. Estudos de Caso - Compacto */}
        <SectionWrapper className="tight">
          <CaseStudySection />
        </SectionWrapper>

        {/* 8. Segurança - Compacto */}
        <SectionWrapper className="tight">
          <SecuritySection />
        </SectionWrapper>

        {/* 9. Depoimentos - Compacto */}
        <SectionWrapper className="tight">
          <TestimonialsSection />
        </SectionWrapper>

        {/* 10. ROI - Compacto */}
        <SectionWrapper className="tight">
          <ROISection />
        </SectionWrapper>

        {/* 11. Novidades - Compacto */}
        <SectionWrapper className="tight">
          <NewsSection />
        </SectionWrapper>

        {/* 12. Indústrias - Compacto */}
        <SectionWrapper className="tight">
          <IndustriesSection />
        </SectionWrapper>

        {/* 13. Tecnologia Patenteada - Compacto */}
        <SectionWrapper className="tight">
          <PatentedTechSection />
        </SectionWrapper>

        {/* 14. Ecossistema - Compacto */}
        <SectionWrapper className="tight">
          <EcosystemSection />
        </SectionWrapper>

        {/* 15. CTA Form - Mais espaço */}
        <SectionWrapper className="cta">
          <CTAFormSection />
        </SectionWrapper>
      </NoGapsContainer>
    </GlobalReset>
  );
};

export default Home;