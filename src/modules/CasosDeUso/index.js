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
  CTAButton
} from './styles';

import { 
  FaIndustry, 
  FaWarehouse, 
  FaCar, 
  FaTools,
  FaRobot,
  FaChartLine
} from 'react-icons/fa';

const CasosDeUso = () => {
  const cases = [
    {
      icon: <FaIndustry />,
      title: 'Redução de Defeitos em Linha de Produção',
      industry: 'Metalurgia',
      description: 'Implementação do sistema Vega Copilot para detecção automática de defeitos em peças metálicas durante o processo de fabricação, eliminando a necessidade de inspeção manual e reduzindo o tempo de parada da linha.',
      results: [
        { value: '98%', label: 'de precisão na detecção de defeitos' },
        { value: '65%', label: 'de redução no tempo de inspeção' },
        { value: '30%', label: 'de diminuição nas paradas de linha' }
      ]
    },
    {
      icon: <FaWarehouse />,
      title: 'Otimização de Inventário em Tempo Real',
      industry: 'Logística',
      description: 'Implementação de sistema de visão computacional para monitoramento contínuo de estoque em armazém, permitindo rastreamento automático de entrada e saída de mercadorias e prevenção de erros de inventário.',
      results: [
        { value: '99.7%', label: 'de precisão no controle de estoque' },
        { value: '40%', label: 'de redução em discrepâncias de inventário' },
        { value: '3.5h', label: 'economizadas diariamente em verificações manuais' }
      ]
    },
    {
      icon: <FaCar />,
      title: 'Controle de Qualidade Automatizado',
      industry: 'Automotiva',
      description: 'Sistema de visão para inspeção de componentes automotivos na linha de montagem, verificando automaticamente presença, posicionamento e instalação correta de peças críticas antes da finalização do produto.',
      results: [
        { value: '100%', label: 'de cobertura na inspeção de veículos' },
        { value: '75%', label: 'de redução em recalls por defeitos' },
        { value: 'R$2.3M', label: 'economizados anualmente' }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Manutenção Preditiva de Equipamentos',
      industry: 'Manufatura Pesada',
      description: 'Monitoramento contínuo de máquinas industriais para detecção precoce de sinais de falha, permitindo intervenções de manutenção antes de paradas não planejadas.',
      results: [
        { value: '85%', label: 'de redução em falhas inesperadas' },
        { value: '45%', label: 'de aumento na vida útil dos equipamentos' },
        { value: '24h', label: 'de aviso prévio antes de falhas críticas' }
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Monitoramento Autônomo de Células Robotizadas',
      industry: 'Automação Industrial',
      description: 'Utilização do Vega Copilot para supervisionar células robotizadas de soldagem, identificando desvios de qualidade e intervindo automaticamente para ajustes de parâmetros em tempo real.',
      results: [
        { value: '92%', label: 'de redução em retrabalhos de soldagem' },
        { value: '37%', label: 'de aumento na produtividade da célula' },
        { value: '4.2x', label: 'ROI em apenas 6 meses de operação' }
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Eficiência Energética em Processos Produtivos',
      industry: 'Indústria Química',
      description: 'Implementação de sistema de monitoramento inteligente para otimização do consumo energético em processos de mistura e aquecimento, reduzindo desperdícios e custos operacionais.',
      results: [
        { value: '27%', label: 'de redução no consumo energético' },
        { value: '18%', label: 'de diminuição na pegada de carbono' },
        { value: 'R$740k', label: 'de economia anual em energia' }
      ]
    }
  ];

  const testimonials = [
    {
      text: "O Vega Copilot revolucionou nossa operação de controle de qualidade. Em apenas três meses, reduzimos drasticamente as paradas não planejadas e conseguimos identificar padrões de falha que anteriormente passavam despercebidos. O retorno sobre o investimento superou nossas expectativas.",
      author: {
        name: "Carlos Mendes",
        role: "Diretor de Operações",
        company: "Indab Metalúrgica",
        image: "https://via.placeholder.com/80x80?text=CM"
      }
    },
    {
      text: "A implementação do sistema foi surpreendentemente rápida e a adaptação da equipe foi natural. A interface intuitiva e os alertas em tempo real mudaram completamente nossa abordagem para manutenção, passando de reativa para verdadeiramente preditiva.",
      author: {
        name: "Ana Carolina Silva",
        role: "Gerente de Produção",
        company: "Copaj Indústria",
        image: "https://via.placeholder.com/80x80?text=ACS"
      }
    },
    {
      text: "Como parte de nossa jornada de transformação digital, o Vega Copilot foi a peça que faltava para conectar nossos sistemas legados com tecnologias de ponta. O suporte técnico e a capacidade de personalização para nosso contexto específico foram diferenciais importantes.",
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
        <h1>Casos de Uso</h1>
        <p>Conheça histórias reais de clientes que transformaram suas operações com nossas soluções</p>
      </HeaderSection>

      <CasesSection>
        {cases.map((caseItem, index) => (
          <CaseCard key={index} className="animate-on-scroll">
            <CaseHeader>
              <CaseIcon>{caseItem.icon}</CaseIcon>
              <CaseInfo>
                <CaseTitle>{caseItem.title}</CaseTitle>
                <CaseIndustry>{caseItem.industry}</CaseIndustry>
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
        <CTADescription>Vamos trabalhar juntos para adaptar nossas soluções aos desafios específicos da sua indústria.</CTADescription>
        <CTAButton to="/demonstracao">Solicite uma Demonstração</CTAButton>
      </CTASection>
    </Container>
  );
};

export default CasosDeUso;