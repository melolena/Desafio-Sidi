import logoSidi from '../../assets/logo-sidi-nome.png';

function Home() {
    return (
      <div className="home">
        <div className="header">
          <img src={logoSidi} className="logoSidi" />
          <div className="menu">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  