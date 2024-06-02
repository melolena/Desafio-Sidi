import { createTheme } from '@mui/material/styles';
import logoSidi from '../assets/logo-sidi-nome.png';
import Avatar from '@mui/material/Avatar';
import Mauricio from '../assets/mauricioG.jpg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../pages/home/styleHome.sass'

function Header() {
  return (
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
  );
}

export default Header;
