import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import MediaPlayer from '../shared/MediaPlayer'
import './gallerypage.css'

const GalleryPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='gallerypage-body'>
        <h3>handsome boy modeling school</h3>
      </div>
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <Footer />
    </Fragment>
  )
}

export default GalleryPage
