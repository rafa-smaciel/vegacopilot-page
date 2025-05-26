// src/modules/Home/containers/CompanyLogosSection/index.js
import React from 'react';
import {
  LogosContainer,
  LogosTitle,
  LogosCarousel,
  LogosTrack,
  CompanyLogo
} from './styles';

import NVIDIA from '../../../../assets/parceiros/8.png';
import INCAMP from '../../../../assets/parceiros/9.png';
import UPLAB from '../../../../assets/parceiros/10.png';
import USP from '../../../../assets/parceiros/13.png';
import FIAP from '../../../../assets/parceiros/14.png';
import UNIFESP from '../../../../assets/parceiros/12.png';

const CompanyLogosSection = () => {
  // Instituições e parceiros baseados no documento VIXEM
  const institutionLogos = [
    {
      name: 'NVIDIA Inception Program',
      image: NVIDIA,
      featured: true // Parceiro estratégico principal
    },
    {
      name: 'INCAMP Unicamp',
      image: INCAMP,
      featured: true // Incubadora
    },
    {
      name: 'UpLab',
      image: UPLAB,
      featured: true // Aceleradora
    },
    {
      name: 'USP',
      image: USP,
    },
    {
      name: 'FIAP',
      image: FIAP,
    },
    {
      name: 'UNIFESP',
      image: UNIFESP
    },
  ];

  return (
    <LogosContainer>
      <LogosTitle>Instituições que nos Apoiam</LogosTitle>
      <LogosCarousel>
        <LogosTrack>
          {/* Primeiro conjunto para o carrossel infinito */}
          {institutionLogos.map((institution, index) => (
            <CompanyLogo 
              key={`first-${index}`}
              src={institution.image}
              alt={institution.name}
              featured={institution.featured}
              title={institution.name}
            />
          ))}
          {/* Segundo conjunto para loop infinito */}
          {institutionLogos.map((institution, index) => (
            <CompanyLogo 
              key={`second-${index}`}
              src={institution.image}
              alt={institution.name}
              featured={institution.featured}
              title={institution.name}
            />
          ))}
        </LogosTrack>
      </LogosCarousel>
      
      {/* Informação sobre clientes e pipeline */}
      <div style={{ 
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '0.9rem',
        color: '#64748B',
        fontWeight: '500'
      }}>
        {/* <strong style={{ color: '#0F1629' }}>13 dispositivos em pipeline</strong> • 
        <strong style={{ color: '#0F1629' }}> 2 já em operação</strong> na INDAB desde Q2 2025 */}
      </div>
    </LogosContainer>
  );
};

export default CompanyLogosSection;