import { useState } from 'react'
import './App.css'
import Header from './components/generic/Header'
import Login from './components/login/Login'
import SideNav from './components/generic/SideNav'

function App() {
  const [logedIn, setLoggedIn] = useState(false)
  const [isSidenavOpen, setIsSidenavOpen] = useState(false)
  const handleSidenavOpen = () => {
    setIsSidenavOpen(!isSidenavOpen)
  }
  return (
    <div className="App">
      <Header handleSidenav={handleSidenavOpen} open={isSidenavOpen} />
      {logedIn && <Login />}
      <div>
        <SideNav isOpen={isSidenavOpen} handleSidenav={handleSidenavOpen} />
      </div>
    </div>
  )
}

export default App
