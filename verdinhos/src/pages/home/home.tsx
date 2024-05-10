import logoSidi from '../../assets/logo-sidi-nome.png';
import Avatar from '@mui/material/Avatar';
import Mauricio from '../../assets/mauricioG.jpg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

import './style.sass';
import BoxBaterPonto from '../../components/Boxhome/BoxBaterPonto';
import BoxJustificaPonto from '../../components/Boxhome/BoxJustificarPonto';
import BoxCorrigirPonto from '../../components/Boxhome/BoxCorrigirPonto';
import BoxMinhaLocalizacao from '../../components/Boxhome/BoxMinhaLocalizacao';

function Home() {


  return (
    <div className="home">
      <div className="header">
        <a href="https://www.sidi.org.br/" className='logoSidi'>
          <img src={logoSidi} id="logo" alt="Logo Sidi" />
        </a>
        <div className="menu">
          <Avatar
            alt="Remy Sharp"
            src={Mauricio}
            sx={{ width: 56, height: 56, border: 1, borderColor :'#777777', boxShadow: 2}}
          />
          <div id="identificador">
            <h3>Maurício Gabriel</h3>
            <div id="iconsMenu">
              <a className="IconMenu" href="#">
                <IoIosNotificationsOutline />
              </a>
              <a className="IconMenu" href="#">
                <BiSupport />
              </a>
              <Link to="/">
                <a className="IconMenu" href="#">
                  <IoIosLogOut/>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="bodyHome">
       <div className="linhaHome">
        <div className="unidadeDashboard">
          <Link to="" style={{textDecoration: "none"}}>
              <BoxBaterPonto/>
            </Link>
          </div>
          <div className="unidadeDashboard">
            <Link to="" style={{textDecoration: "none"}}>
              <BoxJustificaPonto/>
            </Link>
          </div>
       </div>
       <div className="linhaHome">
        <div className="unidadeDashboard">
            <Link to="" style={{textDecoration: "none"}}>
              <BoxCorrigirPonto/>
            </Link>
          </div>
          <div className="unidadeDashboard">
            <Link to="" style={{textDecoration: "none"}}>
              <BoxMinhaLocalizacao/>
            </Link>
          </div>
       </div>
      </div>
    </div>
  );
}

export default Home;
