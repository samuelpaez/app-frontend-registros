import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProveedorDatos from './contexto/contexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProveedorDatos>
        <App />


      </ProveedorDatos>
  </React.StrictMode>,
)
