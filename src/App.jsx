import React from 'react'
import Landing from './Landing'
import { Routes, Route } from 'react-router-dom'
import Projects from './Projects'
import Errors from './Errors'
import Resume from './Resume'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='*' element={<Errors/>}/>
        <Route path='/Resume' element={<Resume/>}/>
    </Routes>
       
  )
}

export default App
