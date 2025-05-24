// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { Header } from './modules/components/Header';
import { Footer } from './modules/components/Footer';
import { Loading } from './modules/components/Loading';
import AppRoutes from './routes/app.routes';
import GlobalStyle from './styles/global';
import AnimateOnScroll from './utils/AnimateOnScroll';

// Componente interno que usa o contexto de loading
const AppContent = () => {
  const { loading } = useLoading();

  // Inicializa as animações de scroll
  useEffect(() => {
    // A função AnimateOnScroll já tem seu próprio useEffect
    // Este é apenas para garantir que seja inicializada
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <AppRoutes />
      </main>
      <Footer />
      <AnimateOnScroll />
    </>
  );
};

function App() {
  return (
    <Router>
      <LoadingProvider>
        <GlobalStyle />
        <AppContent />
      </LoadingProvider>
    </Router>
  );
}

export default App;