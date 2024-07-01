import React from 'react'
import './style.css'
function index(props) {
    const changeRoute = (route) => {
        props.action(route)
    }
    const onHover = () => {
        document.querySelector('#navCart').classList.remove('hidden')
    }
    const onLeave = () => {
        document.querySelector('#navCart').classList.add('hidden')
    }
    return (
        <div className="navbar">
            <button onClick={() => { changeRoute('home') }}>Home</button>
            <h2>SV_Collage Store</h2>
            <button className='cartBtn' onMouseEnter={onHover} onMouseLeave={onLeave} onClick={() => { changeRoute('store') }}>Cart</button>
        </div>
    )
}

export default index