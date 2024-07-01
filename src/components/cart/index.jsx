import React from 'react'
import Item from '../cartItem'
import './style.css'
function Cart(props) {
    return (
        <div className={`cart ${props.classname}`} id={props.navCart}>
            <table>
                <thead>
                    <tr>
                        <td>product</td>
                        <td>price</td>
                        <td>amount</td>
                        <td>total</td>
                    </tr>
                </thead>
                <tbody>
                    {

                        props.cart.map((item) => {
                            return <Item key={item.name} product={item} reduce={props.reduce} addToCart={props.addToCart} remove={props.remove} />
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Cart