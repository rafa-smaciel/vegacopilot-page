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
// import Suporte from '../modules/Suporte';
// import Documentacao from '../modules/Documentacao';

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
      {/* Estas rotas podem ser implementadas futuramente */}
      {/* <Route path="/solucoes/vega-copilot" element={<VegaCopilot />} /> */}
      {/* <Route path="/solucoes/device-vega" element={<DeviceVega />} /> */}
      {/* <Route path="/solucoes/projetos-melhoria" element={<ProjetosMelhoria />} /> */}
      
      {/* Rotas de conteúdo (para futuro) */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
      {/* <Route path="/suporte" element={<Suporte />} /> */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/documentacao" element={<Documentacao />} /> */}
      {/* <Route path="/webinars" element={<Webinars />} /> */}
      
      {/* Rotas de negócio (para futuro) */}
      {/* <Route path="/parceiros" element={<Parceiros />} /> */}
      {/* <Route path="/trabalhe-conosco" element={<TrabalheConosco />} /> */}
      {/* <Route path="/sobre" element={<Sobre />} /> */}
      {/* <Route path="/time" element={<Time />} /> */}
      
      {/* Rotas específicas de indústrias (para futuro) */}
      {/* <Route path="/industrias/automotiva" element={<Automotiva />} /> */}
      {/* <Route path="/industrias/metalurgia" element={<Metalurgia />} /> */}
      {/* <Route path="/industrias/maquinas-pesadas" element={<MaquinasPesadas />} /> */}
      {/* <Route path="/industrias/manufatura" element={<Manufatura />} /> */}
      {/* <Route path="/industrias/logistica" element={<Logistica />} /> */}
      
      {/* Rotas de legal/compliance (para futuro) */}
      {/* <Route path="/privacidade" element={<Privacidade />} /> */}
      {/* <Route path="/termos" element={<Termos />} /> */}
      {/* <Route path="/cookies" element={<Cookies />} /> */}
      
      {/* Redirect para casos não encontrados */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;