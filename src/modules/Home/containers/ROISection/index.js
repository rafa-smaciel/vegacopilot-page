// src/modules/Home/containers/ROISection/index.js
import React from 'react';
import {
  ROIContainer,
  ROIContent,
  ROIText,
  ROITitle,
  ROIDescription,
  ROIButton,
  ROIVisual,
  ROIImage,
  MetricsGrid,
  MetricCard,
  MetricIcon,
  MetricValue,
  MetricLabel,
  MetricDescription,
  PartnerBadge,
  PartnerLogo,
  PartnerName
} from './styles';

import { 
  FaChartLine, 
  FaClock, 
  FaIndustry, 
  FaDollarSign,
  FaExternalLinkAlt 
} from 'react-icons/fa';

const ROISection = () => {
  // Métricas baseadas nos dados reais do Vega Copilot
  const metrics = [
    {
      id: 'availability-increase',
      icon: <FaChartLine />,
      value: '+17%',
      label: 'no aumento de disponibilidade',
      description: 'Mantenha seus ativos funcionando sem interrupções'
    },
    {
      id: 'payback-time',
      icon: <FaClock />,
      value: 'Payback em < 4 Meses',
      label: '',
      description: 'Retorno imediato para o seu orçamento de manutenção'
    },
    {
      id: 'productivity-increase',
      icon: <FaIndustry />,
      value: '+38%',
      label: 'no aumento da produtividade',
      description: 'Equipes operando com máxima eficiência'
    },
    {
      id: 'cost-reduction',
      icon: <FaDollarSign />,
      value: '-30%',
      label: 'de gastos com preventivas',
      description: 'Prolongue a vida útil dos ativos e reduza os custos de manutenção'
    }
  ];

  return (
    <ROIContainer>
      <ROIContent>
        <ROIText>
          <PartnerBadge>
            <PartnerLogo src="https://via.placeholder.com/120x60?text=AtlasIntel" alt="AtlasIntel" />
            <PartnerName>AtlasIntel</PartnerName>
          </PartnerBadge>
          
          <ROITitle>
            Desbloqueando Insights: Retorno Econômico da VEGA
          </ROITitle>
          
          <ROIDescription>
            Explore o impacto da VEGA em indústrias globais com a pesquisa detalhada da AtlasIntel. 
            Descubra os benefícios, o potencial de retorno sobre investimento (ROI) e os resultados reais.
          </ROIDescription>
          
          <ROIButton href="/roi-report" target="_blank">
            Leia o relatório completo
            <FaExternalLinkAlt />
          </ROIButton>
        </ROIText>

        <ROIVisual>
          <ROIImage 
            src="https://via.placeholder.com/600x400?text=Vega+ROI+Dashboard" 
            alt="Dashboard de ROI Vega Copilot"
          />
        </ROIVisual>
      </ROIContent>

      <MetricsGrid>
        {metrics.map((metric, index) => (
          <MetricCard key={metric.id} className="animate-on-scroll">
            <MetricIcon>{metric.icon}</MetricIcon>
            <MetricValue>{metric.value}</MetricValue>
            {metric.label && <MetricLabel>{metric.label}</MetricLabel>}
            <MetricDescription>{metric.description}</MetricDescription>
          </MetricCard>
        ))}
      </MetricsGrid>
    </ROIContainer>
  );
};

export default ROISection;