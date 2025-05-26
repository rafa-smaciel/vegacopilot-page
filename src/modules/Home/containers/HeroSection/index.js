// src/modules/Home/containers/HeroSection/index.js
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
  FaLeaf,
  FaEye,
  FaCog
} from 'react-icons/fa';

// Placeholder para vídeo do VIXEM - substitua pelo caminho correto quando disponível
import vixemHeroVideo from '../../../../assets/vixem-hero.mp4';

const HeroSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Stats baseados nos dados reais do VIXEM
  const stats = [
    { value: '98%', label: 'Precisão IA' },
    { value: '-50%', label: 'Paradas não planejadas' },
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
            <FaEye />
            Powered by NVIDIA Inception Program
          </SustainabilityBadge>
          
          <HeroTitle>
            <span className="highlight">VIXEM</span> - Vision Expert<br />
            for Manufacturing que prepara<br />
            sua indústria para o futuro
          </HeroTitle>
          
          <HeroSubtitle>
            Monitore equipamentos, previna falhas e otimize processos com visão computacional 
            e IA explicável. Solução 100% nacional com processamento local e integração ágil.
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
            <SecondaryButton to="/demo">
              <FaPlay />
              Ver VIXEM em Ação
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
            
            {/* Placeholder de vídeo do VIXEM - substitua pela URL ou caminho correto */}
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              poster="https://via.placeholder.com/800x450/C41E3A/FFFFFF?text=VIXEM+Demo"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              {/* Descomente e ajuste o caminho quando o vídeo estiver disponível */}
              <source src={vixemHeroVideo} type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            
            <VideoStats>
              <div className="stat">
                <span className="label">Uptime:</span>
                <span className="value">99.2%</span>
              </div>
              <div className="stat">
                <span className="label">Cliente:</span>
                <span className="value">INDAB</span>
              </div>
              <div className="stat">
                <span className="label">Dispositivos:</span>
                <span className="value">13 Pipeline</span>
              </div>
            </VideoStats>
          </VideoContainer>

          {/* Mockup alternativo para demonstração do VIXEM - ative removendo display: 'none' */}
          <MockupContainer style={{ display: 'none' }}>
            <MockupContent>
              <div className="title">
                <FaIndustry />
                VIXEM Dashboard
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
                  <div className="label">On-Premise</div>
                </div>
              </div>
              <div className="status">
                <FaCog />
                Sistema Operacional - Indústria Metalúrgica
              </div>
            </MockupContent>
          </MockupContainer>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;