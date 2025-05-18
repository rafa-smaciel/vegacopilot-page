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
  StepDescription
} from './styles';

const Tecnologia = () => {
  const technologies = [
    {
      image: 'https://via.placeholder.com/600x400?text=AI+Vision',
      title: 'Visão Computacional',
      description: 'Nosso sistema de visão computacional utiliza algoritmos avançados para detectar, classificar e rastrear objetos em tempo real, permitindo análise contínua do ambiente industrial.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Edge+Computing',
      title: 'Edge Computing',
      description: 'Processamento de dados próximo à fonte, reduzindo latência e permitindo tomadas de decisão em milissegundos, mesmo em ambientes com conectividade limitada.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Machine+Learning',
      title: 'Machine Learning',
      description: 'Modelos de aprendizado de máquina que se adaptam ao seu ambiente específico, melhorando continuamente com o uso e reduzindo falsos positivos.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Data+Analysis',
      title: 'Análise de Dados',
      description: 'Ferramentas avançadas de análise que transformam dados brutos em insights acionáveis, identificando padrões e tendências invisíveis aos olhos humanos.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Detecção',
      description: 'Nossos sensores capturam continuamente dados do ambiente industrial, identificando padrões e anomalias em tempo real.'
    },
    {
      number: '02',
      title: 'Análise',
      description: 'Os dados coletados são processados por nossos algoritmos de IA, que distinguem entre operações normais e potenciais problemas.'
    },
    {
      number: '03',
      title: 'Alerta',
      description: 'Quando uma anomalia é detectada, o sistema emite alertas imediatos para os operadores, permitindo intervenção rápida.'
    },
    {
      number: '04',
      title: 'Resolução',
      description: 'O sistema oferece recomendações baseadas em dados para resolução do problema, acelerando o tempo de resposta.'
    },
    {
      number: '05',
      title: 'Aprendizado',
      description: 'Cada interação é armazenada e utilizada para melhorar os algoritmos, tornando o sistema cada vez mais preciso e eficiente.'
    }
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
            <TechCard key={index}>
              <TechImage src={tech.image} alt={tech.title} />
              <TechTitle>{tech.title}</TechTitle>
              <TechDescription>{tech.description}</TechDescription>
            </TechCard>
          ))}
        </TechGrid>
      </ContentSection>

      <ProcessSection>
        <ProcessTitle>Como Nossa Tecnologia Funciona</ProcessTitle>
        <ProcessSteps>
          {processSteps.map((step, index) => (
            <ProcessStep key={index}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ProcessSection>
    </Container>
  );
};

export default Tecnologia;