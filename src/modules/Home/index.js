// src/modules/Home/index.js - Atualizado com novo design
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  HeroSection, 
  HeroContent,
  HeroOverlay,
  HeroTitle, 
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ScrollIndicator,
  ChevronIcon,
  SolutionSection,
  SectionTitle,
  SectionSubtitle,
  SolutionGrid,
  SolutionCard,
  SolutionIcon,
  SolutionCardTitle,
  SolutionCardDescription,
  FeaturesSection,
  FeatureGrid,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  VideoSection,
  VideoContainer,
  VideoTitle,
  VideoDescription,
  VideoFrame,
  BenefitsSection,
  BenefitContent,
  BenefitInfo,
  BenefitTitle,
  BenefitDescription,
  BenefitImage,
  BenefitMetrics,
  MetricItem,
  MetricValue,
  MetricLabel,
  ClientsSection,
  ClientsTitle,
  ClientsGrid,
  ClientLogo,
  TestimonialSection,
  TestimonialContainer,
  TestimonialContent,
  TestimonialText,
  TestimonialAuthor,
  TestimonialCompany,
  TestimonialImage,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtonContainer
} from './styles';

// Importando ícones
import { 
  FaRobot, 
  FaEye, 
  FaBrain, 
  FaServer,
  FaIndustry,
  FaChartLine,
  FaLock,
  FaWrench,
  FaCloud,
  FaChevronDown
} from 'react-icons/fa';

// Importando imagens
import benefitImage from '../../assets/images/industrial-automation.jpg';
import testimonialImage from '../../assets/images/client-testimonial.jpg';

// Importando logos dos parceiros (placeholders)
import logoIndab from '../../assets/parceiros/indab.png';
import logoKomatsu from '../../assets/parceiros/komatsu.png';
import logoCaterpillar from '../../assets/parceiros/caterpillar.png';
import logoMahle from '../../assets/parceiros/mahle.png';
import logoCopaj from '../../assets/parceiros/copaj.png';
import logoNvidia from '../../assets/parceiros/nvidia.png';
import logoUnicamp from '../../assets/parceiros/unicamp.png';

const Home = () => {
  const featuresRef = useRef(null);
  
  // Scroll para a seção de recursos ao clicar no indicador de scroll
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Efeito de aparecer elementos conforme scroll (simples)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Soluções principais
  const solutions = [
    {
      icon: <FaEye />,
      title: 'Vega Copilot',
      description: 'Sistema embarcado de visão computacional com IA para monitoramento industrial em tempo real.',
      link: '/produtos/vega-copilot'
    },
    {
      icon: <FaServer />,
      title: 'Device Vega',
      description: 'Hardware robusto desenvolvido especificamente para ambientes industriais desafiadores.',
      link: '/produtos/device-vega'
    },
    {
      icon: <FaCloud />,
      title: 'Integração MES/ERP',
      description: 'Conectividade perfeita com seus sistemas de gerenciamento de produção existentes.',
      link: '/tecnologia'
    }
  ];

  // Recursos e benefícios
  const features = [
    {
      icon: <FaRobot />,
      title: 'IA Industrial',
      description: 'Algoritmos de inteligência artificial específicos para ambiente fabril.'
    },
    {
      icon: <FaBrain />,
      title: 'Inferência Explicável',
      description: 'Tomada de decisão transparente com justificativas claras (XAI).'
    },
    {
      icon: <FaIndustry />,
      title: 'Operação Contínua',
      description: 'Funcionamento 24/7 sem interrupções mesmo em ambientes agressivos.'
    },
    {
      icon: <FaChartLine />,
      title: 'Análise Preditiva',
      description: 'Antecipação de falhas e necessidades de manutenção.'
    },
    {
      icon: <FaLock />,
      title: 'Processamento Local',
      description: 'Dados processados no dispositivo, sem dependência de nuvem.'
    },
    {
      icon: <FaWrench />,
      title: 'Instalação Rápida',
      description: 'Implementação em semanas, não meses, com mínima interrupção.'
    }
  ];

  // Métricas de desempenho
  const metrics = [
    {
      value: '98%',
      label: 'Precisão na detecção de anomalias'
    },
    {
      value: '30%',
      label: 'Redução em paradas não planejadas'
    },
    {
      value: '7',
      label: 'Meses para retorno do investimento'
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle className="animate-on-scroll">Transformação Digital para sua Indústria</HeroTitle>
          <HeroSubtitle className="animate-on-scroll">
            Tecnologia de ponta com visão computacional e inteligência artificial 
            para impulsionar a eficiência e reduzir custos operacionais
          </HeroSubtitle>
          <ButtonGroup className="animate-on-scroll">
            <PrimaryButton to="/comecar-agora">Comece Agora</PrimaryButton>
            <SecondaryButton to="/demonstracao">Solicite uma Demo</SecondaryButton>
          </ButtonGroup>
          <ScrollIndicator onClick={scrollToFeatures}>
            <span>Descubra Mais</span>
            <ChevronIcon>
              <FaChevronDown />
            </ChevronIcon>
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>

      {/* Seção de Soluções */}
      <SolutionSection ref={featuresRef}>
        <SectionTitle className="animate-on-scroll">Nossas Soluções</SectionTitle>
        <SectionSubtitle className="animate-on-scroll">
          Conheça as tecnologias que estão redefinindo a produção industrial
        </SectionSubtitle>
        
        <SolutionGrid>
          {solutions.map((solution, index) => (
            <SolutionCard key={index} className="animate-on-scroll" as={Link} to={solution.link}>
              <SolutionIcon>{solution.icon}</SolutionIcon>
              <SolutionCardTitle>{solution.title}</SolutionCardTitle>
              <SolutionCardDescription>{solution.description}</SolutionCardDescription>
            </SolutionCard>
          ))}
        </SolutionGrid>
      </SolutionSection>

      {/* Seção de Recursos */}
      <FeaturesSection>
        <SectionTitle className="animate-on-scroll">Tecnologia para Indústria 4.0</SectionTitle>
        <SectionSubtitle className="animate-on-scroll">
          Recursos avançados desenvolvidos especificamente para o ambiente industrial
        </SectionSubtitle>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureItem key={index} className="animate-on-scroll">
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.description}</FeatureText>
            </FeatureItem>
          ))}
        </FeatureGrid>
      </FeaturesSection>

      {/* Seção de Vídeo */}
      <VideoSection>
        <VideoContainer className="animate-on-scroll">
          <VideoTitle>Veja o Vega Copilot em Ação</VideoTitle>
          <VideoDescription>
            Demonstração real de como nosso sistema de visão computacional pode 
            transformar seus processos produtivos
          </VideoDescription>
          <VideoFrame>
            {/* Substitua pelo vídeo real da sua empresa quando disponível */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Vega Copilot Demo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </VideoFrame>
        </VideoContainer>
      </VideoSection>

      {/* Seção de Benefícios */}
      <BenefitsSection>
        <BenefitContent>
          <BenefitInfo className="animate-on-scroll">
            <BenefitTitle>Benefícios Reais para sua Operação</BenefitTitle>
            <BenefitDescription>
              O Vega Copilot identifica padrões e anomalias em tempo real, reduzindo 
              drasticamente o tempo de detecção de problemas e permitindo intervenções 
              muito mais rápidas. O resultado é uma operação mais eficiente, com menos 
              paradas não planejadas e maior qualidade de produção.
            </BenefitDescription>
            <BenefitDescription>
              Nossa tecnologia proprietária combina algoritmos de visão computacional 
              com inteligência artificial explicável, garantindo que todas as decisões 
              sejam rastreáveis e compreensíveis, facilitando auditorias e melhorias 
              contínuas de processo.
            </BenefitDescription>
            
            <BenefitMetrics>
              {metrics.map((metric, index) => (
                <MetricItem key={index} className="animate-on-scroll">
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{metric.label}</MetricLabel>
                </MetricItem>
              ))}
            </BenefitMetrics>
          </BenefitInfo>
          
          <BenefitImage 
            src={benefitImage} 
            alt="Automação Industrial Inteligente"
            className="animate-on-scroll"
          />
        </BenefitContent>
      </BenefitsSection>

      {/* Seção de Clientes/Parceiros */}
      <ClientsSection>
        <ClientsTitle className="animate-on-scroll">Parcerias que Geram Valor</ClientsTitle>
        <ClientsGrid>
          <ClientLogo src={logoIndab} alt="INDAB" className="animate-on-scroll" />
          <ClientLogo src={logoCopaj} alt="COPAJ" className="animate-on-scroll" />
          <ClientLogo src={logoKomatsu} alt="KOMATSU" className="animate-on-scroll" />
          <ClientLogo src={logoCaterpillar} alt="CATERPILLAR" className="animate-on-scroll" />
          <ClientLogo src={logoMahle} alt="MAHLE" className="animate-on-scroll" />
          <ClientLogo src={logoNvidia} alt="NVIDIA" className="animate-on-scroll" />
          <ClientLogo src={logoUnicamp} alt="UNICAMP" className="animate-on-scroll" />
        </ClientsGrid>
      </ClientsSection>

      {/* Seção de Depoimentos */}
      <TestimonialSection>
        <TestimonialContainer className="animate-on-scroll">
          <TestimonialImage src={testimonialImage} alt="Cliente INDAB" />
          <TestimonialContent>
            <TestimonialText>
              "O Vega Copilot nos permitiu reduzir as paradas não planejadas em 30% 
              e melhorar significativamente nossa capacidade de detecção de falhas. 
              A equipe da Vega Robotics foi excepcional durante todo o processo de 
              implementação, tornando a transição extremamente suave."
            </TestimonialText>
            <TestimonialAuthor>Gerente de Engenharia</TestimonialAuthor>
            <TestimonialCompany>INDAB Metalúrgica</TestimonialCompany>
          </TestimonialContent>
        </TestimonialContainer>
      </TestimonialSection>

      {/* CTA Final */}
      <CTASection>
        <CTAContent className="animate-on-scroll">
          <CTATitle>Pronto para Transformar sua Indústria?</CTATitle>
          <CTADescription>
            Entre em contato e descubra como o Vega Copilot pode otimizar 
            seus processos e reduzir custos operacionais
          </CTADescription>
          <CTAButtonContainer>
            <PrimaryButton to="/comecar-agora">Comece Agora</PrimaryButton>
            <SecondaryButton to="/demonstracao">Solicite uma Demo</SecondaryButton>
          </CTAButtonContainer>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default Home;