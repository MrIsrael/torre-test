import React, { Fragment, useState, useContext, useEffect } from 'react'
import { TorreContext } from '../../context/TorreState'

const GenomeViewer = () => {
  const { userinfo, flagDataLoaded } = useContext(TorreContext)
  const [layoutHeight, setLayoutPicHeight] = useState(0)
  const [dataPage, setDataPage] = useState(1)

  function changePage(sideTurn) {
    if ( (sideTurn === -1 && dataPage > 1) || (sideTurn === 1 && dataPage < 4) ) {
      setDataPage(dataPage + sideTurn)
    }
  }

  function getEducationTitles(userinfo) {
    let data, temp, titles = []
    data = userinfo.education.map(obj => Object.entries(obj))
    for (let i=0; i < data.length; i++) {
      temp = data[i].filter(arr => arr[0] === 'name')
      titles.push(temp[0][1])
    }
    return titles
  }

  useEffect(() => {
    setLayoutPicHeight(window.innerHeight)          // browser's viewport height
    // eslint-disable-next-line
  }, [])

  if (flagDataLoaded) {
    return (
      <Fragment>

        <div className='m-80 lg-60 s-to-center'>
          <div className='s-center s-to-center ed-grid s-grid-10 rows-gap s-gap-05 s-main-center s-cross-center'
               style={{ height: layoutHeight }}>

            <div className='s-cols-10 s-mb-1 m-mb-2'>
              <h1 className='s-mb-2 m-mb-3'>User's bio highlights</h1>
              <p style={{ color: 'rgb(205, 220, 57)' }}>{dataPage}/4</p>
              <div className='s-40 m-25 s-to-center s-mb-1 m-mb-3'>
                <div className='circle img-container'>
                  <img src={userinfo.person.picture} alt={userinfo.person.name} />
                </div>
              </div>
              <h2>{userinfo.person.name}</h2>
            </div>

            <div className='s-left'>
              <i className = {dataPage === 1 ? 'invisible' : 'fas fa-arrow-alt-circle-left cursor-pointer'} 
                 style={{ fontSize: '30px' }} onClick={() => { changePage(-1) }}></i>
            </div>

            <div className='s-cols-8 ed-grid s-grid-1 rows-gap s-gap-05 s-main-center s-cross-center'>
              {dataPage === 1 && <div>
                                   <i className='fas fa-user-tie' style={{ fontSize: '50px' }}></i>
                                   <h1>Professional Headline</h1>
                                   <h3>{userinfo.person.professionalHeadline}</h3>
                                 </div>}
              {dataPage === 2 && <div>
                                  <i className='fas fa-id-card-alt' style={{ fontSize: '50px' }}></i>
                                  <h1>Torre ID</h1>
                                  <h3>{userinfo.person.publicId}</h3>
                                </div>}
              {dataPage === 3 && <div>
                                  <i className='fas fa-globe-americas' style={{ fontSize: '50px' }}></i>
                                  <h1>Location</h1>
                                  <h3>{userinfo.person.location.name}</h3>
                                </div>}
              {dataPage === 4 && <div>
                                  <i className='fas fa-graduation-cap' style={{ fontSize: '50px' }}></i>
                                  <h1>Education</h1>
                                  {getEducationTitles(userinfo).map((title, index) => <p className='navbar-font s-mb-05' key={index}>{title}</p>)}
                                </div>}
            </div>

            <div className='s-right'>
              <i className = {dataPage === 4 ? 'invisible' : 'fas fa-arrow-alt-circle-right cursor-pointer'} 
                 style={{ fontSize: '30px' }} onClick={() => { changePage(1) }}></i>
            </div>

          </div>
        </div>

      </Fragment>
    )
  }

  return null
}

export default GenomeViewer
