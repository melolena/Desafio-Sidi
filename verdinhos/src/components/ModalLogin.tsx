import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logoSidi from '../assets/logo-sidi-nome.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiFontSize } from 'react-icons/bi';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  height: 300,
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
  flexWrap: 'wrap', 
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
  marginLeft: '5%',
  fontSize: '36px',
};

const inserirEmail = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
  marginTop: '5px',
  position: 'relative',
};

const labelEmail = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  fontSize: '18px',
};

const inputEmail = {
  width: '300px',
  height: '25px',
  border: '3px solid #620FC3',
  fontFamily: 'Josefin Sans',
  fontWeight: '20px',
  borderRadius: '10px',
  backgroundColor: '#D9D9D9',
  fontSize: '18px',
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
  fontSize: '16px',
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
  fontSize: '16px',
};

const senhaIcon = {
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-40%)',
  cursor: 'pointer',
  fontSize: '20px',
};

const esqueciSenha = {
  textAlign: 'center',
  textDecoration: 'none',
  marginTop: '10px',
  color: '#620FC3', 
  fontFamily: 'Josefin Sans',
  fontSize: '16px',
  cursor: 'pointer',
};

const toggleEnviarHover = (event) => {
  event.target.style.backgroundColor = '#3FD48F';
  event.target.style.color = '#FFFFFF';
};

const toggleEnviarNormal = (event) => {
  event.target.style.backgroundColor = '#D9D9D9';
  event.target.style.color = '#777777';
};

const errorMessageStyle = {
  marginLeft: '10px',
  color: 'red',
  fontSize: '16px',
};

function ModalRecuperacaoSenha({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [childModalOpen, setChildModalOpen] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleOpenChildModal = () => {
    setChildModalOpen(true);
    onClose();
  };

  const handleCloseChildModal = () => {
    setChildModalOpen(false);
    onClose();
  };

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    const isValid = /\S+@\S+\.\S+/.test(emailValue);
    setIsValidEmail(isValid);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-recuperacao-title"
        aria-describedby="modal-recuperacao-description"
      >
        <Box sx={style} >
          <div style={header}>
            <img src={logoSidi} alt="Logo Sidi" style={logoStyle} />
            <h2 style={titulo}>Recuperar Conta</h2>
          </div>
          <p style={{ textAlign: 'center', marginTop: '8px', color: '#000000' }}>Insira seu e-mail para a recuperação de sua conta</p>
          <div id="inputModal" style={inserirEmail}>
            <label style={labelEmail}>
              Email
              {!isValidEmail && <span style={errorMessageStyle}>Email inválido.</span>}
            </label>
            <input
              style={inputEmail}
              type="email"
              id="email"
              placeholder="Digite seu email"
              onChange={handleChangeEmail}
            />
          </div>
          <div style={botoes}>
            <button id="voltar" onClick={onClose} style={botaoVoltar}>
              Voltar
            </button>
            <button
              id="enviar"
              style={botaoEnviar}
              onMouseOver={isValidEmail ? toggleEnviarHover : null}
              onMouseOut={isValidEmail ? toggleEnviarNormal : null}
              onClick={isValidEmail ? handleOpenChildModal : null}
            >
              Enviar
            </button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={childModalOpen}
        onClose={handleCloseChildModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <h2 style={titulo}>Recuperação de senha enviada</h2>
          <p style={{ textAlign: 'center', marginTop: '8px', color: '#000000' }}>A recuperação de senha foi enviada para o e-mail {email}</p>
          <div style={botoes}>
            <button id="voltar" onClick={handleCloseChildModal} style={botaoVoltar}>
              Voltar
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default function ModalLogin({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRecuperacaoOpen, setIsRecuperacaoOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage('Email e senha são obrigatórios.');
    } else {
      setErrorMessage('');
      navigate('/home');
    }
  };

  const handleOpenRecuperacao = () => {
    setIsRecuperacaoOpen(true);
    onClose();
  };

  return (
    <>
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
              <label htmlFor="email" style={labelEmail}>
                Email
                {errorMessage && !email && <span style={errorMessageStyle}>Email é obrigatório.</span>}
              </label>
              <input
                type="email"
                id="email"
                style={inputEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={inserirEmail}>
              <label htmlFor="password" style={labelEmail}>
                Senha
                {errorMessage && !password && <span style={errorMessageStyle}>Senha é obrigatória.</span>}
              </label>
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
              <a onClick={handleOpenRecuperacao} style={esqueciSenha}>Esqueci minha senha</a>
            </div>
            <div style={botoes}>
              <button type="button" onClick={onClose} style={botaoVoltar}>
                Voltar
              </button>
              <button type="submit" onMouseEnter={toggleEnviarHover} onMouseLeave={toggleEnviarNormal} style={botaoEnviar}>
                Enviar
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <ModalRecuperacaoSenha isOpen={isRecuperacaoOpen} onClose={() => setIsRecuperacaoOpen(false)} />
    </>
  );
}
