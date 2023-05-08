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
       <div className="px-10 bg-[#FFF7ED] mb-10 h-full">
            <div className="heading">
                <h2 className="text-[26px]  font-bold">Explore our van options</h2>
                <div className="w-full flex justify-between my-4 text-xs">
                    <button className="bg-[#FFEAD0] px-8 py-2 rounded-md">Simple</button>
                    <button className="bg-[#FFEAD0] px-8 py-2 rounded-md">Luxury</button>
                    <button className="bg-[#FFEAD0] px-8 py-2 rounded-md">Rugged</button>
                    <button className="">Clear filters</button>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 h-full">
                {Vans}
            </div>

       </div>
    ) 
}
