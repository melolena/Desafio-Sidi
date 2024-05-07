import logoSidi from '../../assets/logo-sidi-nome.png';
import Avatar from '@mui/material/Avatar';
import Mauricio from '../../assets/mauricioG.jpg';
import Sino  from '../../assets/maskNotification.svg';
import Suporte from '../../assets/maskSuport.svg';
import Sair from '../../assets/maskLogout.svg'
function Home() {
    return (
      <div className="home">
        <div className="header">
          <img src={logoSidi} className="logoSidi" />
          <div className="menu">
          <Avatar
            alt="Remy Sharp"
            src={Mauricio}
            sx={{ width: 56, height: 56 }}
          />
          <div id="identificador">
              <h3>Maurício Gabriel</h3>
              <div id="iconsMenu">
                <a className="IconMenu">
                  <img src={Sino}/>
                </a>
                <a className="IconMenu">
                  <img src={Suporte}/>
                </a>
                <a className="IconMenu">
                  <img src={Sair}/>
                </a>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  