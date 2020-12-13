import React, { Fragment, useState, useContext, useEffect } from 'react'
import { TorreContext } from '../../context/TorreState'

const GenomeViewer = ({ changeScreen }) => {
  const [layoutHeight, setLayoutPicHeight] = useState(0)
  let nextScreen = changeScreen

  useEffect(() => {
    setLayoutPicHeight(window.innerHeight)      // browser's viewport height
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>

      <div className='s-center s-to-center ed-grid s-grid-1 m-grid-3 rows-gap s-gap-05 s-main-center s-cross-center'
           style={{ height: layoutHeight }}>

        <div className='m-x-2'>
          <h2 className='m-mb-1'>Dummy text</h2>
        </div>

        <div className='m-y-2 m-x-2 m-mb-2 ed-grid s-grid-1 m-grid-2 rows-gap s-gap-1'>
          <div className='t-blinking-button'>
            <button className='t-button s-pxy-1 m-py-2 m-px-3' style={{ width: '180px' }} onClick={() => {  }}>
              <p className='s-mb-0'>PRESS TO START</p>
            </button>
          </div>

        </div>

      </div>

    </Fragment>
  )
}

export default GenomeViewer
