// src/modules/Home/containers/SecuritySection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React from 'react';
import {
  SecurityContainer,
  SecurityContent,
  SecurityText,
  SecurityTitle,
  SecurityDescription,
  SecurityCertifications,
  CertificationBadge,
  CertificationLogo,
  CertificationTitle,
  TrustCenter,
  TrustCenterButton,
  TrustCenterText
} from './styles';

import { FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

const SecuritySection = () => {
  // Certificações e conformidades de segurança adaptadas para Vega Copilot
  const certifications = [
    {
      id: 'lgpd-compliant',
      logo: 'https://via.placeholder.com/120x120?text=LGPD+BR',
      title: 'LGPD Compliant',
      description: 'Conformidade total com a Lei Geral de Proteção de Dados do Brasil'
    },
    {
      id: 'iso-27001',
      logo: 'https://via.placeholder.com/120x120?text=ISO+27001',
      title: 'ISO/IEC 27001:2022',
      description: 'Certificação internacional de segurança da informação'
    },
    {
      id: 'edge-computing',
      logo: 'https://via.placeholder.com/120x120?text=Edge+Computing',
      title: 'Edge Computing 100%',
      description: 'Processamento local - dados nunca saem da sua fábrica'
    },
    {
      id: 'industrial-grade',
      logo: 'https://via.placeholder.com/120x120?text=Industrial+Grade',
      title: 'Industrial Grade Security',
      description: 'Padrões de segurança para ambientes industriais críticos'
    }
  ];

  return (
    <SecurityContainer>
      <SecurityContent>
        <SecurityText>
          <SecurityTitle>
            Seguro e aprovado pelo seu time de TI.
          </SecurityTitle>
          <SecurityDescription>
            Dados protegidos. Sistema resiliente.
          </SecurityDescription>
        </SecurityText>

        <SecurityCertifications>
          {certifications.map((cert, index) => (
            <CertificationBadge key={cert.id} className="animate-on-scroll">
              <CertificationLogo src={cert.logo} alt={cert.title} />
              <CertificationTitle>{cert.title}</CertificationTitle>
              <p>{cert.description}</p>
            </CertificationBadge>
          ))}
        </SecurityCertifications>

        <TrustCenter>
          <TrustCenterText>
            <FaShieldAlt />
            Acesse nosso Trust Center
          </TrustCenterText>
          <TrustCenterButton to="/seguranca">
            Ver documentação completa
            <FaExternalLinkAlt />
          </TrustCenterButton>
        </TrustCenter>
      </SecurityContent>
    </SecurityContainer>
  );
};

export default SecuritySection;