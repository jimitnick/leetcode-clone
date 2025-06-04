import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Dashboard from './components/Dashboard.jsx'
import { UserProvider } from './providers/userContext.jsx'
import Contests from './components/Contests.jsx'
import Problems from './components/Problems.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<App />} />
          <Route path='/contests' element={<Contests />} />
          <Route path='/problems' element={<Problems />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
