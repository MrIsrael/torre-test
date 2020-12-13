import React, { Fragment, useState, useEffect } from 'react'
import torreBrandLogo from '../../assets/logos/torre_brand_logo.png'

const SearchUser = () => {
  const [layoutHeight, setLayoutPicHeight] = useState(0)

  useEffect(() => {
    setLayoutPicHeight(window.innerHeight)      // browser's viewport height
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>

      <div className='s-center s-to-center ed-grid s-grid-1 m-grid-3 
                      rows-gap s-gap-05 s-main-center s-cross-center'
            style={{ height: layoutHeight }}
      >

        <div className='m-x-2'>
          <div className='s-60 s-to-center'>
            <img src={torreBrandLogo} alt='torreBrandLogo' />
          </div>
          <h2 className='m-mb-1'>Hagamos aw</h2>
        </div>

        <div className='m-y-2 m-x-2 m-mb-2 ed-grid s-grid-1 m-grid-2 rows-gap s-gap-1'>
          <div className='t-blinking-button'>
            <button className='t-button s-pxy-1 m-py-2 m-px-3' style={{ width: '180px' }} onClick={() => {  }}>
              <p className='s-mb-0'>PRESS TO START</p>
            </button>
          </div>

          <button className='t-button s-pxy-1 m-py-2 m-px-3' style={{ width: '180px' }}>
            <p className='s-mb-0'>
              <a className='dev-link' href='https://bio.torre.co/es/israeluribe/' 
                target='_blank' rel='noopener noreferrer' style={{ color: 'rgb(13, 30, 33)', textDecoration: 'none' }}>
                <span>VISIT CREATOR'S BIO</span>
              </a>
            </p>
          </button>
        </div>

      </div>

    </Fragment>
  )
}

export default SearchUser
