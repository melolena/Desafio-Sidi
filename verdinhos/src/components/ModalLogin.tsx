import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logoSidi from '../assets/logo-sidi-nome.png';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
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
  width: 400,
  height: 200,
  bgcolor: '#ffffff',
  borderColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Josefin Sans',
};

const logar = {
    marginTop: '90px'
}

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
    fontSize: '20px'
};

const toggleEnviarHover = (event) => {
  event.target.style.backgroundColor = '#3FD48F';
  event.target.style.color = '#FFFFFF';

};

const toggleEnviarNormal = (event) => {
  event.target.style.backgroundColor = '#D9D9D9';
  event.target.style.color = '#777777';
  event.target.style.transition = 'background-color 0.3s, color 0.3s';
};

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const isValid = /\S+@\S+\.\S+/.test(emailValue);
    setIsValidEmail(isValid);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (isValidEmail && password) {
      setRedirectToDashboard(true);
    }
  };




  return (
    <div>
      <button onClick={handleOpen} style = {logar} id="entrar">Entrar</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={header}>
            <img src={logoSidi} style={logoStyle} />
            <h2 style={titulo}>Login</h2>
          </div>
          <div>
            <div id="inputModal" style={inserirEmail}>
              <label style={labelEmail}>Email</label>
              <input style={inputEmail} type="email" id="email" placeholder="Digite seu email" onChange={handleChangeEmail} />
            </div>
            <div className="inputCadastro" style={inserirEmail}>
              <label htmlFor="senha" style={labelEmail}>Senha</label>
              <div className="password-input" style={{ position: 'relative' }}>
                <input
                    type={showPassword ? "text" : "password"}
                    id="senha"
                    placeholder="Digite sua senha"
                    style={inputEmail}
                />
                <span style={senhaIcon} onClick={togglePasswordVisibility}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                </div>
            </div>
            <div style={botoes}>
              <button id="voltar" onClick={handleClose} style={botaoVoltar}>
                Voltar
              </button>
              <Link to="/home">
              <button
                id="enviar"
                style={botaoEnviar}
                onMouseEnter={toggleEnviarHover}
                onMouseLeave={toggleEnviarNormal}
                disabled={!isValidEmail}
                
              >
                Enviar
              </button>
              </Link>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}


