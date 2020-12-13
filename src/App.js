// Node modules
import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Provider from context
import { TorreProvider } from './context/TorreState'

// Layout components
import Navbar from './components/layout/Navbar'

// Page components
import StartPage from './components/pages/StartPage'
import SearchUser from './components/pages/SearchUser'
import GenomeViewer from './components/pages/GenomeViewer'

// Styles
import './App.scss'

const App = () => {
  const [flag, setFlag] = useState(1)
  // flag = 0     --> Start page
  // flag = 1     --> Search user
  // flag = 2     --> Genome viewer

  const changeScreen = (val) => { setFlag(val) }
  console.log('Active screen: ' + flag)

  return (
    <TorreProvider>

        <div>
          {flag !== 0 && <Navbar changeScreen = {changeScreen} />}
        </div>

        <div>
          {flag === 0 && <StartPage changeScreen = {changeScreen} />}
          {/* flag === 1 && <SearchUser changeScreen = {changeScreen} /> */}
          {flag === 2 && <GenomeViewer changeScreen = {changeScreen} />}
        </div>

    </TorreProvider>
  )
}

export default App
