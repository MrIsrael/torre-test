import React, { Fragment, useContext, useEffect } from 'react'
import { TorreContext } from '../../context/TorreState'

const Main = () => {
  const { userinfo, getNames, flagDataLoaded } = useContext(TorreContext)

  useEffect(() => {
    document.body.scrollTop = 0               // For Safari
    document.documentElement.scrollTop = 0    // For Chrome, Firefox, IE and Opera
    getNames('israeluribe')                   // Testing endpoint
    // eslint-disable-next-line
  }, [])

  if (flagDataLoaded) {
    return (
      <Fragment>

        <div className='s-95 m-90 s-center s-to-center s-border s-radius default-margin ed-grid
                        s-grid-1 m-grid-10 rows-gap s-gap-1 m-gap-05 s-pxy-4 s-mb-4 s-main-center s-cross-center'>

          <h1 className='m-cols-10'>User Info</h1>
          <h4 className='m-cols-10 s-mt-4'>Torre API data retrieval test</h4>

          <div className='m-cols-3 circle img-container'>
            <img src={userinfo.person.picture} alt={userinfo.person.name} />
          </div>

          <div className='m-cols-7'>
            <p className='s-mb-0'><strong>Name:</strong> {userinfo.person.name}</p>
            <p className='s-mb-0'><strong>Headline:</strong> {userinfo.person.professionalHeadline}</p>
            <p className='s-mb-0'><strong>Torre ID:</strong> {userinfo.person.publicId}</p>
            <p className='s-mb-0'><strong>Location:</strong> {userinfo.person.location.name}</p>
            <p className='s-mb-0'><strong>Education:</strong> {userinfo.education[1].name}</p>
            <p className='s-mb-0'><strong>University:</strong> {userinfo.education[1].organizations[0].name}</p>
            <p className='s-mb-0'><strong>LinkedIn address:</strong> {userinfo.person.links[0].address}</p>
          </div>

        </div>

      </Fragment>
    )
  }

  return null
}

export default Main
