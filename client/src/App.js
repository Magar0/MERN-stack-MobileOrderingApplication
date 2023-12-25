import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Product from './pages/product/Product'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/:id" element={<Product />} />

        </Route>
      </Routes>
    </>

  )
}

export default App