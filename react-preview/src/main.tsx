import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import BiomarkerResultsPage from './BiomarkerResultsPage.tsx'
import InboxPage from './InboxPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InboxPage />
  </StrictMode>,
)
