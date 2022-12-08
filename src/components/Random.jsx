import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';


const Random = () => {
    
    const [randomMeal, setRandomMeal] = useState([])
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((apiResponse) => {
                console.log(apiResponse.data.meals)
                setRandomMeal(apiResponse.data.meals)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                randomMeal.map((rand, i) => {
                    return (
                        <div key={i}>

                            <h1>{rand.strMeal}</h1>
                            <img style={{ width: "200px" }} src={rand.strMealThumb} alt="" />
                            <p>{rand.strInstructions}</p>

                        </div>
                    )
                })
            }
            <div className='randomLinks'>
                <Link className='links' to={"/"}>Try again</Link>
                <Link className='links' to={"/map"}>Find a store</Link>
            </div>
        </div>
    )
}

export default Random