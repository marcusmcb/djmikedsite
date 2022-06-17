import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './components/MainPage'
import GalleryPage from './components/GalleryPage'

import './App.css'

const App = () => {
  const routes = (
    <Routes>
      <Route path='/' exact element={<MainPage />}></Route>
      <Route path='/gallery' element={<GalleryPage />}></Route>
    </Routes>
  )

  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  )
}

export default App
