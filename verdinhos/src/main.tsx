import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/login.tsx'
import './styles/style.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
