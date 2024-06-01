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
  const navigate = useNavigate();

  const HOME_ROUTE = '/home'; // Constante com o caminho de redirecionamento

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
      navigate(HOME_ROUTE);
    }
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
          <ModalRecuperacaoSenha />
        </div>
        <ModalLogin />
      </div>
      <div className="cadastro">
        <h2>Criar Conta</h2>
        <div id="social">
          <a href="https://www.facebook.com/login">
            <AiOutlineFacebook />
          </a>
          <a href="https://www.google.com/login" id="iconGoogle">
            <AiOutlineGoogle />
          </a>
          <a href="https://www.linkedin.com/login">
            <AiOutlineLinkedin />
          </a>
        </div>
        <form id="formCadastro" onSubmit={handleSubmit}>
          <div className="inputCadastro">
            <label htmlFor="nomeCompleto">Nome Completo</label>
            <input
              type="text"
              id="nomeCompleto"
              placeholder="Digite seu nome completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
            {errors.nomeCompleto && <span className="error">{errors.nomeCompleto}</span>}
          </div>
          <div className="inputCadastro">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="inputCadastro">
            <label htmlFor="senha">Senha</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            {errors.senha && <span className="error">{errors.senha}</span>}
          </div>
          <div className="inputCadastro">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmarSenha"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            {errors.confirmarSenha && <span className="error">{errors.confirmarSenha}</span>}
          </div>
          <button type="submit" id="continuar-cadastro">Continuar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
