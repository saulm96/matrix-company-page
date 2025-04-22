import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LandingPage from './pages/LandingPage'

import './index.css'

createRoot(document.querySelector('body')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
)
