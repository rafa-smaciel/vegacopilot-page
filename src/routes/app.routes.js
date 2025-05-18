// src/routes/app.routes.js - Versão corrigida
import React, { Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import { Loading } from "../modules/components/Loading";
import { Home } from "../modules/Home";

// Importação das páginas adicionais
// Importante: Não use React.lazy com importação usando chaves {}
// Use a importação padrão (sem chaves)
const SolucoesPage = React.lazy(() => import("../modules/Solucoes"));
const TecnologiaPage = React.lazy(() => import("../modules/Tecnologia"));
const CasosDeUsoPage = React.lazy(() => import("../modules/CasosDeUso"));
const EmpresaPage = React.lazy(() => import("../modules/Empresa"));
const ContatoPage = React.lazy(() => import("../modules/Contato"));
const DemonstracaoPage = React.lazy(() => import("../modules/Demonstracao"));
const ComecarAgoraPage = React.lazy(() => import("../modules/ComecarAgora"));

export const AppRoutes = () => {
  const { loading } = useContext(LoadingContext);

  // Se o loading estiver ativo, exibe a página de loading
  if (loading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes" element={<SolucoesPage />} />
        <Route path="/tecnologia" element={<TecnologiaPage />} />
        <Route path="/casos-de-uso" element={<CasosDeUsoPage />} />
        <Route path="/empresa" element={<EmpresaPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/demonstracao" element={<DemonstracaoPage />} />
        <Route path="/comecar-agora" element={<ComecarAgoraPage />} />
      </Routes>
    </Suspense>
  );
};