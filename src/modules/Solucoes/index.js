// src/modules/Solucoes/index.js
import React from 'react';
import {
  Container,
  HeaderSection,
  ContentSection,
  SolutionGrid,
  SolutionCard,
  SolutionIcon,
  SolutionTitle,
  SolutionDescription,
  CTASection,
  CTAButton
} from './styles';
import { 
  FaRobot, 
  FaIndustry, 
  FaChartBar, 
  FaClipboardCheck 
} from 'react-icons/fa';

const Solucoes = () => {
  const solutions = [
    {
      icon: <FaRobot />,
      title: 'Vega Copilot',
      description: 'Sistema de monitoramento inteligente com IA embarcada para detecção automática de falhas e anomalias em tempo real.'
    },
    {
      icon: <FaIndustry />,
      title: 'Device Vega',
      description: 'Hardware proprietário desenvolvido para ambientes industriais com capacidade de processamento de vídeo e sensores integrados.'
    },
    {
      icon: <FaChartBar />,
      title: 'Análise de Dados',
      description: 'Plataforma avançada de visualização de métricas de produção e relatórios personalizados para tomada de decisão.'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Lean Manufacturing',
      description: 'Soluções para implementação de práticas de manufatura enxuta com suporte de tecnologia de ponta.'
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossas Soluções</h1>
        <p>Conheça nosso portfólio completo de soluções para redução de custos industriais</p>
      </HeaderSection>

      <ContentSection>
        <SolutionGrid>
          {solutions.map((solution, index) => (
            <SolutionCard key={index}>
              <SolutionIcon>{solution.icon}</SolutionIcon>
              <SolutionTitle>{solution.title}</SolutionTitle>
              <SolutionDescription>{solution.description}</SolutionDescription>
            </SolutionCard>
          ))}
        </SolutionGrid>
      </ContentSection>

      <CTASection>
        <h2>Pronto para transformar sua operação industrial?</h2>
        <p>Entre em contato com nossa equipe para uma demonstração personalizada.</p>
        <CTAButton href="/demonstracao">Solicite uma Demonstração</CTAButton>
      </CTASection>
    </Container>
  );
};

export default Solucoes;