import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Addimages from '../components/Addimages'
import Personl from '../components/Personl'
import Preview from '../components/Preview'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addimage' element={<Addimages/>} />
        <Route path='/preview-image/:id' element={<Preview/>} />
        <Route path='/uploaded-image' element={<Personl/>} />
    </Routes>
  )
}

export default Routers