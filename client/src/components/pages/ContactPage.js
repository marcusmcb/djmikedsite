import React, { Fragment } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import MediaPlayer from '../shared/MediaPlayer'
import './contactpage.css'

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='contactpage-body'>
        <h3>get in touch with me, yo</h3>
      </div>
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <Footer />
    </Fragment>
  )
}

export default ContactPage
