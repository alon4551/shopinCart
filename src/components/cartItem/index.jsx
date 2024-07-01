import React, { useState, useEffect } from 'react'

function Item(props) {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.price * props.product.amount}</td>
            <td><button onClick={() => { props.reduce(props.product) }}>-</button></td>
            <td><button onClick={() => { props.addToCart(props.product) }}>+</button></td>
            <td><button onClick={() => { props.remove(props.product) }} >X</button></td>
        </tr>
    )
}


export default Item
