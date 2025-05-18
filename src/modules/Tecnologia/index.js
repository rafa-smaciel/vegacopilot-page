// src/modules/Tecnologia/index.js
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

const Tecnologia = () => {
  const technologies = [
    {
      image: 'https://via.placeholder.com/600x400?text=AI+Vision',
      title: 'Visão Computacional',
      description: 'Nosso sistema de visão computacional utiliza algoritmos avançados para detectar, classificar e rastrear objetos em tempo real, permitindo análise contínua do ambiente industrial. Combinamos redes neurais convolucionais (CNN) com algoritmos de detecção de anomalias para criar um sistema robusto que identifica padrões sutis que escapam ao olho humano.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Edge+Computing',
      title: 'Edge Computing',
      description: 'Processamento de dados próximo à fonte, reduzindo latência e permitindo tomadas de decisão em milissegundos, mesmo em ambientes com conectividade limitada. Nossa arquitetura Edge-first garante que decisões críticas sejam tomadas localmente, sem dependência de conexão com a nuvem, aumentando a confiabilidade do sistema.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Machine+Learning',
      title: 'Machine Learning',
      description: 'Modelos de aprendizado de máquina que se adaptam ao seu ambiente específico, melhorando continuamente com o uso e reduzindo falsos positivos. Utilizamos técnicas de Transfer Learning e Fine-tuning para personalizar nossos modelos às particularidades de cada operação industrial, alcançando alta precisão com menor necessidade de dados de treinamento.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Data+Analysis',
      title: 'Análise de Dados',
      description: 'Ferramentas avançadas de análise que transformam dados brutos em insights acionáveis, identificando padrões e tendências invisíveis aos olhos humanos. Nossa plataforma de análise integra dados históricos e em tempo real para prever falhas antes que aconteçam, permitindo manutenção preditiva e otimização contínua dos processos.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Detecção',
      description: 'Nossos sensores capturam continuamente dados do ambiente industrial, identificando padrões e anomalias em tempo real através de algoritmos de visão computacional e processamento de sinais.'
    },
    {
      number: '02',
      title: 'Análise',
      description: 'Os dados coletados são processados por nossos algoritmos de IA embarcados, que distinguem entre operações normais e potenciais problemas, contextualizando as informações dentro do processo produtivo.'
    },
    {
      number: '03',
      title: 'Alerta',
      description: 'Quando uma anomalia é detectada, o sistema emite alertas imediatos para os operadores, permitindo intervenção rápida antes que o problema escale para uma falha completa.'
    },
    {
      number: '04',
      title: 'Resolução',
      description: 'O sistema oferece recomendações baseadas em dados para resolução do problema, acelerando o tempo de resposta e reduzindo a dependência de especialistas para diagnóstico inicial.'
    },
    {
      number: '05',
      title: 'Aprendizado',
      description: 'Cada interação é armazenada e utilizada para melhorar os algoritmos, tornando o sistema cada vez mais preciso e eficiente ao longo do tempo através de um processo contínuo de aprendizado.'
    }
  ];

  const partners = [
    { name: 'NVIDIA Inception', logo: 'https://via.placeholder.com/200x100?text=NVIDIA+Inception' },
    { name: 'INCAMP Unicamp', logo: 'https://via.placeholder.com/200x100?text=INCAMP+Unicamp' },
    { name: 'FINEP', logo: 'https://via.placeholder.com/200x100?text=FINEP' },
    { name: 'SENAI', logo: 'https://via.placeholder.com/200x100?text=SENAI' }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossa Tecnologia</h1>
        <p>Conheça as tecnologias avançadas que impulsionam nossas soluções</p>
      </HeaderSection>

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
          <ArchitectureImage src="https://via.placeholder.com/800x400?text=Arquitetura+Vega+Copilot" alt="Arquitetura Vega Copilot" />
          <ArchitectureDescription>
            <p>O Vega Copilot utiliza uma arquitetura distribuída e escalável, combinando processamento de borda (edge) com integração aos sistemas industriais existentes. Cada dispositivo funciona de forma autônoma, mas pode ser conectado a uma rede para análises mais amplas e visualização centralizada.</p>
            <p>Os componentes principais incluem:</p>
            <ul>
              <li><strong>Unidade de Aquisição:</strong> Câmeras industriais e sensores que capturam dados do ambiente fabril.</li>
              <li><strong>Processador de Borda:</strong> Hardware especializado (Jetson Nano) que executa os algoritmos de inferência localmente.</li>
              <li><strong>Agentes Inteligentes:</strong> Múltiplos agentes de software que analisam diferentes aspectos do processo e colaboram para tomar decisões.</li>
              <li><strong>Interface de Integração:</strong> Conectores para sistemas MES, ERP e protocolos industriais como OPC-UA.</li>
              <li><strong>Dashboard Analytics:</strong> Interface gráfica que apresenta indicadores de desempenho e alertas em tempo real.</li>
            </ul>
          </ArchitectureDescription>
        </ArchitectureContent>
      </ArchitectureSection>

      <ProcessSection>
        <ProcessTitle>Como Nossa Tecnologia Funciona</ProcessTitle>
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
        <CTATitle>Pronto para implementar essa tecnologia na sua indústria?</CTATitle>
        <CTADescription>
          Converse com nossos especialistas e descubra como o Vega Copilot pode transformar sua operação industrial.
        </CTADescription>
        <CTAButton to="/demonstracao">Solicite uma Demonstração</CTAButton>
      </CTASection>
    </Container>
  );
};

export default Tecnologia;