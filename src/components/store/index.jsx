/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import list from '../../assets/store.json'
import Product from '../product'
import './style.css'
function Store(props) {
    return (
        <div className='store'>

            {
                list.map((product) => {
                    return (<Product key={product.name} name={product.name} price={product.price} action={props.addToCart} item={product} />)
                })
            }
        </div>
    )
}

export default Store