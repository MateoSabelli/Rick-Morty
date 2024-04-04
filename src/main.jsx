import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Header/>        
    <App />
    <Footer/>
    </BrowserRouter>
)
