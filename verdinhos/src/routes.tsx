import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import BaterPonto from './pages/baterPonto/baterPonto';
import CorrigirPonto from './pages/corrigirPonto/corrigir';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/baterPonto" element={<BaterPonto />} />
      <Route path="/corrigirPonto" element={<CorrigirPonto />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
