// src/modules/Home/containers/CompanyLogosSection/index.js - SEM TÍTULO, IMAGENS MENORES
import React from 'react';
import {
  LogosContainer,
  LogosCarousel,
  LogosTrack,
  IndustryCard,
  IndustryImage,
  IndustryLabel
} from './styles';

const CompanyLogosSection = () => {
  // Setores industriais baseados na imagem fornecida
  const industrialSectors = [
    {
      name: 'Security',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp',
      featured: true
    },
    {
      name: 'Banking',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/6014a86f90820a0a00294a0a_banking_counterfeit.webp',
      featured: true
    },
    {
      name: 'Retail',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/60392b8e66f4e79e79c05cbf_ecommerce_01.webp',
      featured: true
    },
    {
      name: 'Automotive',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62195375e572c8f559fbed94_automotive_visual.webp',
      featured: true
    },
    {
      name: 'Aerospace & Defense',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/621d0e6d09c583009d2a0805_aerospace-defence_locate.webp',
      featured: true
    },
    {
      name: 'Oil & Gas',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/60494c3303fc9481ca8e1375_utilities_02.webp',
      featured: false
    },
    {
      name: 'Agriculture',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/5f792ff0cc9e36516de2dbeb_ag_plantid.webp',
      featured: false
    },
    {
      name: 'Manufacturing',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/601ef8cf8ea93152314013ba_manufacturing_02.webp',
      featured: true
    },
    {
      name: 'Telecommunications',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/601ef8cf39161b731ae80935_manufacturing_01.webp',
      featured: false
    },
    {
      name: 'Healthcare',
      image: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/621941d82071179b3ea316e9_gov_training.webp',
      featured: false
    }
  ];

  return (
    <LogosContainer>
      {/* TÍTULO REMOVIDO CONFORME SOLICITADO */}
      
      <LogosCarousel>
        <LogosTrack>
          {/* Primeiro conjunto para o carrossel infinito */}
          {industrialSectors.map((sector, index) => (
            <IndustryCard 
              key={`first-${index}`}
              featured={sector.featured}
              title={sector.name}
            >
              <IndustryImage 
                src={sector.image}
                alt={sector.name}
              />
              <IndustryLabel>{sector.name}</IndustryLabel>
            </IndustryCard>
          ))}
          {/* Segundo conjunto para loop infinito */}
          {industrialSectors.map((sector, index) => (
            <IndustryCard 
              key={`second-${index}`}
              featured={sector.featured}
              title={sector.name}
            >
              <IndustryImage 
                src={sector.image}
                alt={sector.name}
              />
              <IndustryLabel>{sector.name}</IndustryLabel>
            </IndustryCard>
          ))}
        </LogosTrack>
      </LogosCarousel>
      
      {/* FRASE REMOVIDA CONFORME SOLICITADO */}
    </LogosContainer>
  );
};

export default CompanyLogosSection;