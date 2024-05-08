import logoSidi from '../../assets/logo-sidi-nome.png';
import Avatar from '@mui/material/Avatar';
import Mauricio from '../../assets/mauricioG.jpg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import MaskBaterPonto from "../../components/MaskBaterPonto.tsx"

import './style.sass'
import { Link } from 'react-router-dom';
import MaskJustificaPonto from '../../components/MaskJustificaPonto.tsx';

function Home() {
    return (
      <div className="home">
        <div className="header">
          <a href="https://www.sidi.org.br/" className='logoSidi'>
            <img src={logoSidi} id="logo" />
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
            <div className="boxHome">
              <div className="tituloBox"> 
                <h2>Bater Ponto</h2>
                <IoIosCheckmarkCircleOutline />
              </div>
              <MaskBaterPonto/>
            </div>
            <div className="boxHome">
              <div className="tituloBox">
                <h2>Justificar Ponto</h2>
                <IoIosCheckmarkCircleOutline />
              </div>
              <MaskJustificaPonto/>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
