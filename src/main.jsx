import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FirstApp } from './first-app/FirstApp';
import './counter.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="Hola Mundo"/>
  </React.StrictMode>
)
