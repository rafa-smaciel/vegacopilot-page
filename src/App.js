// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Componentes globais
import GlobalStyle from './styles/global';
import { LoadingProvider } from './context/LoadingContext';

// Componentes de layout
import { Header } from './modules/components/Header';
import { Footer } from './modules/components/Footer';
import { Loading } from './modules/components/Loading';

// Rotas
import AppRoutes from './routes/app.routes';

// Utils
import AnimateOnScroll from './utils/AnimateOnScroll';
import { ScrollToTopButton } from './utils/ScrollToTop';

// Hook para loading
import { useLoading } from './context/LoadingContext';

// Componente interno que usa o contexto de loading
const AppContent = () => {
  const { loading } = useLoading();

  // Efeito para animações no scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };

    // Executa inicialmente e adiciona listener de scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  // Efeito para scroll suave nos links internos
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = 80; // Altura do header fixo
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main style={{ marginTop: '80px' }}> {/* Compensar altura do header fixo */}
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton isFixed />
    </>
  );
};

// Componente principal da aplicação
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <LoadingProvider>
          <AppContent />
          <AnimateOnScroll />
        </LoadingProvider>
      </Router>
    </>
  );
}

export default App;