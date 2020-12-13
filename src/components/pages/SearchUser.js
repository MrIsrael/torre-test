import React, { Fragment, useState, useContext, useEffect } from 'react'
import { TorreContext } from '../../context/TorreState'

const SearchUser = ({ changeScreen }) => {
  const { userinfo, getUserData, resetUserinfo } = useContext(TorreContext)
  const [layoutHeight, setLayoutPicHeight] = useState(0)
  const [username, setUsername] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [checkUserInfo, setCheckUserinfo] = useState(false)
  let nextScreen = changeScreen

  useEffect(() => {
    setLayoutPicHeight(window.innerHeight)      // browser's viewport height
    resetUserinfo()
    // eslint-disable-next-line
  }, [])

  function verifyInput() {
    if (username === '') { 
      setAlertMessage('Please do not leave the input field empty.')
      setAlert(true) 
    } else {
      setAlert(false)
      getUserData(username)                     // trigger GET request
      setTimeout(() => { setCheckUserinfo(true) }, 1750)
    }
  }

  if (checkUserInfo) {
    setCheckUserinfo(false)
    console.log(userinfo) 
    if (userinfo === null) {
      setAlertMessage('User not found!')
      setAlert(true)
    } else {
      setAlert(false)
      nextScreen(2)                         // go to Genome viewer page
    }
  }

  return (
    <Fragment>

      <div className='s-center s-to-center ed-grid s-grid-1 m-grid-3 rows-gap s-gap-05 s-main-center s-cross-center'
           style={{ height: layoutHeight }}>

        <div className='m-x-2 s-mb-1'>
          <h1 className='s-mb-3 m-mb-4'>Torre profile search</h1>
          {/* <label htmlFor='user-input'>Username:</label> */}
          <input className='input-style s-radius s-85 m-70' autoFocus id='user-input' type='text' placeholder='Please enter a valid Torre username here'
                 value={username} onChange={(event) => setUsername(event.target.value.toLowerCase())} />
        </div>

        <p className={alert ? 'alert-text m-y-2 m-x-2 s-py-1 s-mb-1 s-100 m-85 s-to-center s-center' : 'hidden'}>{alertMessage}</p>

        <div className={alert ? 'm-y-3 m-x-2' : 'm-y-2 m-x-2'}>
          <button className='t-button s-pxy-1 m-py-2 m-px-3' style={{ width: '180px' }} onClick={() => { verifyInput() }}>
            <p className='s-mb-0'>SEARCH USER</p>
          </button>
        </div>

      </div>

    </Fragment>
  )
}

export default SearchUser
