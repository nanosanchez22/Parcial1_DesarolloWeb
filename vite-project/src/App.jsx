import { useState } from 'react'
import './App.css'
import Detalles from './Pages/Detalles/Detalles'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Agregar from './Pages/Agregar/Agregar'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalles/:id" element={<Detalles />} />
      <Route path="/agregar" element={<Agregar/>} />
    </Routes>
    </>
  )
}

export default App
