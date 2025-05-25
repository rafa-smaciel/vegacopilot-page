// src/modules/Home/containers/CompanyLogosSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React from 'react';
import {
  LogosContainer,
  LogosTitle,
  LogosCarousel,
  LogosTrack,
  CompanyLogo
} from './styles';

const CompanyLogosSection = () => {
  // Logos das empresas parceiras/clientes reais baseados no pitch do Vega Copilot
  const companyLogos = [
    { 
      name: 'INDAB Metalúrgica', 
      image: 'https://via.placeholder.com/180x80?text=INDAB+Metalúrgica',
      featured: true // Cliente real em operação
    },
    { 
      name: 'Copaj Indústria', 
      image: 'https://via.placeholder.com/180x80?text=Copaj+Indústria' 
    },
    { 
      name: 'Grupo Mahle', 
      image: 'https://via.placeholder.com/180x80?text=Grupo+Mahle' 
    },
    { 
      name: 'NVIDIA Inception', 
      image: 'https://via.placeholder.com/180x80?text=NVIDIA+Inception',
      featured: true // Parceiro estratégico
    },
    { 
      name: 'INCAMP Unicamp', 
      image: 'https://via.placeholder.com/180x80?text=INCAMP+Unicamp',
      featured: true // Incubadora
    },
    { 
      name: 'SENAI', 
      image: 'https://via.placeholder.com/180x80?text=SENAI' 
    },
    { 
      name: 'UPLAB', 
      image: 'https://via.placeholder.com/180x80?text=UPLAB' 
    },
    { 
      name: 'Komatsu', 
      image: 'https://via.placeholder.com/180x80?text=Komatsu' 
    },
    { 
      name: 'Caterpillar', 
      image: 'https://via.placeholder.com/180x80?text=Caterpillar' 
    }
  ];

  return (
    <LogosContainer>
      <LogosTitle>Confiado por líderes da indústria brasileira</LogosTitle>
      <LogosCarousel>
        <LogosTrack>
          {/* Primeiro conjunto para o carrossel infinito */}
          {companyLogos.map((company, index) => (
            <CompanyLogo 
              key={`first-${index}`} 
              src={company.image} 
              alt={company.name}
              featured={company.featured}
              title={company.name}
            />
          ))}
          {/* Segundo conjunto para loop infinito */}
          {companyLogos.map((company, index) => (
            <CompanyLogo 
              key={`second-${index}`} 
              src={company.image} 
              alt={company.name}
              featured={company.featured}
              title={company.name}
            />
          ))}
        </LogosTrack>
      </LogosCarousel>
      
      {/* Informação adicional sobre o pipeline */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        fontSize: '0.9rem', 
        color: '#6b7280',
        fontWeight: '500'
      }}>
        <strong style={{ color: '#059669' }}>13 dispositivos em pipeline</strong> • 
        <strong style={{ color: '#059669' }}> 2 já em operação</strong> na INDAB desde Q2 2025
      </div>
    </LogosContainer>
  );
};

export default CompanyLogosSection;