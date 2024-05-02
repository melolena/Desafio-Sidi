import { useState } from "react";
import "../style/login.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineFacebook} from 'react-icons/ai'
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import logoSidi from "../assets/logo-sidi-nome.png";


function login() {
  const [senhaEstaVisivel, escreverSenhaVisivel] = useState(false);

  const tornarSenhaVisivel = () => {
    escreverSenhaVisivel(!senhaEstaVisivel);
  };

  

  return (
    <>
      <div>
        <div className="body-app">
          <div className="colunaLogin">
            <img src={logoSidi} id="logo-sidi" />
            <h2>Seja Bem-Vindo</h2>
            <div id="texto-login">
              <p>Vamos começar? Faça login para fazer<br></br> seu check-in diário!</p>
            </div>
            <a href="#" id="esqueci-senha">
              Esqueci minha senha
            </a>
            <button id="entrar">Entrar</button>
          </div>{/*fim coluna login */}
          <div className="colunaCadastro">
            <h2>Criar Conta</h2>
            <div id="social">
              <a href="#">
               <AiOutlineFacebook/>
              </a>
              <a href="#" >
                <AiOutlineGoogle id="iconGoogle" />
              </a>
              <a href="#">
                <AiOutlineLinkedin />
              </a>
            </div>

            <div id="cadastro">
              <form id="formularioCadastro">
              <label htmlFor="setName">Nome Completo</label>
              <input
                type="text"
                className="input-cadastro"
                placeholder="Digite seu nome completo"
              ></input>
              <br></br>
              <label htmlFor="setEmail">E-mail</label>
              <input
                type="email"
                className="input-cadastro"
                placeholder="Digite seu e-mail"
              ></input>
              <label htmlFor="setPassword">Senha</label>
              <div id="senha">
                <input
                type="password"
                  className="input-cadastro"
                  placeholder="Digite sua senha"
                />
                <label htmlFor="setRepeatPassword">Confirma senha</label>
                <input
                  type="password"
                  className="input-cadastro"
                  placeholder="Repita sua senha"
                />
              </div>
              <div id="botao-cadastro">
                <button id="continuar-cadastro">Continuar</button>
              </div>
              </form>
            </div>
          </div>{/*fim coluna cadastro */}
        </div> {/* fim do body */}
      </div>
    </>
  );
}

export default login;