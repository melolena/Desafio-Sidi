import { Link } from 'react-router-dom';

import './styleHome.css';
import BoxBaterPonto from '../../components/Boxhome/BoxBaterPonto';
import BoxJustificaPonto from '../../components/Boxhome/BoxJustificarPonto';
import BoxCorrigirPonto from '../../components/Boxhome/BoxCorrigirPonto';
import BoxMinhaLocalizacao from '../../components/Boxhome/BoxMinhaLocalizacao';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="home">
      <Header />
      <div id="bodyHome">
        <div className="linhaHome">
          <div className="unidadeDashboard">
            <Link to="/baterponto" style={{ textDecoration: "none" }}>
              <BoxBaterPonto />
            </Link>
          </div>
          <div className="unidadeDashboard">
            <Link to='/justificarponto' style={{ textDecoration: "none" }}>
              <BoxJustificaPonto /> 
            </Link>
          </div>
        </div>
        <div className="linhaHome">
          <div className="unidadeDashboard">
            <Link to="/corrigirponto" style={{ textDecoration: "none" }}>
              <BoxCorrigirPonto />
            </Link>
          </div>
          <div className="unidadeDashboard">
            <Link to="/minhalocalizacao" style={{ textDecoration: "none" }}>
              <BoxMinhaLocalizacao />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
