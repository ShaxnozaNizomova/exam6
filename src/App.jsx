import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/singlepage/:id' element={<SinglePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
