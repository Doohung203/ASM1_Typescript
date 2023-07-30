import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPages'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import ProductPage from './pages/admin/Product'
import UpdateProductPage from './pages/admin/Update'
import AddProductPage from './pages/admin/AddProducts'


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/detail/:id" element={<DetailPage products={products} />} />
       <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductPage />} />
        <Route path='/admin/product/add' element={<AddProductPage/>} />
        <Route pat h='/admin/product/:id/update' element={<UpdateProductPage />} />
      </Routes>
    </>
  )

}

export default App
