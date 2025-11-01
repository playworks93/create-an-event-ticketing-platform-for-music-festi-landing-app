import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Create an event ticketing platform for music festi</h1>
          <p className="tagline">Innovative solution</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Full-stack application</li>
          <li>RESTful API</li>
          <li>Database integration</li>
          <li>Authentication system</li>
          <li>Responsive UI</li>
          </ul>
        </div>
        <p>&copy; 2025 Create an event ticketing platform for music festi. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App