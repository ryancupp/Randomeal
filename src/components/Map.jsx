import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Map = () => {
    const [city, setCity] = useState("Denver");

    return (
        <div className='mapMainDiv'>
            <form>
                <div className='cityInputDiv'>
                    <label>city:</label>
                    <input onChange={e => setCity(e.target.value)}/>
                </div>
            </form>
            <iframe
                style={{ width: "900px", height: "700px", frameborder: "0", border: "0" }}


                referrerPolicy="no-referrer-when-downgrade"
                src={'https://www.google.com/maps/embed/v1/search?key={YOUR_API_KEY}&q=grocery+stores+in+' + city}
                allowFullScreen>
            </iframe>
            <Link className='links' to={"/"}>Home</Link>
        </div>
    )
}

export default Map

