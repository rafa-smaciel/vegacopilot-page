// src/modules/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  HeroSection, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  TrustedBySection,
  TrustedByTitle,
  CompanyLogos,
  CompanyLogo,
  FeaturesSection,
  FeaturesSectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  BenefitsSection,
  BenefitsSectionTitle,
  BenefitsSectionSubtitle,
  BenefitsStatsContainer,
  BenefitStatCard,
  BenefitStatValue,
  BenefitStatLabel,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton,
  TechSection,
  TechSectionTitle,
  TechSectionSubtitle,
  TechCardsContainer,
  TechCard,
  TechCardImage,
  TechCardTitle,
  TechCardDescription
} from './styles';

import { 
  FaIndustry, 
  FaRobot, 
  FaChartLine, 
  FaShieldAlt, 
  FaClock, 
  FaTools 
} from 'react-icons/fa';

export const Home = () => {
  // Logos das empresas parceiras/clientes
  const companyLogos = [
    { name: 'Indab', image: 'https://via.placeholder.com/160x60?text=INDAB' },
    { name: 'Copaj', image: 'https://via.placeholder.com/160x60?text=COPAJ' },
    { name: 'Komatsu', image: 'https://via.placeholder.com/160x60?text=KOMATSU' },
    { name: 'Caterpillar', image: 'https://via.placeholder.com/160x60?text=CATERPILLAR' },
    { name: 'Mahle', image: 'https://via.placeholder.com/160x60?text=MAHLE' }
  ];

  // Recursos do produto
  const features = [
    {
      icon: <FaRobot />,
      title: 'Visão Computacional',
      description: 'Identifica automaticamente padrões, defeitos e anomalias em tempo real, usando hardware embarcado para processamento local.'
    },
    {
      icon: <FaIndustry />,
      title: 'Agentes Inteligentes',
      description: 'Sistema multiagente de decisão autônoma que interpreta eventos e recomenda ações corretivas antes que afetem a produção.'
    },
    {
      icon: <FaChartLine />,
      title: 'Dados Operacionais',
      description: 'Coleta e organiza dados críticos em dashboards intuitivos, transformando-os em insights acionáveis para melhoria contínua.'
    },
    {
      icon: <FaTools />,
      title: 'Integração Industrial',
      description: 'Conecta-se facilmente com sistemas existentes (MES/ERP), protocolos industriais e sensores sem comprometer a segurança.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'IA Explicável',
      description: 'Algoritmos transparentes que mostram claramente os motivos das decisões, facilitando a confiança e conformidade regulatória.'
    },
    {
      icon: <FaClock />,
      title: 'Processamento em Tempo Real',
      description: 'Respostas em milissegundos para situações críticas, sem depender de conectividade com a nuvem.'
    }
  ];

  // Benefícios em números
  const benefits = [
    { value: '30%', label: 'redução em paradas não planejadas' },
    { value: '98%', label: 'de precisão na detecção de anomalias' },
    { value: '7', label: 'meses para retorno do investimento' },
    { value: 'R$400k', label: 'economia anual média por fábrica' }
  ];

  // Tecnologias/Soluções
  const technologies = [
    {
      image: 'https://via.placeholder.com/600x400?text=Vega+Copilot',
      title: 'Vega Copilot',
      description: 'Sistema embarcado com visão computacional e agentes de IA para monitoramento automático e detecção de falhas em tempo real.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Device+Vega',
      title: 'Device Vega',
      description: 'Hardware proprietário desenvolvido para ambientes industriais robustos, com capacidade de processamento local e conectividade adaptável.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Consultoria+Especializada',
      title: 'Consultoria Especializada',
      description: 'Serviços de análise de dados e melhoria contínua baseados nos insights gerados pelos dispositivos Vega Copilot.'
    }
  ];

  return (
    <Container>
      {/* Seção Hero/Banner */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Engenharia Inteligente para uma Produção Eficiente</HeroTitle>
          <HeroSubtitle>
            Transforme sua operação industrial com visão computacional e inteligência artificial embarcada. 
            Reduza custos, aumente a produtividade e elimine paradas não planejadas.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton to="/demonstracao">Solicite uma Demo</PrimaryButton>
            <SecondaryButton to="/casos-de-uso">Ver Casos de Uso</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* Seção de empresas que confiam */}
      <TrustedBySection>
        <TrustedByTitle>Confiado por líderes da indústria</TrustedByTitle>
        <CompanyLogos>
          {companyLogos.map((company, index) => (
            <CompanyLogo key={index} src={company.image} alt={company.name} />
          ))}
        </CompanyLogos>
      </TrustedBySection>

      {/* Seção de características */}
      <FeaturesSection>
        <FeaturesSectionTitle>Tecnologia de Ponta para sua Indústria</FeaturesSectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} className="animate-on-scroll">
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Seção de benefícios em números */}
      <BenefitsSection>
        <BenefitsSectionTitle>Resultados Comprovados</BenefitsSectionTitle>
        <BenefitsSectionSubtitle>
          O Vega Copilot entrega resultados mensuráveis desde o primeiro dia de operação
        </BenefitsSectionSubtitle>
        <BenefitsStatsContainer>
          {benefits.map((benefit, index) => (
            <BenefitStatCard key={index} className="animate-on-scroll">
              <BenefitStatValue>{benefit.value}</BenefitStatValue>
              <BenefitStatLabel>{benefit.label}</BenefitStatLabel>
            </BenefitStatCard>
          ))}
        </BenefitsStatsContainer>
      </BenefitsSection>

      {/* Seção de tecnologias */}
      <TechSection>
        <TechSectionTitle>Nossas Soluções</TechSectionTitle>
        <TechSectionSubtitle>
          Conheça o portfólio completo de tecnologias para transformação digital industrial
        </TechSectionSubtitle>
        <TechCardsContainer>
          {technologies.map((tech, index) => (
            <TechCard key={index} className="animate-on-scroll">
              <TechCardImage src={tech.image} alt={tech.title} />
              <TechCardTitle>{tech.title}</TechCardTitle>
              <TechCardDescription>{tech.description}</TechCardDescription>
            </TechCard>
          ))}
        </TechCardsContainer>
      </TechSection>

      {/* Seção CTA */}
      <CTASection>
        <CTAContent>
          <CTATitle>Pronto para transformar sua operação industrial?</CTATitle>
          <CTADescription>
            O futuro da indústria é inteligente, conectado e mais eficiente. 
            Converse com nossos especialistas e descubra como o Vega Copilot pode ser 
            implementado na sua operação em apenas 4 semanas.
          </CTADescription>
          <CTAButton to="/comecar-agora">Comece Agora</CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default Home;