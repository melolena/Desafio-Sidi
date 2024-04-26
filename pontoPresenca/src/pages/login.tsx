import { useState } from "react";
import "../style/login.sass";
import logoSidi from "../assets/logo-sidi-nome.png";
import iconFacebook from "../assets/maskFacebook.svg";
import iconsGmail from "../assets/maskGoogle.svg";
import iconLinkedin from "../assets/maskLinkedIn.svg";
import iconSenhaVisivel from "../assets/maskShow.svg";
import iconSenhaOculto from "../assets/maskHide.svg";

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
            <div id="icons">
              <a href="#">
               <img src={iconFacebook} className="icon" />
              </a>
            </div>

            <div id="input-cadastro">
              <form id="formularioCadastro">
              <label htmlFor="setName">Nome Completo</label>
              <input
                type="text"
                id="setName"
                placeholder="Digite seu nome completo"
              ></input>
              <label htmlFor="setEmail">E-mail</label>
              <input
                type="email"
                id="setEmail"
                placeholder="Digite seu e-mail"
              ></input>
              <label htmlFor="setPassword">Senha</label>
              <div id="senha">
                <input
                  type={senhaEstaVisivel ? "text" : "password"}
                  id="setPassword"
                  placeholder="Digite sua senha"
                />
                <label htmlFor="setRepeatPassword">Confirma senha</label>
                <input
                  type="password"
                  id="setRepeatPassword"
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