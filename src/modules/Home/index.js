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
  FaShieldAlt, 
  FaBrain, 
  FaChartLine, 
  FaTools, 
  FaClock, 
  FaMicrochip 
} from 'react-icons/fa';

export const Home = () => {
  // Logos das empresas parceiras/clientes reais
  const companyLogos = [
    { name: 'INDAB', image: '/src/assets/parceiros/indab.png' },
    { name: 'Copaj', image: '/src/assets/parceiros/copaj.png' },
    { name: 'Komatsu', image: '/src/assets/parceiros/komatsu.png' },
    { name: 'Caterpillar', image: '/src/assets/parceiros/caterpillar.png' },
    { name: 'Mahle', image: '/src/assets/parceiros/mahle.png' },
    { name: 'NVIDIA', image: '/src/assets/parceiros/nvidia.png' },
    { name: 'Unicamp', image: '/src/assets/parceiros/unicamp.png' }
  ];

  // Recursos baseados nos diferenciais do pitch
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Edge Computing (100% Local)',
      description: 'Processamento 100% local no dispositivo, sem dependência da internet. Todos os dados permanecem seguros na sua fábrica, garantindo privacidade e funcionamento mesmo offline.'
    },
    {
      icon: <FaBrain />,
      title: 'IA Explicável (XAI)',
      description: 'Algoritmos transparentes que mostram exatamente por que uma decisão foi tomada. Você entende cada alerta e recomendação, facilitando a confiança e conformidade regulatória.'
    },
    {
      icon: <FaChartLine />,
      title: 'Análise Contínua e Recomendações',
      description: 'Monitoramento 24/7 da sua produção com recomendações inteligentes baseadas em dados. Sistema que aprende com sua operação e melhora continuamente.'
    },
    {
      icon: <FaTools />,
      title: 'Integração Fácil e Rápida',
      description: 'Conecta-se facilmente com seus sistemas existentes (MES/ERP) via protocolos industriais padrão como OPC-UA e MQTT. Implementação em apenas 4 semanas.'
    },
    {
      icon: <FaMicrochip />,
      title: 'Hardware Industrial Robusto',
      description: 'Device Vega desenvolvido especificamente para ambientes industriais, com capacidade de processamento de IA embarcada e resistência a condições adversas.'
    },
    {
      icon: <FaClock />,
      title: 'Resposta em Tempo Real',
      description: 'Detecção de anomalias e alertas em milissegundos. Intervenção imediata antes que problemas se tornem paradas não planejadas, mantendo sua produção eficiente.'
    }
  ];

  // Benefícios reais baseados no pitch
  const benefits = [
    { value: '30-50%', label: 'redução em paradas não planejadas' },
    { value: '98%', label: 'de precisão na detecção de anomalias' },
    { value: '< 12', label: 'meses para retorno do investimento' },
    { value: '13', label: 'dispositivos em pipeline de implementação' }
  ];

  // Soluções baseadas no modelo de negócio do pitch
  const technologies = [
    {
      image: 'https://via.placeholder.com/600x400?text=Vega+Copilot+AIoT',
      title: 'Vega Copilot (AIoT)',
      description: 'Sistema embarcado com visão computacional e agentes de IA para monitoramento automático e detecção de falhas em tempo real. Processamento 100% local para máxima segurança.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Device+Vega+Hardware',
      title: 'Device Vega',
      description: 'Hardware proprietário desenvolvido para ambientes industriais robustos, com capacidade de processamento local e conectividade adaptável. Powered by NVIDIA Jetson.'
    },
    {
      image: 'https://via.placeholder.com/600x400?text=Projetos+de+Melhoria',
      title: 'Projetos Avançados de Melhoria',
      description: 'Serviços de análise de dados e melhoria contínua baseados nos insights gerados pelos dispositivos. Detecção de gargalos e roadmap de ação personalizado.'
    }
  ];

  return (
    <Container>
      {/* Seção Hero/Banner */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Inteligência Artificial Embarcada para Eficiência Operacional na Indústria 5.0</HeroTitle>
          <HeroSubtitle>
            Reduza 30-50% das paradas não planejadas com IA explicável e processamento 100% local. 
            Detecte falhas antes que aconteçam com 98% de precisão e ROI em menos de 12 meses.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton to="/demonstracao">Solicite um Piloto</PrimaryButton>
            <SecondaryButton to="/casos-de-uso">Ver Casos Reais</SecondaryButton>
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
        <FeaturesSectionTitle>Por que o Vega Copilot é Único?</FeaturesSectionTitle>
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
          Pipeline em andamento de 13 dispositivos em implementação, com os dois primeiros já em operação 
          desde o segundo trimestre de 2025 na INDAB Metalúrgica
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
          Modelo de negócio flexível: CAPEX (R$ 20k/equipamento), OPEX (R$ 2k/mês) ou projetos customizados
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
          <CTATitle>Vamos agendar o piloto na sua fábrica ainda esta semana?</CTATitle>
          <CTADescription>
            O futuro da indústria é inteligente, explicável e seguro. 
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