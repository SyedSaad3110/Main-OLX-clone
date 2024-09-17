import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import React from 'react'
import BrowserRouter from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
)
