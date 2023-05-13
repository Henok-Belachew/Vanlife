import React from 'react'
import Data from '../API'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

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
        <div className="px-10 flex flex-col items-start gap-4 mb-8">
            <Link  to="/vans">
            <span className="text-sm underline font-semibold"><FontAwesomeIcon icon={faArrowLeftLong} style={{color: "#000000",}} />  Back to all vans</span>
            </Link>
                 
                 <img className='rounded-lg' src={targetVan.imageUrl} alt="" />
                 <span style={ style } className="px-10 py-2 text-white rounded-md text-sm">{targetVan.type}</span>
                 <h2  className='text-[30px] font-bold p-0'>{targetVan.name}</h2>
                 <h2 className='text-[20px] font-bold p-0'>${targetVan.price}<span className='font-light'>/day</span> </h2>
                 <p className='leading-[20px] text-[15px]'>{targetVan.description}</p>
                 <button className='bg-[#FF8C38] py-3 font-bold w-full rounded-lg text-sm text-white' >Rent this van</button>
        </div>
    )
}
