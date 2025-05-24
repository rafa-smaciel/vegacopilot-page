// src/routes/app.routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando componentes existentes
import { Home } from '../modules/Home';
import CasosDeUso from '../modules/CasosDeUso';
import ComecarAgora from '../modules/ComecarAgora';
import Contato from '../modules/Contato';
import Demonstracao from '../modules/Demonstracao';
import Empresa from '../modules/Empresa';
import Tecnologia from '../modules/Tecnologia';
import Solucoes from '../modules/Solucoes';

// Para futuras implementações, descomente quando criar os componentes
// import VegaCopilot from '../modules/Produtos/VegaCopilot';
// import DeviceVega from '../modules/Produtos/DeviceVega';
// import Blog from '../modules/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota principal */}
      <Route path="/" element={<Home />} />
      
      {/* Rotas principais do menu */}
      <Route path="/solucoes" element={<Solucoes />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      <Route path="/casos-de-uso" element={<CasosDeUso />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/contato" element={<Contato />} />
      
      {/* Rotas de ação */}
      <Route path="/demonstracao" element={<Demonstracao />} />
      <Route path="/comecar-agora" element={<ComecarAgora />} />
      
      {/* Rotas de produtos específicos (para futuro dropdown de Soluções) */}
      {/* <Route path="/produtos/vega-copilot" element={<VegaCopilot />} /> */}
      {/* <Route path="/produtos/device-vega" element={<DeviceVega />} /> */}
      {/* <Route path="/produtos/analise-dados" element={<AnaliseDados />} /> */}
      
      {/* Outras rotas futuras */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/suporte" element={<Suporte />} /> */}
      {/* <Route path="/documentacao" element={<Documentacao />} /> */}
      
      {/* Redirect para casos não encontrados */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;