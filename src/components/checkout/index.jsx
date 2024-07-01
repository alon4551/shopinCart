import React from 'react'
import Item from '../cartItem'
import Cart from '../cart'
import './style.css'
function Checkout(props) {
  return (
    <div className='container'>
      <div>
        <h1>Shoping Cart</h1>
        <Cart classname={''} id={''} cart={props.cart} reduce={props.reduce} addToCart={props.addToCart} remove={props.remove} />
        <button onClick={props.purchase}>Buy</button>
      </div>
    </div>
  )
}//

export default Checkout