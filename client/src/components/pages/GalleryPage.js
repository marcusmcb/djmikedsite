import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import MediaPlayer from '../shared/MediaPlayer'
import './gallerypage.css'
import '../shared/mediaplayer.css'

const GalleryPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='gallerypage-body'>
        <h3>future gallery page</h3>
      </div>
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <Footer />
    </Fragment>
  )
}

export default GalleryPage
