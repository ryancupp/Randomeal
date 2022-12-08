import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css';

const Button = () => {
    const navigate = useNavigate();

    const buttonClicker = e => {
        navigate("/random")
    }

    return (
        <div>
            <form action=""></form>
            <button className='randomButton' onClick={e => buttonClicker()}>random recipe</button>
        </div>
    )
}

export default Button