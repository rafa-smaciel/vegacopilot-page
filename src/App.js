// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app.routes';
import GlobalStyle from './styles/global';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { Header } from './modules/components/Header';
import { Footer } from './modules/components/Footer';
import { Loading } from './modules/components/Loading';

// Componente wrapper que usa o contexto de carregamento
const AppContent = () => {
  const { loading } = useLoading();

  // Adiciona um listener para animações de scroll
  React.useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Quando o elemento está a 75% da altura da tela, adiciona a classe 'visible'
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };
    
    // Executa a animação quando a página é carregada e durante o scroll
    animateElements();
    window.addEventListener('scroll', animateElements);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);

  return (
    <>
      <Header />
      {loading ? <Loading /> : <AppRoutes />}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <GlobalStyle />
        <AppContent />
      </LoadingProvider>
    </Router>
  );
};

export default App;