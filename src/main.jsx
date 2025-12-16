import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ModalRoot from "./components/modal/ModalRoot.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App/>
      <ModalRoot/>
    </>
  </StrictMode>,
)
