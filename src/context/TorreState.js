import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import TorreReducer from './TorreReducer'

// Initial state
const initialState = {
  userinfo: null,
  flagDataLoaded: false
}

// Create Context
export const TorreContext = createContext(initialState)

// Provider component
export const TorreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TorreReducer, initialState)

  // Action / get user data from Torre API, searching by username
  const getUserData = async (username) => {
    console.log('Getting data...')
    // Using "https://cors-anywhere.herokuapp.com/" header on GET request to avoid CORS error when running app from localhost
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/${username}`)
    // const res = await axios.get(`https://torre.bio/api/bios/${username}`, { headers: {"Access-Control-Allow-Origin": "*"} })
    console.log(res.data)
    dispatch({
      type: 'GET_DATA',
      payload: res.data,
      flag: true
    })
  }

  // Action / clear older user info from global state
  function resetUserinfo() {
    dispatch({
      type: 'RESET_USER_INFO',
      payload: null
    })
  }

  return (
    <TorreContext.Provider 
      value={{
        userinfo: state.userinfo,
        flagDataLoaded: state.flagDataLoaded,
        getUserData,
        resetUserinfo
      }}
    >
      { children }
    </TorreContext.Provider>
  )
}
