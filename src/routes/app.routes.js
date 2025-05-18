// src/routes/app.routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando componentes
import { Home } from '../modules/Home';
import CasosDeUso from '../modules/CasosDeUso';
import ComecarAgora from '../modules/ComecarAgora';
import Contato from '../modules/Contato';
import Demonstracao from '../modules/Demonstracao';
import Empresa from '../modules/Empresa';
import Tecnologia from '../modules/Tecnologia';

// Você pode precisar criar/importar estes componentes também
// import Blog from '../modules/Blog';
// import VegaCopilot from '../modules/Produtos/VegaCopilot';
// import DeviceVega from '../modules/Produtos/DeviceVega';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casos-de-uso" element={<CasosDeUso />} />
      <Route path="/comecar-agora" element={<ComecarAgora />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/demonstracao" element={<Demonstracao />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      
      {/* Descomente estas rotas quando os componentes forem implementados */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/produtos/vega-copilot" element={<VegaCopilot />} /> */}
      {/* <Route path="/produtos/device-vega" element={<DeviceVega />} /> */}
      
      {/* Redireciona qualquer rota não encontrada para a página inicial */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;