import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import App from './App.jsx'
import FormValidate from './FormValidate.jsx'
// import FormValidation from './FormValidation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FormValidation /> */}
    <FormValidate />
  </StrictMode>,
)
