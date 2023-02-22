import React from 'react'
import Navbar from "./components/Navbar";
import ProductCart from "./components/ProductCart"
import CartPage from './components/CartPage';
import Crousel from './components/Crousel';
import CrouselCard from './components/CrouselCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux'
const App = () => {
  // const data = useSelector((c)=>{
  //  return c.show.value 
  // })
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route exact path='/' element={<ProductCart/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    {/* {data} */}
    </BrowserRouter>
    </div>
  )
}

export default App