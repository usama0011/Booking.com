import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchTest from './components/SearchTest'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/country/:id' element={<Country />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<SearchTest />} />
      </Routes>
    </>
  )
}

export default App