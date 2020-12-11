import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import TorreReducer from './TorreReducer'

// Initial state
const initialState = {
  userinfo: [],
  flagDataLoaded: false
}

// Create Context
export const TorreContext = createContext(initialState)

// Provider component
export const TorreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TorreReducer, initialState)

  // Action / get names list from Torre API (endpoint test)
  const getNames = async (username) => {
    console.log('Getting data...')
    // Using "https://cors-anywhere.herokuapp.com/" header on GET request to avoid CORS error when running app from localhost
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/${username}`)
    // const res = await axios.get(`https://torre.bio/api/bios/${username}`, { headers: {"Access-Control-Allow-Origin": "*"} })
    // console.log(res)
    console.log(res.data)
    dispatch({
      type: 'GET_DATA',
      payload: res.data,
      flag: true
    })
  }

  return (
    <TorreContext.Provider 
      value={{
        userinfo: state.userinfo,
        flagDataLoaded: state.flagDataLoaded,
        getNames
      }}
    >
      { children }
    </TorreContext.Provider>
  )
}
