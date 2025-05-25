// src/modules/Home/containers/HeroSection/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
// eslint-disable-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroVisual,
  SustainabilityBadge,
  HeroTitle,
  HeroSubtitle,
  HeroStats,
  Stat,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  VideoContainer,
  VideoOverlay,
  VideoPlayButton,
  VideoStats,
  MockupContainer,
  MockupContent
} from './styles';

import { 
  FaBrain, 
  FaPlay, 
  FaPause,
  FaRocket,
  FaIndustry,
  FaLeaf
} from 'react-icons/fa';

// Importar o vídeo local
import vegaHeroVideo from '../../../../assets/vega-hero.mp4';

const HeroSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Stats baseados nos dados reais do Vega Copilot
  const stats = [
    { value: '98%', label: 'Precisão IA' },
    { value: '-50%', label: 'Downtime' },
    { value: '7x', label: 'ROI em 12 meses' }
  ];

  const handleVideoToggle = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <SustainabilityBadge>
            <FaBrain />
            IA Industrial Eleita pela Forbes AI 50
          </SustainabilityBadge>
          
          <HeroTitle>
            A <span className="highlight">Inteligência Artificial</span><br />
            Industrial Eleita pela<br />
            Forbes AI 50
          </HeroTitle>
          
          <HeroSubtitle>
            Monitore máquinas, previna falhas e aumente eficiência com IA 100% explicável. 
            Tecnologia nacional que reduz custos e desperdícios industriais com processamento local.
          </HeroSubtitle>
          
          <HeroStats>
            {stats.map((stat, index) => (
              <Stat key={index}>
                <span className="number">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </Stat>
            ))}
          </HeroStats>

          <HeroButtons>
            <PrimaryButton to="/demonstracao">
              <FaRocket />
              Solicitar Diagnóstico
            </PrimaryButton>
            <SecondaryButton to="/casos-de-uso">
              <FaPlay />
              Ver Demo
            </SecondaryButton>
          </HeroButtons>
        </HeroText>
        
        <HeroVisual>
          <VideoContainer>
            <VideoOverlay>
              <VideoPlayButton onClick={handleVideoToggle}>
                {videoPlaying ? <FaPause /> : <FaPlay />}
              </VideoPlayButton>
            </VideoOverlay>
            
            {/* Vídeo local do Vega Copilot */}
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              <source src={vegaHeroVideo} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            
            <VideoStats>
              <div className="stat">
                <span className="label">Uptime:</span>
                <span className="value">99.2%</span>
              </div>
              <div className="stat">
                <span className="label">Local:</span>
                <span className="value">INDAB</span>
              </div>
              <div className="stat">
                <span className="label">Dispositivos:</span>
                <span className="value">13 Pipeline</span>
              </div>
            </VideoStats>
          </VideoContainer>

          {/* Mockup alternativo caso não tenha vídeo */}
          <MockupContainer style={{ display: 'none' }}>
            <MockupContent>
              <div className="title">
                <FaIndustry />
                Vega Copilot Dashboard
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="value">98.7%</div>
                  <div className="label">Precisão</div>
                </div>
                <div className="metric">
                  <div className="value">24/7</div>
                  <div className="label">Monitoramento</div>
                </div>
                <div className="metric">
                  <div className="value">-45%</div>
                  <div className="label">Falhas</div>
                </div>
                <div className="metric">
                  <div className="value">100%</div>
                  <div className="label">Local</div>
                </div>
              </div>
              <div className="status">
                <FaLeaf />
                Sistema Operacional - INDAB Metalúrgica
              </div>
            </MockupContent>
          </MockupContainer>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;