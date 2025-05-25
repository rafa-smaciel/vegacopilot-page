// src/modules/Home/containers/TechnologySection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React from 'react';
import {
  TechContainer,
  TechHeader,
  TechTitle,
  TechSubtitle,
  TechGrid,
  TechCard,
  TechImage,
  TechOverlay,
  TechContent,
  TechCardTitle,
  TechButton
} from './styles';

const TechnologySection = () => {
  // Cards baseados no modelo da Tractian: "Confiabilidade redefinida"
  const techCards = [
    {
      id: 'precision-engineering',
      image: 'https://via.placeholder.com/500x300?text=Engenharia+de+Precisão+IA',
      title: 'Engenharia de Precisão: Sensoriamento Inteligente',
      description: 'Nossa tecnologia de sensoriamento inteligente com IA explicável revoluciona o monitoramento industrial.',
      buttonText: 'Conheça nossa tecnologia',
      link: '/tecnologia'
    },
    {
      id: 'robust-integration',
      image: 'https://via.placeholder.com/500x300?text=Integração+Robusta+MES+ERP',
      title: 'Integração Robusta Com os Principais ERPs do Mercado',
      description: 'Conectividade nativa com SAP, Oracle, Siemens e outros sistemas industriais líderes de mercado.',
      buttonText: 'Conheça a lista completa',
      link: '/tecnologia#integracoes'
    },
    {
      id: 'plant-implementation',
      image: 'https://via.placeholder.com/500x300?text=Implementação+Fábrica+4+Semanas',
      title: 'Dimensionamento e Implementação na sua Planta',
      description: 'Metodologia própria para implementação em apenas 4 semanas, sem interrupção da produção.',
      buttonText: 'Conheça nossa metodologia',
      link: '/demonstracao'
    }
  ];

  return (
    <TechContainer>
      <TechHeader>
        <TechTitle>Confiabilidade redefinida, do chão de fábrica à gestão.</TechTitle>
        <TechSubtitle>
          Nossa tecnologia é desenvolvida para superar suas expectativas.
        </TechSubtitle>
      </TechHeader>

      <TechGrid>
        {techCards.map((card, index) => (
          <TechCard key={card.id} className="animate-on-scroll">
            <TechImage src={card.image} alt={card.title} />
            <TechOverlay />
            <TechContent>
              <TechCardTitle>{card.title}</TechCardTitle>
              <TechButton to={card.link}>
                {card.buttonText}
              </TechButton>
            </TechContent>
          </TechCard>
        ))}
      </TechGrid>
    </TechContainer>
  );
};

export default TechnologySection;