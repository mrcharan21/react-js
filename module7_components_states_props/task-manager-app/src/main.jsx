import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import AddTask from './Components/AddTask'
import PageNotFound from './Components/PageNotFound'
import NavbarApp from './Components/NavbarApp'
import Logout from './Components/LogoutApp'
import LoginForm from './Components/LoginForm'


// import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavbarApp />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/add-task' element={<AddTask />} />
        <Route path='/logout-here' element={<Logout />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>

  </StrictMode>
)
