import React from 'react'
import Landing from './Landing'
import { Routes, Route } from 'react-router-dom'
import Projects from './Projects'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Projects' element={<Projects/>}/>
    </Routes>
       
  )
}

export default App
