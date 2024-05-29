import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Home from './pages/home/home';
import BaterPonto from './pages/baterPonto/baterPonto';
import CorrigirPonto from './/pages/corrigirPonto/corrigir';
import { HistoryProvider } from './components/HistoryContext';

function AppRoutes() {
  return (
    <HistoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/baterponto" element={<BaterPonto />} />
          <Route path="/corrigirponto" element={<CorrigirPonto />} />
        </Routes>
      </BrowserRouter>
    </HistoryProvider>
  );
}

export default AppRoutes;
