import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './components/MainPage'

import './App.css'

const App = () => {
  const routes = (
    <Routes>
      <Route path='/' exact element={<MainPage />}>        
      </Route>
    </Routes>
  )

  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  )
}

export default App
