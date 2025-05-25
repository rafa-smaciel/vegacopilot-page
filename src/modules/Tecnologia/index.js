// src/modules/Tecnologia/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React from 'react';
import {
  Container,
  HeaderSection,
  ContentSection,
  TechGrid,
  TechCard,
  TechImage,
  TechTitle,
  TechDescription,
  DifferentialsSection,
  DifferentialsTitle,
  DifferentialsGrid,
  DifferentialCard,
  DifferentialIcon,
  DifferentialTitle,
  DifferentialDescription,
  ProcessSection,
  ProcessTitle,
  ProcessSteps,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  ArchitectureSection,
  ArchitectureTitle,
  ArchitectureContent,
  ArchitectureImage,
  ArchitectureDescription,
  PartnersSection,
  PartnersTitle,
  PartnersDescription,
  PartnersLogos,
  PartnerLogo,
  CTASection,
  CTATitle,
  CTADescription,
  CTAButton
} from './styles';

import {
  FaShieldAlt,
  FaBrain,
  FaChartLine,
  FaLink,
  FaRocket,
  FaUsers,
  FaMicrochip,
  FaEye,
  FaCogs
} from 'react-icons/fa';

const Tecnologia = () => {
  // Diferenciais baseados no pitch
  const differentials = [
    {
      icon: <FaShieldAlt />,
      title: 'Edge Computing (100% Local)',
      description: 'Processamento 100% local no dispositivo, sem dependência da internet. Todos os dados permanecem seguros na sua fábrica, garantindo privacidade total e funcionamento mesmo em ambientes offline. Zero latência para decisões críticas.'
    },
    {
      icon: <FaBrain />,
      title: 'IA Explicável (XAI)',
      description: 'Algoritmos transparentes que mostram exatamente por que uma decisão foi tomada. Cada alerta vem acompanhado da explicação detalhada, facilitando a confiança da equipe e garantindo conformidade regulatória.'
    },
    {
      icon: <FaChartLine />,
      title: 'Análise Contínua e Recomendações Inteligentes',
      description: 'Monitoramento 24/7 da sua produção com recomendações baseadas em dados históricos e padrões identificados. O sistema aprende continuamente com sua operação específica.'
    },
    {
      icon: <FaLink />,
      title: 'Integração Fácil e Rápida (MES/ERP)',
      description: 'Conecta-se facilmente com seus sistemas existentes via protocolos industriais padrão como OPC-UA e MQTT. Implementação completa em apenas 4 semanas, sem interrupção da produção.'
    },
    {
      icon: <FaRocket />,
      title: 'Alta Escalabilidade Industrial',
      description: 'Arquitetura distribuída que permite crescimento orgânico. Cada dispositivo funciona independentemente, mas pode ser conectado em rede para análises mais amplas.'
    },
    {
      icon: <FaUsers />,
      title: 'Equipe Especializada',
      description: 'Time com Mestrado e Doutorado em IA, 15 anos de experiência industrial, e mentoria do programa NVIDIA Inception. Suporte técnico especializado garantido.'
    }
  ];

  // Tecnologias core baseadas no que realmente usam
  const technologies = [
    {
      image: 'https://via.placeholder.com/600x400?text=Edge+AI+Computing',
      title: 'Edge Computing com IA Embarcada',
      description: 'Processamento local usando NVIDIA Jetson Nano para inferência de IA em tempo real. Capacidade de processar milhares de frames por segundo sem depender de conectividade externa. Algoritmos otimizados para hardware embarcado garantem eficiência energética e resposta imediata.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Explainable+AI',
      title: 'Inteligência Artificial Explicável',
      description: 'Implementação de técnicas XAI (Explainable AI) que permitem compreender cada decisão tomada pelo sistema. Uso de LIME, SHAP e técnicas de visualização para mostrar quais features influenciaram cada predição. Transparência total nos algoritmos.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Computer+Vision',
      title: 'Visão Computacional Avançada',
      description: 'Redes neurais convolucionais (CNN) customizadas para detecção de anomalias industriais. Algoritmos de segmentação semântica e detecção de objetos treinados especificamente para ambientes de produção. Precisão de 98% na detecção de defeitos.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Industrial+Protocols',
      title: 'Protocolos Industriais Nativos',
      description: 'Suporte nativo para OPC-UA, MQTT, Modbus e outros protocolos industriais. Integração direta com sistemas MES, ERP e SCADA existentes. Comunicação segura e confiável em redes industriais.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Captura Automática',
      description: 'Câmeras industriais de alta resolução capturam continuamente imagens e vídeos do processo produtivo. Sensores especializados coletam dados complementares em tempo real.'
    },
    {
      number: '02',
      title: 'Análise Inteligente Embarcada',
      description: 'IA embarcada processa localmente todos os dados usando algoritmos explicáveis. Detecção de padrões anômalos, classificação de defeitos e análise preditiva em milissegundos.'
    },
    {
      number: '03',
      title: 'Visualização Clara do Desempenho',
      description: 'Dashboard em tempo real apresenta métricas de produção, alertas e recomendações de forma intuitiva. Gráficos e indicadores facilitam a tomada de decisão rápida.'
    },
    {
      number: '04',
      title: 'Recomendações & Autoajustes',
      description: 'Sistema oferece recomendações baseadas em dados para correção de problemas. Integração com outros sistemas permite autoajustes quando autorizado.'
    },
    {
      number: '05',
      title: 'Integração e Ações',
      description: 'Comunicação direta com sistemas MES/ERP via protocolos industriais. Ações automáticas ou sugestões são enviadas para os operadores e sistemas de controle.'
    }
  ];

  const partners = [
    { name: 'NVIDIA Inception', logo: 'https://via.placeholder.com/200x100?text=NVIDIA+Inception' },
    { name: 'INCAMP Unicamp', logo: 'https://via.placeholder.com/200x100?text=INCAMP+Unicamp' },
    { name: 'SENAI', logo: 'https://via.placeholder.com/200x100?text=SENAI' },
    { name: 'UPLAB', logo: 'https://via.placeholder.com/200x100?text=UPLAB' }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossa Tecnologia</h1>
        <p>Inteligência Artificial Embarcada para Eficiência Operacional na Indústria 5.0</p>
      </HeaderSection>

      <DifferentialsSection>
        <DifferentialsTitle>Por que o Vega Copilot é Único?</DifferentialsTitle>
        <DifferentialsGrid>
          {differentials.map((differential, index) => (
            <DifferentialCard key={index} className="animate-on-scroll">
              <DifferentialIcon>{differential.icon}</DifferentialIcon>
              <DifferentialTitle>{differential.title}</DifferentialTitle>
              <DifferentialDescription>{differential.description}</DifferentialDescription>
            </DifferentialCard>
          ))}
        </DifferentialsGrid>
      </DifferentialsSection>

      <ContentSection>
        <TechGrid>
          {technologies.map((tech, index) => (
            <TechCard key={index} className="animate-on-scroll">
              <TechImage src={tech.image} alt={tech.title} />
              <TechTitle>{tech.title}</TechTitle>
              <TechDescription>{tech.description}</TechDescription>
            </TechCard>
          ))}
        </TechGrid>
      </ContentSection>

      <ArchitectureSection>
        <ArchitectureTitle>Arquitetura do Vega Copilot</ArchitectureTitle>
        <ArchitectureContent>
          <ArchitectureImage src="https://via.placeholder.com/800x400?text=Arquitetura+Vega+Copilot+AIoT" alt="Arquitetura Vega Copilot" />
          <ArchitectureDescription>
            <p>O Vega Copilot utiliza uma arquitetura de Edge Computing distribuída e escalável, onde cada dispositivo funciona de forma completamente autônoma. O processamento 100% local garante que nenhum dado sensível saia da sua fábrica.</p>
            <p><strong>Componentes principais da arquitetura:</strong></p>
            <ul>
              <li><strong>Device Vega (Hardware):</strong> Processador NVIDIA Jetson Nano otimizado para IA embarcada, com câmeras industriais de alta resolução e sensores especializados.</li>
              <li><strong>Vega Copilot (Software):</strong> IA explicável com algoritmos transparentes, visão computacional avançada e sistema multi-agente para tomada de decisões.</li>
              <li><strong>Edge Computing:</strong> Processamento local em tempo real, sem dependência de internet ou nuvem, garantindo zero latência e máxima segurança.</li>
              <li><strong>Protocolos Industriais:</strong> Conectividade nativa com MES, ERP e SCADA via OPC-UA, MQTT, Modbus e outros protocolos padrão.</li>
              <li><strong>Dashboard Analytics:</strong> Interface web responsiva para visualização de métricas, alertas e recomendações em tempo real.</li>
            </ul>
            <p><strong>Segurança e Compliance:</strong> Todos os dados permanecem localmente, atendendo requisitos de LGPD e regulamentações industriais mais rigorosas.</p>
          </ArchitectureDescription>
        </ArchitectureContent>
      </ArchitectureSection>

      <ProcessSection>
        <ProcessTitle>Como o Vega Copilot Funciona</ProcessTitle>
        <ProcessSteps>
          {processSteps.map((step, index) => (
            <ProcessStep key={index} className="animate-on-scroll">
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ProcessSection>

      <PartnersSection>
        <PartnersTitle>Nossos Parceiros Tecnológicos</PartnersTitle>
        <PartnersDescription>
          Trabalhamos com líderes da indústria e instituições de pesquisa para entregar tecnologia de ponta
        </PartnersDescription>
        <PartnersLogos>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} src={partner.logo} alt={partner.name} />
          ))}
        </PartnersLogos>
      </PartnersSection>

      <CTASection>
        <CTATitle>Pronto para implementar IA explicável na sua indústria?</CTATitle>
        <CTADescription>
          Converse com nossos especialistas e descubra como o Vega Copilot pode transformar sua operação industrial em apenas 4 semanas, com ROI comprovado em menos de 12 meses.
        </CTADescription>
        <CTAButton to="/demonstracao">Solicite um Piloto</CTAButton>
      </CTASection>
    </Container>
  );
};

export default Tecnologia;