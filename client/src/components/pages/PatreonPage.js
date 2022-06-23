import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import MediaPlayer from '../shared/MediaPlayer'
import './patreonpage.css'

const PatreonPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='patreonpage-body'>
        <h3>patreon campaigns go here</h3>
      </div>
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <Footer />
    </Fragment>
  )
}

export default PatreonPage
