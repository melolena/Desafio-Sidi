import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Home from './pages/home/home';
import BaterPonto from './pages/baterPonto/baterPonto';
import CorrigirPonto from './pages/corrigirPonto/corrigir';
import { HistoryProvider } from './components/HistoryContext';
import JustificarPonto from './pages/justificarPonto/justificar'
import Localizacao from './pages/localizacao/localizacao';

function AppRoutes() {
  return (
    <HistoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/baterponto" element={<BaterPonto />} />
          <Route path="/corrigirponto" element={<CorrigirPonto />} />
          <Route path="/justificarponto" element={<JustificarPonto />} />
          <Route path="/minhalocalizacao" element={<Localizacao />} />
        </Routes>
      </BrowserRouter>
    </HistoryProvider>
  );
}

export default AppRoutes;
