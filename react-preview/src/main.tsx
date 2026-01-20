import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppShell from './AppShell.tsx'
import BiomarkerResultsPage from './BiomarkerResultsPage.tsx'
import InboxPage from './InboxPage.tsx'

function PreviewShell() {
  return (
    <BrowserRouter>
      <div style={{ 
        display: 'flex', 
        height: '100vh',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
      }}>
        {/* Sidebar Navigation - Outside the app content */}
        <nav style={{
          width: 200,
          padding: '24px 16px',
          borderRight: '1px solid #333',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <div style={{ 
            fontSize: 11, 
            fontWeight: 600, 
            color: '#666', 
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 8,
            padding: '0 12px',
          }}>
            Pages
          </div>
          <NavLink 
            to="/" 
            end
            style={({ isActive }) => ({
              padding: '10px 12px',
              borderRadius: 8,
              color: isActive ? '#fff' : '#888',
              backgroundColor: isActive ? '#333' : 'transparent',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 150ms ease',
            })}
          >
            Components
          </NavLink>
          <NavLink 
            to="/inbox"
            style={({ isActive }) => ({
              padding: '10px 12px',
              borderRadius: 8,
              color: isActive ? '#fff' : '#888',
              backgroundColor: isActive ? '#333' : 'transparent',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 150ms ease',
            })}
          >
            Inbox
          </NavLink>
          <NavLink 
            to="/biomarker"
            style={({ isActive }) => ({
              padding: '10px 12px',
              borderRadius: 8,
              color: isActive ? '#fff' : '#888',
              backgroundColor: isActive ? '#333' : 'transparent',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 150ms ease',
            })}
          >
            Biomarker Results
          </NavLink>
          <NavLink 
            to="/app"
            style={({ isActive }) => ({
              padding: '10px 12px',
              borderRadius: 8,
              color: isActive ? '#fff' : '#888',
              backgroundColor: isActive ? '#333' : 'transparent',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              transition: 'all 150ms ease',
            })}
          >
            App Shell
          </NavLink>
          
          <div style={{ 
            marginTop: 'auto', 
            padding: '12px',
            fontSize: 11,
            color: '#555',
          }}>
            Tip: Collapse sidebar to screenshot
          </div>
        </nav>

        {/* Main Content Area */}
        <AppContainer />
      </div>
    </BrowserRouter>
  )
}

function AppContainer() {
  return (
    <main style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 24,
      overflow: 'hidden',
      height: '100%',
    }}>
      <div 
        style={{ 
          width: 430, 
          maxWidth: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 40px rgba(0,0,0,0.3)',
          borderRadius: 24,
          overflow: 'auto',
          backgroundColor: '#F7F6F4',
          flexShrink: 0,
        }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/biomarker" element={<BiomarkerResultsPage />} />
          <Route path="/app" element={<AppShell />} />
        </Routes>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewShell />
  </StrictMode>,
)
