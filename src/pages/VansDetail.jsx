import React from 'react'
import Data from '../API'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Van_Detail () {

    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);
    // console.log(targetVan)


    // Updating the style of van type
    const [style, setStyle] = useState ({})

    function updateStyle () {
        if (targetVan.type === "Simple") {
            setStyle({backgroundColor: "#E17654"})
        }
        else if (targetVan.type === "Luxury") {
            setStyle({backgroundColor: "#161616"})
        }
        else if (targetVan.type === "Rugged") {
            setStyle({backgroundColor: "#115E59"})
            
        }
    }
    useEffect(() => {
        updateStyle();
      }, []);

    

    return (
        <div className="vanDetail">
            <Link  to="/vans">
            <span className="back"> -Back to all vans</span>
            </Link>
                 
                 <img src={targetVan.imageUrl} alt="" />
                 <span style={ style } className="van-typ typ-dt">{targetVan.type}</span>
                 <h2>{targetVan.name}</h2>
                 <h2>${targetVan.price}<span>/day</span> </h2>
                 <p>{targetVan.description}</p>
                 <button >Rent this van</button>
        </div>
    )
}
