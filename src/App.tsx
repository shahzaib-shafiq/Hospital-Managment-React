import { useState } from 'react'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login')

  const handlePageChange = (page: 'login' | 'signup') => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      {currentPage === 'login' ? (
        <LoginPage onNavigateToSignup={() => handlePageChange('signup')} />
      ) : (
        <SignupPage onNavigateToLogin={() => handlePageChange('login')} />
      )}
    </div>
  )
}

export default App
