import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Checkout from './components/checkout'
import Store from './components/store'
import Cart from './components/cart'
function App() {
  const [route, setRoute] = useState('home')
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    let result = cart.filter(item => item.name == product.name)
    if (result.length == 1) {
      result[0].amount = result[0].amount + 1
      setCart([...cart])
    }
    else {
      result = {
        ...product,
        amount: 1
      }
      setCart([...cart, result])
    }
  }
  const reduce = (product) => {
    let result = cart.filter(item => item.name == product.name)
    if (result.length == 1 && result[0].amount != 1) {
      result[0].amount = result[0].amount - 1
      setCart([...cart])
    }

  }
  const purchase = () => {
    alert('thank you for purchaseing in sv Collage store')
    setRoute('home')
    setCart([])
  }
  const remove = (product) => {
    let result = cart.filter((item) => item.name != product.name)
    setCart(result)
  }
  return (
    <>
      <Navbar action={setRoute} />
      {
        route == 'home' ?
          <>
            <Store addToCart={addToCart} />
          </> :

          <><Checkout cart={cart} purchase={purchase} addToCart={addToCart} reduce={reduce} remove={remove} /></>
      }
    </>
  )
}

export default App
