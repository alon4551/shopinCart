import React from 'react'
import './style.css'
function Product(props) {
    const addToCart = () => {
        props.action(props.item)
    }
    return (
        <div className='item'>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <button onClick={addToCart} >+</button>
        </div>
    )
}

export default Product