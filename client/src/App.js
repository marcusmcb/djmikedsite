import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './components/pages/MainPage'
import GalleryPage from './components/pages/GalleryPage'
import PatreonPage from './components/pages/PatreonPage'
import ContactPage from './components/pages/ContactPage'

import './App.css'

const App = () => {
  const routes = (
    <Routes>
      <Route path='/' exact element={<MainPage />}></Route>
      <Route path='/gallery' element={<GalleryPage />}></Route>
      <Route path='/patreon' element={<PatreonPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
  )

  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  )
}

export default App
