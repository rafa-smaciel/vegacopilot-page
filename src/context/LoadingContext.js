// src/context/LoadingContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Sempre que a rota mudar, ativa o loading
    setLoading(true);
    
    // Simula um carregamento mais realista para uma melhor experiência do usuário
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 segundos de carregamento para mostrar a animação

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};