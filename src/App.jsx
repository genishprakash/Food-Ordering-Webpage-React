
import './App.css'
import Header from './components/Header/Header'
import Meals from './components/MealsComponent/Meals'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
function App() {
  const [showCart,setshowCart]=useState(false)

  const showCartHandler=()=>{
    setshowCart(true);
  }
  const hideCartHandler=()=>{
    setshowCart(false);  
  }
  return (
    <>
     {showCart && <Cart onHideCart={hideCartHandler}></Cart>}
     <Header onShowCart={showCartHandler}></Header>
     <Meals></Meals>
    </>
  )
}

export default App
