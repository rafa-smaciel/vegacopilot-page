// src/modules/Home/containers/CaseStudySection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React, { useState } from 'react';
import {
  CaseStudyContainer,
  CaseStudyContent,
  SectionTitle,
  TabsContainer,
  TabButton,
  TabUnderline,
  CaseContent,
  CaseInfo,
  CaseTitle,
  CaseDescription,
  CaseQuote,
  CaseAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  AuthorCompany,
  CaseLink,
  CaseVisual,
  CaseImage,
  CaseMetrics,
  MetricCard,
  MetricValue,
  MetricLabel
} from './styles';

import { FaArrowRight } from 'react-icons/fa';

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Casos de estudo baseados nos dados reais do Vega Copilot
  const caseStudies = [
    {
      id: 'indab',
      company: 'INDAB',
      logo: 'https://via.placeholder.com/120x60?text=INDAB',
      title: 'Como a maior metalúrgica do ABC paulista gera Eficiência através do monitoramento e gestão',
      description: 'A INDAB Metalúrgica implementou o Vega Copilot para monitoramento contínuo de sua linha de produção, resultando em redução significativa de paradas não planejadas e aumento da precisão na detecção de defeitos.',
      quote: '"A grande diferença é que agora com os sensores os problemas nos procuram, essa é a grande facilitador, temos muito mais segurança que teremos um diagnóstico em tempo hábil para atuar antes da falha funcional dos equipamentos."',
      author: {
        name: 'Carlos Mendes',
        role: 'Diretor de Operações',
        company: 'INDAB Metalúrgica',
        avatar: 'https://via.placeholder.com/80x80?text=CM'
      },
      image: 'https://via.placeholder.com/600x400?text=INDAB+Metalúrgica+Case',
      metrics: [
        { value: '98%', label: 'Precisão na detecção de defeitos' },
        { value: '50%', label: 'Redução no tempo de inspeção' }
      ],
      linkText: 'Leia o caso de estudo completo'
    },
    {
      id: 'copaj',
      company: 'COPAJ',
      logo: 'https://via.placeholder.com/120x60?text=COPAJ',
      title: 'Como a Copaj Indústria otimizou sua produção com IA explicável e monitoramento preditivo',
      description: 'A Copaj implementou soluções de monitoramento preditivo que permitiram antecipar falhas e otimizar processos produtivos com IA totalmente transparente.',
      quote: '"A implementação foi surpreendentemente rápida - em 4 semanas estávamos operacionais. O processamento local garante que nossos dados permanecem seguros, e a interface intuitiva facilitou a adaptação da equipe."',
      author: {
        name: 'Ana Carolina Silva', 
        role: 'Gerente de Produção',
        company: 'Copaj Indústria',
        avatar: 'https://via.placeholder.com/80x80?text=ACS'
      },
      image: 'https://via.placeholder.com/600x400?text=Copaj+Indústria+Case',
      metrics: [
        { value: '92%', label: 'Redução em retrabalhos' },
        { value: '37%', label: 'Aumento na produtividade' }
      ],
      linkText: 'Leia o caso de estudo completo'
    },
    {
      id: 'mahle',
      company: 'MAHLE',
      logo: 'https://via.placeholder.com/120x60?text=MAHLE',
      title: 'Como o Grupo Mahle transformou sua manutenção com tecnologia de IA embarcada',
      description: 'O Grupo Mahle adotou nossa solução de IA embarcada para transformação digital de seus processos de manutenção, integrando com sistemas MES existentes.',
      quote: '"Como parte de nossa jornada de transformação digital, o Vega Copilot foi a peça que faltava. A capacidade de integração com nossos sistemas MES existentes e a transparência dos algoritmos foram diferenciais importantes."',
      author: {
        name: 'Ricardo Torres',
        role: 'Coordenador de Melhoria Contínua', 
        company: 'Grupo Mahle',
        avatar: 'https://via.placeholder.com/80x80?text=RT'
      },
      image: 'https://via.placeholder.com/600x400?text=Grupo+Mahle+Case',
      metrics: [
        { value: '4.2x', label: 'ROI em apenas 6 meses' },
        { value: '35%', label: 'Redução nas paradas de linha' }
      ],
      linkText: 'Leia o caso de estudo completo'
    }
  ];

  const currentCase = caseStudies[activeTab];

  return (
    <CaseStudyContainer>
      <CaseStudyContent>
        <SectionTitle>Explore nossos Casos de Estudo</SectionTitle>
        
        <TabsContainer>
          {caseStudies.map((caseStudy, index) => (
            <TabButton 
              key={caseStudy.id}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              <img src={caseStudy.logo} alt={caseStudy.company} />
            </TabButton>
          ))}
          <TabUnderline activeIndex={activeTab} totalTabs={caseStudies.length} />
        </TabsContainer>

        <CaseContent className="animate-on-scroll">
          <CaseInfo>
            <CaseTitle>{currentCase.title}</CaseTitle>
            <CaseDescription>{currentCase.description}</CaseDescription>
            
            <CaseQuote>"{currentCase.quote}"</CaseQuote>
            
            <CaseAuthor>
              <AuthorAvatar src={currentCase.author.avatar} alt={currentCase.author.name} />
              <AuthorInfo>
                <AuthorName>{currentCase.author.name}</AuthorName>
                <AuthorRole>{currentCase.author.role}</AuthorRole>
                <AuthorCompany>{currentCase.author.company}</AuthorCompany>
              </AuthorInfo>
            </CaseAuthor>

            <CaseLink to="/casos-de-uso">
              {currentCase.linkText}
              <FaArrowRight />
            </CaseLink>
          </CaseInfo>

          <CaseVisual>
            <CaseImage src={currentCase.image} alt={currentCase.title} />
            <CaseMetrics>
              {currentCase.metrics.map((metric, index) => (
                <MetricCard key={index}>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{metric.label}</MetricLabel>
                </MetricCard>
              ))}
            </CaseMetrics>
          </CaseVisual>
        </CaseContent>
      </CaseStudyContent>
    </CaseStudyContainer>
  );
};

export default CaseStudySection;