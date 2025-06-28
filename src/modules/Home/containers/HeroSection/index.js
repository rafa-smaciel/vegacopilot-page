// src/modules/Home/containers/HeroSection/index.js - COM VÍDEO DA TRACTIAN
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
  VideoStats
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
            
            {/* Vídeo da Tractian */}
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            >
              <source src="https://imgix.tractian.com/videos/homepage/US-Web-Header-Home-V3-Optimized.mp4" type="video/mp4" />
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
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;