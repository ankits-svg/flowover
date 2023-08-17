import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'
import Results from './Results'

const Allroutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
  )
}

export default Allroutes
