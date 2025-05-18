// src/modules/CasosDeUso/index.js
import React from 'react';
import {
  Container,
  HeaderSection,
  CasesSection,
  CaseCard,
  CaseHeader,
  CaseIcon,
  CaseInfo,
  CaseTitle,
  CaseIndustry,
  CaseContent,
  CaseDescription,
  CaseResults,
  ResultItem,
  ResultValue,
  ResultLabel,
  CTASection,
  CTATitle,
  CTADescription,
  CTAButton
} from './styles';
import { 
  FaIndustry, 
  FaWarehouse, 
  FaCar, 
  FaTools 
} from 'react-icons/fa';

const CasosDeUso = () => {
  const cases = [
    {
      icon: <FaIndustry />,
      title: 'Redução de Defeitos em Linha de Produção',
      industry: 'Metalurgia',
      description: 'Implementação do sistema Vega Copilot para detecção automática de defeitos em peças metálicas durante o processo de fabricação, eliminando a necessidade de inspeção manual e reduzindo o tempo de parada da linha.',
      results: [
        { value: '98%', label: 'de precisão na detecção de defeitos' },
        { value: '65%', label: 'de redução no tempo de inspeção' },
        { value: '30%', label: 'de diminuição nas paradas de linha' }
      ]
    },
    {
      icon: <FaWarehouse />,
      title: 'Otimização de Inventário em Tempo Real',
      industry: 'Logística',
      description: 'Implementação de sistema de visão computacional para monitoramento contínuo de estoque em armazém, permitindo rastreamento automático de entrada e saída de mercadorias e prevenção de erros de inventário.',
      results: [
        { value: '99.7%', label: 'de precisão no controle de estoque' },
        { value: '40%', label: 'de redução em discrepâncias de inventário' },
        { value: '3.5h', label: 'economizadas diariamente em verificações manuais' }
      ]
    },
    {
      icon: <FaCar />,
      title: 'Controle de Qualidade Automatizado',
      industry: 'Automotiva',
      description: 'Sistema de visão para inspeção de componentes automotivos na linha de montagem, verificando automaticamente presença, posicionamento e instalação correta de peças críticas antes da finalização do produto.',
      results: [
        { value: '100%', label: 'de cobertura na inspeção de veículos' },
        { value: '75%', label: 'de redução em recalls por defeitos' },
        { value: 'R$2.3M', label: 'economizados anualmente' }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Manutenção Preditiva de Equipamentos',
      industry: 'Manufatura Pesada',
      description: 'Monitoramento contínuo de máquinas industriais para detecção precoce de sinais de falha, permitindo intervenções de manutenção antes de paradas não planejadas.',
      results: [
        { value: '85%', label: 'de redução em falhas inesperadas' },
        { value: '45%', label: 'de aumento na vida útil dos equipamentos' },
        { value: '24h', label: 'de aviso prévio antes de falhas críticas' }
      ]
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Casos de Uso</h1>
        <p>Conheça histórias reais de clientes que transformaram suas operações com nossas soluções</p>
      </HeaderSection>

      <CasesSection>
        {cases.map((caseItem, index) => (
          <CaseCard key={index}>
            <CaseHeader>
              <CaseIcon>{caseItem.icon}</CaseIcon>
              <CaseInfo>
                <CaseTitle>{caseItem.title}</CaseTitle>
                <CaseIndustry>{caseItem.industry}</CaseIndustry>
              </CaseInfo>
            </CaseHeader>
            <CaseContent>
              <CaseDescription>{caseItem.description}</CaseDescription>
              <CaseResults>
                {caseItem.results.map((result, resultIndex) => (
                  <ResultItem key={resultIndex}>
                    <ResultValue>{result.value}</ResultValue>
                    <ResultLabel>{result.label}</ResultLabel>
                  </ResultItem>
                ))}
              </CaseResults>
            </CaseContent>
          </CaseCard>
        ))}
      </CasesSection>

      <CTASection>
        <CTATitle>Pronto para criar seu próprio caso de sucesso?</CTATitle>
        <CTADescription>Vamos trabalhar juntos para adaptar nossas soluções aos desafios específicos da sua indústria.</CTADescription>
        <CTAButton href="/demonstracao">Solicite uma Demonstração</CTAButton>
      </CTASection>
    </Container>
  );
};

export default CasosDeUso;