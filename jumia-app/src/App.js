import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from './components/Notfound'
import Nav from './components/Nav'
import Admin from './components/Admin'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Notfound/>}/>
      <Route path='/' element={<Nav/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </>
  )
}

export default App