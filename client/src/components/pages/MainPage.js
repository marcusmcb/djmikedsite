import React, { Fragment } from 'react'
import MediaPlayer from '../shared/MediaPlayer'
import Navbar from '../shared/Navbar'
import './mainpage.css'

const MainPage = () => {
  return (
    <Fragment>      
      <Navbar/>
      <div className='mainpage-body'>
        <h3>main page body</h3>
      </div>
      {/* <div className='media-player'>
        <h3>media player</h3>
      </div> */}
      <div className='media-player'>
        <MediaPlayer />
      </div>
      <div className='footer'>
        <h3>site footer</h3>
      </div>
    </Fragment>
  )
}

export default MainPage
