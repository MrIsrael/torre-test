// Node modules
import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Provider from context
import { TorreProvider } from './context/TorreState'

// Layout components

// Page components
import StartPage from './components/pages/StartPage'

// Styles
import './App.scss'

const App = () => {
  const [flag, setFlag] = useState(0)
  // flag = 0     --> StartPage

  const changeScreen = (val) => { setFlag(val) }
  console.log('Active screen: ' + flag)

  return (
    <TorreProvider>
      {/* <Router> */}

        <div>
          {flag === 0 && <StartPage changeScreen = {changeScreen} />}
        </div>

        {/* <div>
          <Switch>
            <Route path='/A' render={(props) => ( <Main {...props} changeScreen = {changeScreen} /> )} />
            <Route path='/B/:wildcard' render={(props) => ( <Main {...props} changeScreen = {changeScreen} /> )} /> */}
            {/* <Route exact path='/' render={() => ( <Main changeScreen = {changeScreen} /> )} /> */}
          {/* </Switch>
        </div> */}

      {/* </Router> */}
    </TorreProvider>
  )
}

export default App
