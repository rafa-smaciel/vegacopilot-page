// src/modules/Home/containers/CompanyLogosSection/index.js
import React from 'react';
import {
  LogosContainer,
  LogosTitle,
  LogosCarousel,
  LogosTrack,
  CompanyLogo
} from './styles';

const CompanyLogosSection = () => {
  // Novas imagens de setores industriais
  const industryLogos = [
    {
      name: 'Aerospace & Defence',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/621d0e6d09c583009d2a0805_aerospace-defence_locate.webp',
      featured: true
    },
    {
      name: 'Automotive Industry',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62195375e572c8f559fbed94_automotive_visual.webp',
      featured: true
    },
    {
      name: 'Utilities & Energy',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/60494c3303fc9481ca8e1375_utilities_02.webp',
      featured: true
    },
    {
      name: 'Agriculture & Plant ID',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/5f792ff0cc9e36516de2dbeb_ag_plantid.webp',
      featured: false
    },
    {
      name: 'Manufacturing Solutions',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/601ef8cf8ea93152314013ba_manufacturing_02.webp',
      featured: true
    },
    {
      name: 'Government Security',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp',
      featured: false
    },
    {
      name: 'Banking & Finance',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6014a86f90820a0a00294a0a_banking_counterfeit.webp',
      featured: false
    },
    {
      name: 'Manufacturing Quality',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/601ef8cf9e66851919ce0b54_manufacturing_problem.webp',
      featured: true
    },
    {
      name: 'Government Training',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/621941d82071179b3ea316e9_gov_training.webp',
      featured: false
    },
    {
      name: 'Manufacturing Systems',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/601ef8cf39161b731ae80935_manufacturing_01.webp',
      featured: true
    },
    {
      name: 'E-commerce Solutions',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/60392b8e66f4e79e79c05cbf_ecommerce_01.webp',
      featured: false
    }
  ];

  return (
    <LogosContainer>
      <LogosTitle>Setores que Atendemos</LogosTitle>
      <LogosCarousel>
        <LogosTrack>
          {/* Primeiro conjunto para o carrossel infinito */}
          {industryLogos.map((industry, index) => (
            <CompanyLogo 
              key={`first-${index}`}
              src={industry.image}
              alt={industry.name}
              featured={industry.featured}
              title={industry.name}
            />
          ))}
          {/* Segundo conjunto para loop infinito */}
          {industryLogos.map((industry, index) => (
            <CompanyLogo 
              key={`second-${index}`}
              src={industry.image}
              alt={industry.name}
              featured={industry.featured}
              title={industry.name}
            />
          ))}
        </LogosTrack>
      </LogosCarousel>
      
      {/* Informação sobre aplicações de IA */}
      <div style={{ 
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '0.9rem',
        color: '#64748B',
        fontWeight: '500'
      }}>
        <strong style={{ color: '#0F1629' }}>IA Aplicada em Múltiplos Setores</strong> • 
        <strong style={{ color: '#0F1629' }}> Visão Computacional Industrial</strong>
      </div>
    </LogosContainer>
  );
};

export default CompanyLogosSection;