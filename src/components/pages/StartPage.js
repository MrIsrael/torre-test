import React, { Fragment, useContext, useEffect } from 'react'
import { TorreContext } from '../../context/TorreState'

import torreLogo from '../../assets/logos/torre_logo.png'
import torreBrandLogo from '../../assets/logos/torre_brand_logo.png'

const StartPage = () => {
  const { userinfo, getNames, flagDataLoaded } = useContext(TorreContext)

  useEffect(() => {
    document.body.scrollTop = 0               // For Safari
    document.documentElement.scrollTop = 0    // For Chrome, Firefox, IE and Opera
    // getNames('israeluribe')                   // Testing endpoint
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>

      <div className='full s-center s-to-center s-border default-margin ed-grid s-grid-1 
                      rows-gap s-gap-1 m-gap-05 s-pxy-05 s-mb-4 s-main-center s-cross-center'>

        <div className='dark-bkg s-100 m-95 s-center s-to-center s-border s-radius ed-grid s-grid-1 m-grid-5 
                        rows-gap s-gap-05 s-pxy-05 m-pxy-2 s-main-center s-cross-center'>

          <div className='m-x-2 m-cols-3'>
            <div className='m-40 s-to-center'>
              <img src={torreBrandLogo} alt='torreBrandLogo' />
            </div>
            <h2 className='m-mb-2'>Genome Viewer</h2>
            <p>
              <span>by </span>
              <a className='dev-link' href='https://bio.torre.co/es/israeluribe/' 
                 target='_blank' rel='noopener noreferrer'>
                MrIsrael
              </a>
            </p>
          </div>

          <div className='m-y-2 m-x-2'>
            <button className='t-button s-pxy-1 m-px-3' onClick={() => { {/* nextScreen(5) */} }}>
              <p className='s-mb-0'>PRESS TO START</p>
              <p className='s-mb-0'>(or hit Enter key)</p>
            </button>
          </div>

          <div className='m-x-4'>
            <button className='t-button s-px-1 s-py-2 m-px-3'>
              <p className='s-mb-0'>
                <a className='dev-link' href='https://bio.torre.co/es/israeluribe/' 
                   target='_blank' rel='noopener noreferrer'>
                  <span style={{ color: 'rgb(13, 30, 33)', textDecoration: 'none' }}>Go to creators bio</span>
                </a>
              </p>
            </button>
          </div>

        </div>

      </div>

    </Fragment>
  )
}

export default StartPage
