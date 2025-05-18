// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';
import GlobalStyle from './styles/styles';
import { Header } from './modules/components/Header';
import { Footer } from './modules/components/Footer';
import { AppRoutes } from './routes/app.routes';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;