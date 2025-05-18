// src/modules/Empresa/index.js
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
  MemberBio
} from './styles';
import { 
  FaHandshake, 
  FaLightbulb, 
  FaRocket, 
  FaUsers 
} from 'react-icons/fa';

const Empresa = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Inovação',
      description: 'Buscamos constantemente novas formas de resolver os desafios mais complexos da indústria brasileira.'
    },
    {
      icon: <FaHandshake />,
      title: 'Colaboração',
      description: 'Trabalhamos lado a lado com nossos clientes para garantir que nossas soluções atendam às suas necessidades específicas.'
    },
    {
      icon: <FaRocket />,
      title: 'Excelência',
      description: 'Comprometidos com os mais altos padrões de qualidade em tudo o que fazemos.'
    },
    {
      icon: <FaUsers />,
      title: 'Pessoas em Primeiro Lugar',
      description: 'Acreditamos que a tecnologia deve servir às pessoas, simplificando seu trabalho e melhorando sua qualidade de vida.'
    }
  ];

  const team = [
    {
      image: 'https://via.placeholder.com/300x300?text=Rafael',
      name: 'Eng. Rafael',
      role: 'Coordenação P&D e Vendas',
      bio: 'Engenheiro e Especialista em IA e Big Data pela USP, com 15 anos de experiência na indústria. Pesquisador de Mestrado com foco em aplicações de visão computacional.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=Danilo',
      name: 'MSc. Danilo',
      role: 'Integração e Hardware',
      bio: 'Doutorando e Mestre em Engenharia Elétrica pela UFABC. Experiência em desenvolvimento elétrico, instalação e startup de sistemas industriais.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=Dr.+Leduino',
      name: 'Dr. Leduino',
      role: 'Orientação Acadêmica',
      bio: 'Doutor e Mestre em Computação pela Unicamp. Orientador de trabalhos de pesquisa de mestrado com foco em inteligência artificial aplicada.'
    },
    {
      image: 'https://via.placeholder.com/300x300?text=Andrei',
      name: 'MSc. Andrei',
      role: 'Apoio Estratégico',
      bio: 'Mentor da Aceleração Nvidia Inception para a Vega Robotics. Experiência em machine learning e estratégias de mercado para startups de tecnologia.'
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Nossa Empresa</h1>
        <p>Conheça a história e a equipe por trás da Vega Robotics</p>
      </HeaderSection>

      <AboutSection>
        <AboutContent>
          <AboutImage src="https://via.placeholder.com/600x400?text=Vega+Robotics" alt="Vega Robotics" />
          <AboutText>
            <h2>Engenharia Inteligente para uma Produção Eficiente</h2>
            <p>
              A Vega Robotics nasceu da visão de transformar a indústria brasileira através da aplicação de tecnologias avançadas de visão computacional e inteligência artificial. Fundada por especialistas em engenharia e computação, nossa empresa está comprometida em resolver os desafios mais complexos de eficiência operacional.
            </p>
            <p>
              Somos membros do programa Nvidia Inception e incubados pela Incamp da Unicamp, o que nos permite ter acesso às tecnologias mais avançadas e ao conhecimento científico de ponta para desenvolver soluções inovadoras.
            </p>
            <p>
              Nossa missão é clara: transformar o Vega Copilot em um padrão de monitoramento fabril no Brasil, oferecendo tecnologia nacional explicável, acessível e eficiente que impulsione a competitividade industrial brasileira.
            </p>
          </AboutText>
        </AboutContent>
      </AboutSection>

      <ValuesSection>
        <ValuesTitle>Nossos Valores</ValuesTitle>
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
        <TeamTitle>Conheça Nossa Equipe</TeamTitle>
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
    </Container>
  );
};

export default Empresa;