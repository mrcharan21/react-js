import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import Navbar from './Navbar'
import ContactUs from './ContactUs'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/tasks" element={<Layout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
