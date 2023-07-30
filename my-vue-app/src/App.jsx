import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPages'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage products={products}/>} />
        <Route path="/detail/:id" element={<DetailPage products={products}/>} />
        <Route path="/admin/dasboard" element={} />
        <Route path="/admin/product" element={} />
        <Route path="/admin/product/add" element={} />
        <Route path="/admin/product/:id/update" element={} />
   
      </Routes>
    </>
  )

}

export default App
