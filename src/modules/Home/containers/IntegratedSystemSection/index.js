// src/modules/Home/containers/IntegratedSystemSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React, { useState, useEffect } from 'react';
import {
  SystemContainer,
  SystemContent,
  SystemText,
  SystemTitle,
  SystemDescription,
  SystemCarousel,
  CarouselContainer,
  CarouselTrack,
  FunctionCard,
  FunctionImage,
  FunctionBadge,
  FunctionTitle,
  FunctionDescription,
  CarouselControls,
  ControlButton,
  DotsContainer,
  Dot
} from './styles';

import { 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';

const IntegratedSystemSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Funcionalidades baseadas no carrossel da Tractian adaptadas para Vega Copilot
  const functions = [
    {
      id: 'always-listening',
      image: 'https://via.placeholder.com/400x300?text=Always+Listening+IA',
      badge: 'ALWAYS LISTENING™',
      title: 'Detecção de movimento para equipamentos intermitentes.',
      description: 'IA avançada monitora equipamentos mesmo quando não estão em operação contínua, detectando padrões de falha únicos.'
    },
    {
      id: 'auto-diagnosis',
      image: 'https://via.placeholder.com/400x300?text=Auto+Diagnosis+AI',
      badge: 'AUTO DIAGNOSIS™',
      title: 'Detecção de +75 modos de falha.',
      description: 'Sistema especialista identifica automaticamente mais de 75 tipos diferentes de falhas antes que se tornem críticas.'
    },
    {
      id: 'work-order-management',
      image: 'https://via.placeholder.com/400x300?text=Gestão+Ordens+Serviço',
      badge: 'GESTÃO DE ORDENS DE SERVIÇO',
      title: 'OSs móveis para reparos em tempo real.',
      description: 'Geração automática de ordens de serviço com priorização inteligente e distribuição para equipes móveis.'
    },
    {
      id: 'health-indicators',
      image: 'https://via.placeholder.com/400x300?text=Indicadores+Saúde+Máquinas',
      badge: 'INDICADORES DE SAÚDE DAS MÁQUINAS',
      title: 'Acompanhe tendências de falhas antes que se tornem alertas.',
      description: 'Dashboard intuitivo mostra a evolução da saúde dos equipamentos com predições precisas de manutenção.'
    },
    {
      id: 'asset-gpt',
      image: 'https://via.placeholder.com/400x300?text=Vega+GPT+Industrial',
      badge: 'VEGA GPT',
      title: 'Complete dados em manuais e catálogos automaticamente.',
      description: 'IA generativa especializada em dados industriais para preenchimento automático de documentação técnica.'
    },
    {
      id: 'supervision',
      image: 'https://via.placeholder.com/400x300?text=Supervisório+Inteligente',
      badge: 'SUPERVISÓRIO',
      title: 'Gerencie toda sua fábrica em uma única plataforma.',
      description: 'Painel unificado para monitoramento completo de todos os equipamentos e processos da planta industrial.'
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === functions.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, functions.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Reativa o auto-play após 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? functions.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === functions.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Calcula quais cards mostrar (mostra 3 cards no desktop, 1 no mobile)
  const getVisibleCards = () => {
    const visibleCount = window.innerWidth <= 768 ? 1 : 3;
    const cards = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % functions.length;
      cards.push(functions[index]);
    }
    
    return cards;
  };

  return (
    <SystemContainer>
      <SystemContent>
        <SystemText>
          <SystemTitle>
            Sua planta sob controle: monitoramento e operação integradas.
          </SystemTitle>
          <SystemDescription>
            Conecte toda sua planta, do monitoramento de condição das máquinas à gestão de ativos. 
            Aumente a visibilidade de dados, maximize a eficiência e antecipe-se às falhas antes que seja tarde.
          </SystemDescription>
        </SystemText>

        <SystemCarousel>
          <CarouselContainer 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <CarouselControls>
              <ControlButton onClick={goToPrev} aria-label="Anterior">
                <FaChevronLeft />
              </ControlButton>
              <ControlButton onClick={goToNext} aria-label="Próximo">
                <FaChevronRight />
              </ControlButton>
            </CarouselControls>

            <CarouselTrack currentIndex={currentIndex}>
              {functions.map((func, index) => (
                <FunctionCard key={func.id} className="animate-on-scroll">
                  <FunctionImage src={func.image} alt={func.title} />
                  <FunctionBadge>{func.badge}</FunctionBadge>
                  <FunctionTitle>{func.title}</FunctionTitle>
                  <FunctionDescription>{func.description}</FunctionDescription>
                </FunctionCard>
              ))}
            </CarouselTrack>

            <DotsContainer>
              {functions.map((_, index) => (
                <Dot 
                  key={index}
                  active={index === currentIndex}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </DotsContainer>
          </CarouselContainer>
        </SystemCarousel>
      </SystemContent>
    </SystemContainer>
  );
};

export default IntegratedSystemSection;