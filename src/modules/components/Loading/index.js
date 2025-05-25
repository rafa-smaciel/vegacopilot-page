// src/modules/components/Loading/index.js
// import { Link } from 'react-router-dom'; // ainda não usado
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de rotação para o spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container centralizado para toda a tela
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a2e;
`;

// Logo container com animação
const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

// Logo Vega
const Logo = styled.img`
  width: 150px;
  height: auto;
`;

// Spinner circular
const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid #e31937;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Texto de carregando
const LoadingText = styled.p`
  margin-top: 1rem;
  color: white;
  font-size: 1rem;
  text-align: center;
`;

// Barra de progresso
const ProgressBarContainer = styled.div`
  width: 300px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #e31937;
  transition: width 0.2s;
  width: ${props => props.width}%;
`;

export const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Atualiza o progresso a cada 200ms até atingir 100%
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo src="/vega-copilot-logo-light.svg" alt="Vega Copilot" />
        <Spinner />
      </LogoContainer>
      <LoadingText>Carregando tecnologia avançada...</LoadingText>
      <ProgressBarContainer>
        <ProgressBar width={progress} />
      </ProgressBarContainer>
      <LoadingText>{progress}%</LoadingText>
    </Container>
  );
};