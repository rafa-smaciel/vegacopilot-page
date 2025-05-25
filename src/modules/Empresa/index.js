// src/modules/Empresa/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React from 'react';
import {
  Container,
  HeaderSection,
  AboutSection,
  AboutContent,
  AboutImage,
  AboutText,
  ValuesSection,
  ValuesTitle,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  TeamSection,
  TeamTitle,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberBio,
  PartnershipsSection,
  PartnershipsTitle,
  PartnershipsGrid,
  PartnershipCard,
  PartnershipLogo,
  PartnershipName,
  PartnershipDescription
} from './styles';
import { 
  FaLightbulb, 
  FaHandshake, 
  FaRocket, 
  FaUsers,
  FaShieldAlt,
  FaBrain
} from 'react-icons/fa';

const Empresa = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Inovação Explicável',
      description: 'Desenvolvemos tecnologia de ponta com transparência total. Nossa IA explicável garante que você entenda cada decisão tomada pelo sistema.'
    },
    {
      icon: <FaHandshake />,
      title: 'Parceria de Longo Prazo',
      description: 'Trabalhamos lado a lado com nossos clientes, implementando soluções personalizadas e oferecendo suporte contínuo para garantir o sucesso.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança e Privacidade',
      description: 'Edge Computing 100% local garante que seus dados nunca saem da fábrica. Conformidade total com LGPD e regulamentações industriais.'
    },
    {
      icon: <FaBrain />,
      title: 'Excelência Técnica',
      description: 'Equipe especializada com Mestrado e Doutorado, 15 anos de experiência industrial e mentoria do programa NVIDIA Inception.'
    },
    {
      icon: <FaRocket />,
      title: 'Implementação Rápida',
      description: 'Operacional em apenas 4 semanas, com ROI comprovado em menos de 12 meses. Integração sem interrupção da produção.'
    },
    {
      icon: <FaUsers />,
      title: 'Foco no Cliente',
      description: 'Cada solução é adaptada às necessidades específicas do cliente. Suporte técnico especializado e melhoria contínua.'
    }
  ];

  // Equipe real baseada no pitch
  const team = [
    {
      image: 'https://via.placeholder.com/300x300?text=MSc.+Rafael',
      name: 'MSc. (c) Eng. Rafael',
      role: 'P&D e Vendas',
      bio: 'Mestrando em Inovação Tecnológica - UNIFESP. Especialista em IA e Big Data USP. Engenheiro com 15 anos de experiência na indústria. Responsável técnico CREA-SP.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=MSc.+Danilo',
      name: 'MSc. Danilo',
      role: 'Integração e Hardware',
      bio: 'Doutorando e Mestre em Engenharia Elétrica UFABC. Especialista em desenvolvimento elétrico, instalação e startup de sistemas industriais. Foco em hardware embarcado.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=Dr.+Leduino',
      name: 'Dr. Leduino',
      role: 'Orientação Acadêmica',
      bio: 'Doutor e Mestre em Computação pela Unicamp. Orientador de trabalhos de pesquisa de mestrado com foco em inteligência artificial aplicada e visão computacional.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=MSc.+Andrei',
      name: 'MSc. Andrei',
      role: 'Apoio Estratégico',
      bio: 'Mentor da Aceleração NVIDIA Inception para a Vega Robotics. Experiência em machine learning e estratégias de mercado para startups de tecnologia.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=Renata',
      name: 'Renata Bittencourt',
      role: 'Apoio Estratégico',
      bio: 'Mentora UPLab Startups. Especialista em desenvolvimento de negócios e estratégias de crescimento para empresas de base tecnológica.'
    }
  ];

  // Parcerias reais baseadas no pitch
  const partnerships = [
    {
      logo: 'https://via.placeholder.com/200x100?text=NVIDIA+Inception',
      name: 'NVIDIA Inception Program',
      description: 'Programa de aceleração que nos dá acesso às tecnologias mais avançadas de IA e suporte técnico especializado da NVIDIA.'
    },
    {
      logo: 'https://via.placeholder.com/200x100?text=INCAMP+Unicamp',
      name: 'INCAMP - Unicamp',
      description: 'Incubadora de empresas de base tecnológica da Unicamp, proporcionando ambiente de inovação e acesso a pesquisas de ponta.'
    },
    {
      logo: 'https://via.placeholder.com/200x100?text=SENAI',
      name: 'SENAI',
      description: 'Parceria estratégica para desenvolvimento de soluções aplicadas à indústria brasileira e capacitação técnica especializada.'
    },
    {
      logo: 'https://via.placeholder.com/200x100?text=UPLAB',
      name: 'UPLab',
      description: 'Laboratório de inovação que oferece mentoria estratégica e suporte no desenvolvimento de tecnologias disruptivas.'
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossa Empresa</h1>
        <p>Engenharia Inteligente para uma Produção Eficiente</p>
      </HeaderSection>

      <AboutSection>
        <AboutContent>
          <AboutImage src="https://via.placeholder.com/600x400?text=Vega+Robotics+Team" alt="Vega Robotics" />
          <AboutText>
            <h2>Inteligência Artificial Embarcada para a Indústria 5.0</h2>
            <p>
              A Vega Robotics nasceu da visão de transformar a indústria brasileira através da aplicação de 
              tecnologias avançadas de IA explicável e Edge Computing. Fundada por especialistas com Mestrado 
              e Doutorado, nossa empresa está comprometida em resolver os desafios de eficiência operacional 
              com soluções 100% transparentes e seguras.
            </p>
            <p>
              Somos membros do <strong>programa NVIDIA Inception</strong> e incubados pela <strong>INCAMP da Unicamp</strong>, 
              o que nos permite ter acesso às tecnologias mais avançadas e ao conhecimento científico de ponta. 
              Com <strong>patente registrada (BR 20 2024 027241 8)</strong> e responsável técnico CREA-SP, 
              oferecemos soluções robustas e confiáveis.
            </p>
            <p>
              <strong>Nossa missão:</strong> Transformar o Vega Copilot em um padrão de monitoramento fabril 
              no Brasil, oferecendo tecnologia nacional explicável, acessível e eficiente que impulsione 
              a competitividade industrial brasileira com <strong>30-50% de redução em paradas não planejadas</strong> 
              e <strong>ROI em menos de 12 meses</strong>.
            </p>
            <p>
              Atualmente, temos <strong>13 dispositivos em pipeline de implementação</strong>, com os dois 
              primeiros já em operação desde o segundo trimestre de 2025 na INDAB Metalúrgica.
            </p>
          </AboutText>
        </AboutContent>
      </AboutSection>

      <ValuesSection>
        <ValuesTitle>Nossos Valores e Diferenciais</ValuesTitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <TeamSection>
        <TeamTitle>Conheça Nossa Equipe Especializada</TeamTitle>
        <TeamGrid>
          {team.map((member, index) => (
            <TeamMember key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>

      <PartnershipsSection>
        <PartnershipsTitle>Parcerias Estratégicas</PartnershipsTitle>
        <PartnershipsGrid>
          {partnerships.map((partnership, index) => (
            <PartnershipCard key={index}>
              <PartnershipLogo src={partnership.logo} alt={partnership.name} />
              <PartnershipName>{partnership.name}</PartnershipName>
              <PartnershipDescription>{partnership.description}</PartnershipDescription>
            </PartnershipCard>
          ))}
        </PartnershipsGrid>
      </PartnershipsSection>
    </Container>
  );
};

export default Empresa;