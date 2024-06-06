import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineLinkedin, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import logoSidi from '../../assets/logo-sidi-nome.png';
import ModalRecuperacaoSenha from "../../components/ModalRecuperacaoSenha";
import ModalLogin from "../../components/ModalLogin";
import './style.sass';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRecuperacaoModal, setShowRecuperacaoModal] = useState(false);
  const navigate = useNavigate();

  const HOME_ROUTE = '/home';

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validateForm = () => {
    const newErrors = {};
    if (!nomeCompleto) newErrors.nomeCompleto = 'Nome Completo é obrigatório';
    if (!email) newErrors.email = 'Email é obrigatório';
    if (!senha) newErrors.senha = 'Senha é obrigatória';
    if (senha !== confirmarSenha) newErrors.confirmarSenha = 'As senhas não coincidem';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setShowLoginModal(true);
    }
  };

  const handleOpenRecuperacao = () => {
    setShowLoginModal(false);
    setShowRecuperacaoModal(true);
  };

  return (
    <div className="bodyApp">
      <div className="login">
        <a href="https://www.sidi.org.br/" id="campoLogo">
          <img src={logoSidi} id="logo" />
        </a>
        <div className="textosCadastros">
          <h2>Seja Bem-Vindo</h2>
          <p>Vamos começar? Faça login para fazer<br /> seu check-in diário!</p>
          <ModalRecuperacaoSenha isOpen={showRecuperacaoModal} onClose={() => setShowRecuperacaoModal(false)} />
          <ModalLogin isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} onForgotPassword={handleOpenRecuperacao} />
        </div>
        <button type="button" id="botao-entrar" onClick={() => setShowLoginModal(true)}>Entrar</button>
      </div>
      <div className="cadastro">
        <h2>Criar Conta</h2>
        <div id="social">
          <a href="https://www.facebook.com/login">
            <AiOutlineFacebook />
          </a>
          <a href="https://www.google.com/gmail/">
            <AiOutlineGoogle id="iconGoogle" />
          </a>
          <a href="https://www.linkedin.com/login/pt">
            <AiOutlineLinkedin />
          </a>
        </div>
        <form id="formCadastro" onSubmit={handleSubmit}>
          <div className="inputCadastro">
            <div className="inputLabel">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              {errors.nomeCompleto && <span className="error-message">{errors.nomeCompleto}</span>}
            </div>
            <input
              type="text"
              id="nomeCompleto"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </div>
          <div className="inputCadastro">
            <div className="inputLabel">
              <label htmlFor="email">Email</label>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputCadastro password-input">
            <div className="inputLabel">
              <label htmlFor="senha">Senha</label>
              {errors.senha && <span className="error-message">{errors.senha}</span>}
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className="inputCadastro password-input">
            <div className="inputLabel">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
