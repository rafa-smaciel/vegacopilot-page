// src/modules/Solucoes/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
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
  SolutionPrice,
  SolutionFeatures,
  FeatureItem,
  BusinessModelSection,
  BusinessModelTitle,
  BusinessModelGrid,
  ModelCard,
  ModelIcon,
  ModelTitle,
  ModelDescription,
  ModelPrice,
  ModelFeatures,
  CTASection,
  CTAButton
} from './styles';
import { 
  FaRobot, 
  FaMicrochip, 
  FaChartLine, 
  FaHandshake,
  FaDollarSign,
  FaCalendarAlt,
  FaChartBar,
  FaCheck
} from 'react-icons/fa';

const Solucoes = () => {
  const solutions = [
    {
      icon: <FaRobot />,
      title: 'Vega Copilot (AIoT)',
      description: 'Sistema embarcado com visão computacional e agentes de IA para monitoramento automático e detecção de falhas em tempo real. Processamento 100% local com IA explicável.',
      features: [
        'Visão computacional avançada',
        'IA explicável (XAI)',
        'Processamento Edge Computing',
        'Integração MES/ERP via OPC-UA',
        'Análise contínua 24/7',
        'Alertas em tempo real'
      ]
    },
    {
      icon: <FaMicrochip />,
      title: 'Device Vega',
      description: 'Hardware proprietário desenvolvido para ambientes industriais robustos, com capacidade de processamento de IA embarcada. Powered by NVIDIA Jetson para máxima performance.',
      features: [
        'Hardware industrial robusto',
        'Processador NVIDIA Jetson',
        'Conectividade adaptável',
        'Resistente a condições adversas',
        'Câmeras industriais integradas',
        'Sensores especializados'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Projetos Avançados de Melhoria',
      description: 'Serviços de análise de dados e melhoria contínua baseados nos insights gerados pelos dispositivos. Detecção de gargalos e roadmap de ação personalizado.',
      features: [
        'Análise de dados históricos',
        'Detecção de gargalos',
        'Roadmap de ação personalizado',
        'Engenharia de processos aplicada',
        'Consultoria especializada',
        'Suporte contínuo'
      ]
    }
  ];

  const businessModels = [
    {
      icon: <FaDollarSign />,
      title: 'Venda Direta (CAPEX)',
      description: 'Investimento único com aquisição completa do hardware e software. Ideal para empresas que preferem posse total da tecnologia.',
      price: 'R$ 20k/equipamento',
      features: [
        'Pagamento único',
        'Hardware + software inclusos',
        'Margem > 40%',
        'Posse total da tecnologia',
        'Sem mensalidades',
        'Suporte técnico incluso'
      ]
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Assinatura Mensal (OPEX)',
      description: 'Modelo de mensalidade fixa com suporte 24x7 e atualizações constantes. Menor investimento inicial e maior flexibilidade.',
      price: 'R$ 2k/mês',
      features: [
        'Mensalidade fixa',
        'Suporte 24×7',
        'Atualizações constantes',
        'Menor investimento inicial',
        'Flexibilidade de contrato',
        'Manutenção inclusa'
      ]
    },
    {
      icon: <FaChartBar />,
      title: 'Projetos Customizados',
      description: 'Projetos sob demanda com base em dados coletados. Engenharia de processos aplicada para máxima eficiência operacional.',
      price: 'Payback até 2 anos',
      features: [
        'Projetos sob demanda',
        'Base em dados reais',
        'Detecção de gargalos específicos',
        'Roadmap de ação personalizado',
        'Engenharia de processos',
        'ROI garantido'
      ]
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossas Soluções</h1>
        <p>Inteligência Artificial Embarcada para Eficiência Operacional na Indústria 5.0</p>
      </HeaderSection>

      <ContentSection>
        <SolutionGrid>
          {solutions.map((solution, index) => (
            <SolutionCard key={index}>
              <SolutionIcon>{solution.icon}</SolutionIcon>
              <SolutionTitle>{solution.title}</SolutionTitle>
              <SolutionDescription>{solution.description}</SolutionDescription>
              <SolutionFeatures>
                {solution.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>
                    <FaCheck /> {feature}
                  </FeatureItem>
                ))}
              </SolutionFeatures>
            </SolutionCard>
          ))}
        </SolutionGrid>
      </ContentSection>

      <BusinessModelSection>
        <BusinessModelTitle>Modelo de Negócio Flexível</BusinessModelTitle>
        <BusinessModelGrid>
          {businessModels.map((model, index) => (
            <ModelCard key={index}>
              <ModelIcon>{model.icon}</ModelIcon>
              <ModelTitle>{model.title}</ModelTitle>
              <ModelPrice>{model.price}</ModelPrice>
              <ModelDescription>{model.description}</ModelDescription>
              <ModelFeatures>
                {model.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>
                    <FaCheck /> {feature}
                  </FeatureItem>
                ))}
              </ModelFeatures>
            </ModelCard>
          ))}
        </BusinessModelGrid>
      </BusinessModelSection>

      <CTASection>
        <h2>Vamos agendar o piloto na sua fábrica ainda esta semana?</h2>
        <p>Implementação em apenas 4 semanas com ROI comprovado em menos de 12 meses. Entre em contato para uma demonstração personalizada.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CTAButton href="/demonstracao" primary>Solicite um Piloto</CTAButton>
          <CTAButton href="/contato">Fale com Especialista</CTAButton>
        </div>
      </CTASection>
    </Container>
  );
};

export default Solucoes;