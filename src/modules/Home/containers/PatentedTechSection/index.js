// src/modules/Home/containers/PatentedTechSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React from 'react';
import {
  TechContainer,
  TechContent,
  TechHeader,
  TechBadge,
  TechTitle,
  TechSubtitle,
  TechLayersContainer,
  TechLayer,
  LayerIcon,
  LayerNumber,
  LayerTitle,
  LayerDescription,
  TechPatentInfo,
  PatentBadge,
  PatentText,
  TechVisual,
  LayersAnimation
} from './styles';

import { 
  FaEye,
  FaChartLine,
  FaBrain,
  FaShieldAlt,
  FaAward
} from 'react-icons/fa';

const PatentedTechSection = () => {
  // Camadas da tecnologia baseadas no PDF do Vega Copilot
  const techLayers = [
    {
      id: 'auto-diagnosis',
      number: '1ª',
      title: 'Auto Diagnóstico',
      description: 'Parâmetros ajustados automaticamente, avaliando as tendências de falha do ativo ao longo do tempo.',
      icon: <FaEye />,
      color: '#059669'
    },
    {
      id: 'comparative-analysis',
      number: '2ª',
      title: 'Análise Comparativa',
      description: 'Comparação do comportamento do ativo com equipamentos semelhantes, compartilhando conhecimento entre ativos da mesma planta.',
      icon: <FaChartLine />,
      color: '#10b981'
    },
    {
      id: 'assisted-learning',
      number: '3ª',
      title: 'Aprendizado Assistido',
      description: 'Com aprendizado reforçado por humanos, cada manutenidor opera do seu jeito, ajustando as tolerâncias de falhas de forma contínua.',
      icon: <FaBrain />,
      color: '#22c55e'
    }
  ];

  return (
    <TechContainer>
      <TechContent>
        <TechHeader>
          <TechBadge>
            <FaAward />
            Tecnologia Patenteada
          </TechBadge>
          
          <TechTitle>
            Tecnologia Patenteada:<br />
            IA multicamadas
          </TechTitle>
          
          <TechSubtitle>
            Eleita pela Forbes AI 50 como o modelo industrial 
            mais avançado, pronta para gerenciar seus ativos.
          </TechSubtitle>
        </TechHeader>

        <TechLayersContainer>
          <TechVisual>
            <LayersAnimation>
              {techLayers.map((layer, index) => (
                <div 
                  key={layer.id} 
                  className={`layer-visual layer-${index + 1}`}
                  style={{ '--layer-color': layer.color }}
                />
              ))}
            </LayersAnimation>
          </TechVisual>

          <div className="layers-content">
            {techLayers.map((layer, index) => (
              <TechLayer 
                key={layer.id} 
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <LayerIcon style={{ background: layer.color }}>
                  {layer.icon}
                </LayerIcon>
                
                <div className="layer-content">
                  <LayerNumber>{layer.number} CAMADA</LayerNumber>
                  <LayerTitle>{layer.title}</LayerTitle>
                  <LayerDescription>{layer.description}</LayerDescription>
                </div>
              </TechLayer>
            ))}
          </div>
        </TechLayersContainer>

        <TechPatentInfo>
          <PatentBadge>
            <FaShieldAlt />
            Tecnologia Protegida
          </PatentBadge>
          <PatentText>
            <strong>Patente BR 20 2024 027241 8</strong> • 
            Responsável Técnico CREA-SP: 5071508290 • 
            Vega Robotics Tecnologia e Inovação Ltda.
          </PatentText>
        </TechPatentInfo>
      </TechContent>
    </TechContainer>
  );
};

export default PatentedTechSection;