import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from './components/Notfound'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Notfound/>}/>
      <Route path='/' element={<Nav/>}/>
    </Routes>
    </>
  )
}

export default App