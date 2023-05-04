import React from 'react'
import Van from './Van'
import Data from '../API'


// import vans from "./images/vans.png"




export default function Vans () {
    const Vans = Data.map((van) => {
        return (<Van 
        id={van.id}
        name={van.name}
        price={van.price}
        type={van.type}
        desc = {van.description}
        img = {van.imageUrl}
        />)
    })
    return (
       <div className="contianer vans">
            <div className="heading">
                <h2>Explore our van options</h2>
                <div className="filters">
                    <button className="filter">Simple</button>
                    <button className="filter">Luxury</button>
                    <button className="filter">Rugged</button>
                    <button className="clear">Clear filters</button>
                </div>
            </div>

            <div className="all-vans flex flex-wrap gap-10">
                {Vans}
            </div>

       </div>
    ) 
}
