import { useState } from 'react'
import logoSidi from '../../assets/logo-sidi-nome.png';
import {AiOutlineFacebook} from 'react-icons/ai'
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import ModalRecuperacaoSenha from "../../components/ModalRecuperacaoSenha.tsx";
import ModalLogin from "../../components/ModalLogin.tsx";

import './style.sass'
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  return (
    <>
    <div className="bodyApp">
      <div className="login">
        <a href ="https://www.sidi.org.br/" id="campoLogo">
          <img src={logoSidi} id= "logo"/>
        </a>
        <div className = "textosCadastros">
          <h2>Seja Bem-Vindo</h2>
          <p>Vamos começar? Faça login para fazer<br></br> seu check-in diário!</p>
           <ModalRecuperacaoSenha/>
        </div>
        <ModalLogin/>
      </div>
      <div className="cadastro">
        <h2>Criar Conta</h2>
        <div id="social">
          <a href="https://www.facebook.com/login">
            <AiOutlineFacebook/>
          </a>
          <a href="https://www.facebook.com/login" id="iconGoogle">
            <AiOutlineGoogle/>
          </a>
          <a href="https://www.linkedin.com/login">
            <AiOutlineLinkedin/>
          </a>
        </div>
        <div id="formCadastro">
          <div className="inputCadastro">
          <label form='nomeCompleto'>Nome Completo</label>
          <input type="text" id="nomeCompleto" placeholder="Digite seu nome completo"></input>
          </div>
          <div className="inputCadastro">
            <label>Email</label>
            <input type="e-mail" id="email" placeholder="Digite seu email"></input>
          </div>
          <div className="inputCadastro">
              <label htmlFor="senha">Senha</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  placeholder="Digite sua senha"
                />
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>
            <div className="inputCadastro">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmarSenha"
                  placeholder="Confirme sua senha "
                />
                <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>
        </div>
        <Link to="/home">
        <button id="continuar-cadastro">Continuar</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Login;