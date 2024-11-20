// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/HeaderNav.jsx';
import Footer from './components/Footer.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
      <App />
    <Footer />         
    </BrowserRouter>
  </React.StrictMode>
  
  
 
)
 