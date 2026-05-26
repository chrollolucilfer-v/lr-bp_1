import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // global import
import App from './App'
// importing app function from app.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
