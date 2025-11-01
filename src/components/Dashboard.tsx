import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'full_stack_application' ? 'active' : ''}
          onClick={() => setActiveTab('full_stack_application')}
        >
          Full Stack Application
        </button>
        <button 
          className={activeTab === 'restful_api' ? 'active' : ''}
          onClick={() => setActiveTab('restful_api')}
        >
          Restful Api
        </button>
        <button 
          className={activeTab === 'database_integration' ? 'active' : ''}
          onClick={() => setActiveTab('database_integration')}
        >
          Database Integration
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'full_stack_application' && (
          <div className="tab-content">
            <h2>Full-stack application</h2>
            <p>Manage your full stack application here.</p>
          </div>
        )}

        {activeTab === 'restful_api' && (
          <div className="tab-content">
            <h2>RESTful API</h2>
            <p>Manage your restful api here.</p>
          </div>
        )}

        {activeTab === 'database_integration' && (
          <div className="tab-content">
            <h2>Database integration</h2>
            <p>Manage your database integration here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard