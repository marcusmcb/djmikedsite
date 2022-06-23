import React, { Fragment } from 'react'
import MediaPlayer from '../shared/MediaPlayer'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import './mainpage.css'

const MainPage = () => {
  return (
    <Fragment>      
      <Navbar/>
      <div className='mainpage-body'>
        <h3>main page body</h3>
      </div>     
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <Footer />
    </Fragment>
  )
}

export default MainPage
