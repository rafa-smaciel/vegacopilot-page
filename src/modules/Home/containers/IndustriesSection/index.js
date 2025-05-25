// src/modules/Home/containers/IndustriesSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React from 'react';
import {
  IndustriesContainer,
  IndustriesContent,
  IndustriesHeader,
  IndustriesTitle,
  IndustriesSubtitle,
  IndustriesGrid,
  IndustryCard,
  IndustryIcon,
  IndustryTitle,
  IndustryDescription,
  IndustryLink
} from './styles';

import { 
  FaCar,
  FaIndustry,
  FaCog,
  FaTruck,
  FaOilCan,
  FaLeaf,
  FaTools,
  FaBoxes
} from 'react-icons/fa';

const IndustriesSection = () => {
  // Indústrias baseadas no Vega Copilot e no formulário de contato
  const industries = [
    {
      id: 'automotiva',
      icon: <FaCar />,
      title: 'Automotiva',
      description: 'Monitoramento de linha de produção, controle de qualidade e manutenção preditiva para montadoras e fornecedores automotivos.',
      link: '/industrias/automotiva'
    },
    {
      id: 'metalurgia',
      icon: <FaIndustry />,
      title: 'Metalurgia',
      description: 'IA embarcada para controle de processos siderúrgicos, detecção de defeitos em soldas e otimização de fornos.',
      link: '/industrias/metalurgia'
    },
    {
      id: 'maquinas-pesadas',
      icon: <FaCog />,
      title: 'Máquinas Pesadas',
      description: 'Monitoramento de equipamentos industriais de grande porte, prevenção de falhas críticas e otimização operacional.',
      link: '/industrias/maquinas-pesadas'
    },
    {
      id: 'logistica',
      icon: <FaTruck />,
      title: 'Logística',
      description: 'Controle de qualidade automatizado, rastreamento de produtos e otimização de processos de distribuição.',
      link: '/industrias/logistica'
    },
    {
      id: 'petroleo-gas',
      icon: <FaOilCan />,
      title: 'Petróleo e Gás',
      description: 'Monitoramento de condições críticas, detecção precoce de vazamentos e manutenção preditiva de equipamentos.',
      link: '/industrias/petroleo-gas'
    },
    {
      id: 'alimentos-bebidas',
      icon: <FaLeaf />,
      title: 'Alimentos e Bebidas',
      description: 'Controle de qualidade em linha de produção, monitoramento de contaminação e otimização de processos.',
      link: '/industrias/alimentos-bebidas'
    },
    {
      id: 'manufatura',
      icon: <FaTools />,
      title: 'Manufatura Geral',
      description: 'Soluções personalizadas para diversos segmentos manufatureiros com foco em eficiência e qualidade.',
      link: '/industrias/manufatura'
    },
    {
      id: 'bens-consumo',
      icon: <FaBoxes />,
      title: 'Bens de Consumo',
      description: 'Monitoramento de qualidade, controle de embalagens e otimização de processos produtivos em massa.',
      link: '/industrias/bens-consumo'
    }
  ];

  return (
    <IndustriesContainer>
      <IndustriesContent>
        <IndustriesHeader>
          <IndustriesTitle>Indústrias que atendemos</IndustriesTitle>
          <IndustriesSubtitle>
            Soluções de IA embarcada para diferentes segmentos industriais com 
            foco em eficiência operacional e manutenção preditiva.
          </IndustriesSubtitle>
        </IndustriesHeader>

        <IndustriesGrid>
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IndustryIcon>{industry.icon}</IndustryIcon>
              <IndustryTitle>{industry.title}</IndustryTitle>
              <IndustryDescription>{industry.description}</IndustryDescription>
              <IndustryLink to={industry.link}>
                Saiba mais
              </IndustryLink>
            </IndustryCard>
          ))}
        </IndustriesGrid>
      </IndustriesContent>
    </IndustriesContainer>
  );
};

export default IndustriesSection;   