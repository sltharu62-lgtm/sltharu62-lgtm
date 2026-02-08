import React from 'react'
import ReactDOM from 'react-dom/client'
import { MarioGame } from './components/MarioGame'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MarioGame />
  </React.StrictMode>,
)