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
        <div className="van">
           
           <Link className='a-van' to={`/vans/${props.id}`}> 
                    <img className="van-img " src={props.img} alt="" />
                    <div className="btm">
                        <h2>{props.name}</h2>
                        <h2>${props.price}<span>/day</span> </h2>
                    </div>
                    <span style={ style } className="van-typ">{props.type}</span>   
            </Link>
        </div>
    )
}