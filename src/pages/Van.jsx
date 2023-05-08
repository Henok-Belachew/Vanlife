import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'



export default function Van (props) {

    const [style, setStyle] = useState ({})

    function updateStyle () {
        if (props.type === "Simple") {
            setStyle({backgroundColor: "#E17654"})
        }
        else if (props.type === "Luxury") {
            setStyle({backgroundColor:  "#161616"})
        }
        else if (props.type === "Rugged") {
            setStyle({backgroundColor: "#115E59"})
            
        }
    }
    useEffect(() => {
        updateStyle();
      }, []);

    return (
        <div className="w-[190px]">
           
           <Link className="flex flex-col gap-2 items-start" to={`/vans/${props.id}`}> 
                    <img className="rounded-md" src={props.img} alt="" />
                    <div className="flex justify-between self-stretch">
                        <h2 className="font-bold text-[15px]">{props.name}</h2>
                        <h2 className='font-bold'>${props.price}<span className='font-light'>/day</span> </h2>
                    </div>
                    <span style={ style } className="px-8 py-2 rounded-md text-white text-sm">{props.type}</span>   
            </Link>
        </div>
    )
}