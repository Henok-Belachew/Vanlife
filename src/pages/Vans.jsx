import React, { useEffect } from 'react'
import Van from './Van'
import Data from '../API'

import { useState } from 'react'





// import vans from "./images/vans.png"




export default function Vans () {

    const [type, setType] = useState("all");
    

    const Vans = Data.map((van) => {
        const toReturn = <Van 
        id={van.id}
        name={van.name}
        price={van.price}
        type={van.type}
        desc = {van.description}
        img = {van.imageUrl}
        />
        if (type == "all") {
        return (toReturn) }
        else {
            if (van.type == type) {
                return (
                    toReturn
                )
            }  
        }   
    })

    return (
       <div className="px-10 bg-[#FFF7ED] mb-10 h-full">
            <div className="heading">
                <h2 className="text-[26px]  font-bold">Explore our van options</h2>
                <div  className="w-full flex justify-between my-4 text-xs">
                    <button 
                    onClick={() => {
                        setType("Simple")             
                    }}
                    
                     className="bg-[#FFEAD0] px-8 py-2 rounded-md">Simple</button>
                    <button onClick={() => {
                        setType("Luxury")                        
                    }} 
                    
                    className="bg-[#FFEAD0] px-8 py-2 rounded-md">Luxury</button>
                    <button 
                    onClick={() => {
                        setType("Rugged")                      
                    }} 
                     className="bg-[#FFEAD0] px-8 py-2 rounded-md">Rugged</button>
                    <button 
                    onClick={() => {
                        setType("all")
                    }}  className="">Clear filters</button>
                </div>
            </div>

            <div className="flex flex-wrap gap-5 h-full">
                {Vans}
            </div>

       </div>
    ) 
}
