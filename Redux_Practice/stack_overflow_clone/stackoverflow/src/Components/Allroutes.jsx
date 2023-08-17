import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Loggin from './Loggin'
import Dashboard from './Dashboard'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/log' element={<Loggin/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
    </Routes>
  )
}

export default Allroutes
