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
  FeaturedCase,
  FeaturedBadge,
  TestimonialSection,
  TestimonialTitle,
  TestimonialGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthorInfo,
  TestimonialAuthorImage,
  TestimonialAuthorDetails,
  TestimonialAuthorName,
  TestimonialAuthorRole,
  TestimonialCompany,
  CTASection,
  CTATitle,
  CTADescription,
  CTAButton,
  PipelineSection,
  PipelineTitle,
  PipelineDescription,
  PipelineStats
} from './styles';

import { 
  FaIndustry, 
  FaWarehouse, 
  FaCar, 
  FaTools,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaStar
} from 'react-icons/fa';

const CasosDeUso = () => {
  // Case real da INDAB como featured + outros casos
  const cases = [
    {
      icon: <FaIndustry />,
      title: 'Redução de Defeitos em Linha de Produção',
      industry: 'INDAB - Metalurgia',
      description: 'Implementação do sistema Vega Copilot para detecção automática de defeitos em peças metálicas durante o processo de fabricação. O sistema opera 24/7 com IA explicável, eliminando a necessidade de inspeção manual e reduzindo drasticamente o tempo de parada da linha.',
      results: [
        { value: '98%', label: 'de precisão na detecção de defeitos' },
        { value: '50%', label: 'de redução no tempo de inspeção' },
        { value: '35%', label: 'de diminuição nas paradas de linha' }
      ],
      featured: true,
      status: 'Em Operação desde Q2 2025'
    },
    {
      icon: <FaWarehouse />,
      title: 'Otimização de Inventário em Tempo Real',
      industry: 'Logística',
      description: 'Implementação de sistema de visão computacional para monitoramento contínuo de estoque em armazém, permitindo rastreamento automático de entrada e saída de mercadorias com processamento 100% local.',
      results: [
        { value: '99.7%', label: 'de precisão no controle de estoque' },
        { value: '40%', label: 'de redução em discrepâncias' },
        { value: '3.5h', label: 'economizadas diariamente' }
      ]
    },
    {
      icon: <FaCar />,
      title: 'Controle de Qualidade Automatizado',
      industry: 'Automotiva',
      description: 'Sistema de visão para inspeção de componentes automotivos na linha de montagem, verificando automaticamente presença, posicionamento e instalação correta de peças críticas com IA explicável.',
      results: [
        { value: '100%', label: 'de cobertura na inspeção' },
        { value: '75%', label: 'de redução em recalls' },
        { value: 'R$2.3M', label: 'economizados anualmente' }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Manutenção Preditiva de Equipamentos',
      industry: 'Manufatura Pesada',
      description: 'Monitoramento contínuo de máquinas industriais para detecção precoce de sinais de falha, permitindo intervenções de manutenção antes de paradas não planejadas com análise em tempo real.',
      results: [
        { value: '85%', label: 'de redução em falhas inesperadas' },
        { value: '45%', label: 'de aumento na vida útil' },
        { value: '24h', label: 'de aviso prévio antes de falhas' }
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Monitoramento Autônomo de Células Robotizadas',
      industry: 'Automação Industrial',
      description: 'Utilização do Vega Copilot para supervisionar células robotizadas de soldagem, identificando desvios de qualidade e intervindo automaticamente para ajustes de parâmetros em tempo real.',
      results: [
        { value: '92%', label: 'de redução em retrabalhos' },
        { value: '37%', label: 'de aumento na produtividade' },
        { value: '4.2x', label: 'ROI em apenas 6 meses' }
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Eficiência Energética em Processos Produtivos',
      industry: 'Indústria Química',
      description: 'Implementação de sistema de monitoramento inteligente para otimização do consumo energético em processos de mistura e aquecimento, reduzindo desperdícios com IA embarcada.',
      results: [
        { value: '27%', label: 'de redução no consumo energético' },
        { value: '18%', label: 'de diminuição na pegada de carbono' },
        { value: 'R$740k', label: 'de economia anual em energia' }
      ]
    }
  ];

  const testimonials = [
    {
      text: "O Vega Copilot revolucionou nossa operação de controle de qualidade. A IA explicável nos permite entender exatamente por que cada decisão é tomada, o que aumentou a confiança da equipe. Em apenas três meses, reduzimos drasticamente as paradas não planejadas e o retorno sobre o investimento superou nossas expectativas.",
      author: {
        name: "Carlos Mendes",
        role: "Diretor de Operações",
        company: "INDAB Metalúrgica",
        image: "https://via.placeholder.com/80x80?text=CM"
      }
    },
    {
      text: "A implementação foi surpreendentemente rápida - em 4 semanas estávamos operacionais. O processamento local garante que nossos dados permanecem seguros, e a interface intuitiva facilitou a adaptação da equipe. O sistema realmente aprende com nossa operação específica.",
      author: {
        name: "Ana Carolina Silva",
        role: "Gerente de Produção",
        company: "Copaj Indústria",
        image: "https://via.placeholder.com/80x80?text=ACS"
      }
    },
    {
      text: "Como parte de nossa jornada de transformação digital, o Vega Copilot foi a peça que faltava. A capacidade de integração com nossos sistemas MES existentes e a transparência dos algoritmos foram diferenciais importantes para nossa tomada de decisão.",
      author: {
        name: "Ricardo Torres",
        role: "Coordenador de Melhoria Contínua",
        company: "Grupo Mahle",
        image: "https://via.placeholder.com/80x80?text=RT"
      }
    }
  ];

  return (
    <Container>
      <HeaderSection>
        <h1>Casos de Uso Reais</h1>
        <p>Conheça histórias reais de clientes que transformaram suas operações com o Vega Copilot</p>
      </HeaderSection>

      <PipelineSection>
        <PipelineTitle>Pipeline de Implementações</PipelineTitle>
        <PipelineDescription>
          Atualmente temos 13 dispositivos em pipeline de implementação, com os dois primeiros já em operação 
          desde o segundo trimestre de 2025 na INDAB Metalúrgica
        </PipelineDescription>
        <PipelineStats>
          <div>
            <strong>13</strong>
            <span>Dispositivos em Pipeline</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Já em Operação (INDAB)</span>
          </div>
          <div>
            <strong>Q2 2025</strong>
            <span>Início das Operações</span>
          </div>
        </PipelineStats>
      </PipelineSection>

      <CasesSection>
        {cases.map((caseItem, index) => (
          <CaseCard key={index} className="animate-on-scroll" featured={caseItem.featured}>
            {caseItem.featured && <FeaturedBadge><FaStar /> Case Real - Em Operação</FeaturedBadge>}
            <CaseHeader>
              <CaseIcon featured={caseItem.featured}>{caseItem.icon}</CaseIcon>
              <CaseInfo>
                <CaseTitle>{caseItem.title}</CaseTitle>
                <CaseIndustry featured={caseItem.featured}>{caseItem.industry}</CaseIndustry>
                {caseItem.status && <div style={{fontSize: '0.875rem', color: '#10b981', fontWeight: '600', marginTop: '0.25rem'}}>{caseItem.status}</div>}
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

      <TestimonialSection>
        <TestimonialTitle>O que nossos clientes dizem</TestimonialTitle>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} className="animate-on-scroll">
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthorInfo>
                <TestimonialAuthorImage src={testimonial.author.image} alt={testimonial.author.name} />
                <TestimonialAuthorDetails>
                  <TestimonialAuthorName>{testimonial.author.name}</TestimonialAuthorName>
                  <TestimonialAuthorRole>{testimonial.author.role}</TestimonialAuthorRole>
                  <TestimonialCompany>{testimonial.author.company}</TestimonialCompany>
                </TestimonialAuthorDetails>
              </TestimonialAuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialSection>

      <CTASection>
        <CTATitle>Pronto para criar seu próprio caso de sucesso?</CTATitle>
        <CTADescription>Vamos trabalhar juntos para adaptar o Vega Copilot aos desafios específicos da sua indústria, com implementação em apenas 4 semanas.</CTADescription>
        <CTAButton to="/demonstracao">Solicite um Piloto</CTAButton>
      </CTASection>
    </Container>
  );
};

export default CasosDeUso;