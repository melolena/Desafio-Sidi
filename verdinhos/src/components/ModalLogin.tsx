import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logoSidi from '../assets/logo-sidi-nome.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 250,
  bgcolor: '#ffffff',
  borderColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Josefin Sans',
};

const header = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  marginTop: '10px',
};

const logoStyle = {
  width: '30%',
  alignSelf: 'start',
  marginRight: '0px',
};

const titulo = {
  textAlign: 'center',
  margin: '10px',
  marginLeft: '20%',
};

const inserirEmail = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
  marginTop: '5px',
};

const labelEmail = {
  marginBottom: '10px',
};

const inputEmail = {
  width: '300px',
  height: '25px',
  border: '3px solid #620FC3',
  fontFamily: 'Josefin Sans',
  fontWeight: '20px',
  borderRadius: '10px',
  backgroundColor: '#D9D9D9',
};

const botoes = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '10px 0',
};

const botaoVoltar = {
  backgroundColor: '#C74949',
  fontFamily: 'Josefin Sans',
  color: '#FFFFFF',
  padding: '8px 20px',
  border: 'none',
  borderRadius: '10px',
  marginRight: '20px',
  textAlign: 'center',
};

const botaoEnviar = {
  backgroundColor: '#D9D9D9',
  fontFamily: 'Josefin Sans',
  color: '#777777',
  padding: '8px 20px',
  border: 'none',
  borderRadius: '10px',
  marginRight: '20px',
  textAlign: 'center',
};

const senhaIcon = {
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: '20px',
};

const esqueciSenha ={
  textAlign: 'center',
  textDecoration: 'none',
  marginTop: '10px',
  color: '##620FC3'
}

const toggleEnviarHover = (event) => {
  event.target.style.backgroundColor = '#3FD48F';
  event.target.style.color = '#FFFFFF';
};

const toggleEnviarNormal = (event) => {
  event.target.style.backgroundColor = '#D9D9D9';
  event.target.style.color = '#777777';
};

export default function ModalLogin({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-login-title"
        aria-describedby="modal-login-description"
      >
        <Box sx={style}>
          <div style={header}>
            <img src={logoSidi} alt="Logo Sidi" style={logoStyle} />
            <h2 style={titulo}>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={inserirEmail}>
              <label htmlFor="email" style={labelEmail}>Email</label>
              <input
                type="email"
                id="email"
                style={inputEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={inserirEmail}>
              <label htmlFor="password" style={labelEmail}>Senha</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  style={inputEmail}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span style={senhaIcon} onClick={handlePasswordVisibility}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <Link to="/forgot-password" style={esqueciSenha}>Esqueci minha senha</Link>
            </div>
            <div style={botoes}>
              <button type="button" onClick={onClose} style={botaoVoltar}>
                Voltar
              </button>
              <Link to="/home">
                <button type="submit" onMouseEnter={toggleEnviarHover} onMouseLeave={toggleEnviarNormal} style={botaoEnviar}>
                  Enviar
                </button>
              </Link>
            </div>
          </form>
        </Box>
      </Modal>
  );
}
