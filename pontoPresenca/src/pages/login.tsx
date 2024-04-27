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
            <div id="social">
              <a href="#">
               <img src={iconFacebook} className="icon" />
              </a>
              <a href="#">
               <img src={iconsGmail} className="icon" />
              </a>
              <a href="#">
               <img src={iconLinkedin} className="icon" />
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