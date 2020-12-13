import React, { Fragment } from 'react'
import torreBrandLogo from '../../assets/logos/torre_brand_logo.png'

const Navbar = ({ changeScreen }) => {
  let nextScreen = changeScreen
  let scrWidth = window.screen.width

  return (
    <Fragment>
      <div className='navbar-font ed-grid s-grid-5 m-grid-3 s-py-1 s-main-center s-cross-center'>

        <div className='s-left'>
          <i className ='fas fa-chevron-left cursor-pointer' onClick={() => { nextScreen(0) }}></i>
          <span className ='s-pl-05 m-pl-1 cursor-pointer' onClick={() => { nextScreen(0) }}>{scrWidth > 640 ? 'Back to start' : 'Start'}</span>
        </div>

        <div className='s-cols-3 m-cols-1 s-to-center s-cross-center'>
          <span>
            <img src={torreBrandLogo} alt='torreBrandLogo' className='navbar-logo-height' />
          </span>
          <span className='navbar-title-center s-pl-05 m-pl-1'>Genome viewer</span>
        </div>

        <div className='s-right'>
          <span className ='s-pr-05 m-pr-1 cursor-pointer' onClick={() => { nextScreen(1) }}>{scrWidth > 640 ? 'Search user' : 'Search'}</span>
          <i className ='fas fa-search cursor-pointer' onClick={() => { nextScreen(1) }}></i>
        </div>

      </div>
    </Fragment>
  )
}

export default Navbar
