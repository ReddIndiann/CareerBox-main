import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './Context/AuthContext.tsx'
import {HelmetProvider} from 'react-helmet-async'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <HelmetProvider>
    <App /></HelmetProvider>
    </UserProvider>
    
  </StrictMode>,
)
