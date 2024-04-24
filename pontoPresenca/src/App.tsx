import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoSidiSemNome from './assets/logo-sidi-sem-nome.png'
import logoSidi from './assets/logo-sidi-nome.png'
import iconFacebook from './assets/icons8-facebook-50.png'
import iconsGmail from './assets/icons8-gmail-novo-50.png'
import iconLinkedin from './assets/icons8-linkedin-50.png'
import setaDireita from './assets/arrow-right.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="body">
          <div className="colunaLogin">
            <img src={logoSidiSemNome} id="logo-sem-nome"/>
            <h2>Seja Bem-Vindo</h2>
            <div id="texto-login">
            <p>Vamos Começar? <a href="#">Faça login</a> para fazer seu check-in diário na</p>
            </div>
            <img src={logoSidi}/>
            <a href="#" id="esqueci-senha">Esqueci minha senha</a>
            <button id="entrar">Entrar</button>
          </div>
          <div className="colunaCadastro">
            <h2>Criar Conta</h2>
            <div id="icons">
              <img src={iconFacebook}/>
              <img src={iconsGmail}/>
              <img src={iconLinkedin}/>
            </div>
            <p>Registre-se com seu e-mail</p>
            <div id="input-cadastro">
              <label htmlFor="setName">Nome Completo</label>
              <input type="text" id="setName" placeholder ="Digite seu nome completo"></input>
              <label htmlFor="setEmail">E-mail</label>
              <input type="email" id="setEmail" placeholder ="Digite seu e-mail"></input>
              <label htmlFor="setPassword">Senha</label>
              <div id="senha">
                <input type="password" id="setPassword" placeholder ="Digite sua senha"></input>
              </div>
              <div id="botao-cadastro">
              <button id="continuar-cadastro">Continuar</button>
              <img src={setaDireita}/>
              
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
