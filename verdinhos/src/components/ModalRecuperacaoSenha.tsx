import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logoSidi from '../assets/logo-sidi-nome.png';

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

const header = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  margin: '10px',
};

const logoStyle = {
  width: '30%',
  alignSelf: 'start',
  marginRight: '0px',
};

const titulo = {
  textAlign: 'center',
  margin: '10px',
  marginLeft: '20px',
};

const corpo = {
  textAlign: 'center',
  marginTop: '8px',
  color: '#000000',
};

const inserirEmail = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
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
  justifyContent: 'space-between',
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

const styleChild = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-between',
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

const corpoChild = {
  textAlign: 'center',
  marginTop: '25px',
  marginBottom: '20px',
  color: '#000000',
};

const botoesChild = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '10px 0',
};

const botaoVoltarChild = {
  backgroundColor: '#C74949',
  fontFamily: 'Josefin Sans',
  alignSelf:'center',
  color: '#FFFFFF',
  padding: '8px 20px',
  border: 'none',
  borderRadius: '10px',
  marginTop:'30px',
  textAlign: 'center',
};

const toggleEnviarHover = (event) => {
  event.target.style.backgroundColor = '#3FD48F';
  event.target.style.color = '#FFFFFF';
};

const toggleEnviarNormal = (event) => {
  event.target.style.backgroundColor = '#D9D9D9';
  event.target.style.color = '#777777';
};

export default function ModalRecuperacaoSenha() {
  const [open, setOpen] = React.useState(false);
  const [childModalOpen, setChildModalOpen] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [email, setEmail] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenChildModal = () => {
    setChildModalOpen(true);
    handleClose();
  };

  const handleCloseChildModal = () => {
    setChildModalOpen(false);
    setOpen(false); 
  };

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    // Lógica de validação de e-mail
    const isValid = /\S+@\S+\.\S+/.test(emailValue);
    setIsValidEmail(isValid);
  };

  

  return (
    <div>
      <a onClick={handleOpen}>Esqueci minha senha</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={header}>
            <img src={logoSidi} style={logoStyle} />
            <h2 style={titulo}>Recuperar Conta</h2>
          </div>
          <p style={corpo}>Insira seu e-mail para a recuperação de sua conta </p>
          <div id="inputModal" style={inserirEmail}>
            <label style={labelEmail}>Email</label>
            <input style={inputEmail} type="email" id="email" placeholder="Digite seu email" onChange={handleChangeEmail} />
          </div>
          <div style={botoes}>
            <button id="voltar" onClick={handleClose} style={botaoVoltar}>
              Voltar
            </button>
            <button
              id="enviar"
              style={botaoEnviar}
              onMouseEnter={toggleEnviarHover}
              onMouseLeave={toggleEnviarNormal}
              onClick={handleOpenChildModal}
            >
              Enviar
            </button>
          </div>
        </Box>
      </Modal>

      {/* Modal Secundário (Child Modal) */}
      <Modal
        open={childModalOpen}
        onClose={handleCloseChildModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={styleChild}>
          <div style={header}>
            <img src={logoSidi} style={logoStyle} />
            <h2 style={titulo}>Recuperar Conta</h2>
          </div>
          <p style={corpoChild}>Uma mensagem foi enviada para o seu e-mail. Siga o passo a passo para recuperação da sua conta.</p>
          <div style={botoesChild}>
            <button id="voltar" onClick={handleCloseChildModal} style={botaoVoltarChild}>
              Voltar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
