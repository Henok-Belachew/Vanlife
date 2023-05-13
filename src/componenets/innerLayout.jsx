import React from 'react'

import { Outlet, NavLink, useParams, Link } from 'react-router-dom';
import Data from '../API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

export default function InnerLayout () {

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
      });

    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);

    const styleNav = {
        color: "#000000",
        textDecoration: "underline",
        fontWeight: "bolder"
    }
    return (
        <div className='px-10'>
            <Link to="/host/vans"> <h3 className='text-sm underline font-semibold text-[#4D4D4D] hover:text-black'> <FontAwesomeIcon icon={faArrowLeftLong} />  Back to all vans</h3> </Link> 

            <div className='bg-white p-5 my-4'>
                <div className='flex flex-row items-center gap-5'>
                    <img className='w-[160px]' src={targetVan.imageUrl} alt="" />
                    <div className='flex flex-col gap-1 items-start'>
                        <span style={style} className='px-4 py-1 text-white rounded-md text-sm'>{targetVan.type}</span>
                        <h1 className='font-bold text-[22px]'>{targetVan.name}</h1>
                        <h2 className='font-bold'>${targetVan.price}/ <span className='font-light'>day</span>
                        </h2>

                    </div>
                </div>
                <nav className=''>
                    <ul className='flex flex-row gap-5 text-sm my-6 font-semibold text-[#4D4D4D]'>
                        <NavLink end style={({isActive}) =>  isActive ? styleNav : null} to={`/host/vans/${params.id}`}> <li className='hover:text-black hover:underline'>Details</li> </NavLink>
                        <NavLink style={({isActive}) =>  isActive ? styleNav : null}  to={`/host/vans/${params.id}/pricing`}> <li className='hover:text-black hover:underline'>Pricing</li> </NavLink>
                        <NavLink style={({isActive}) =>  isActive ? styleNav : null} to={`/host/vans/${params.id}/photos`}> <li className='hover:text-black hover:underline'>Photos</li> </NavLink>
                    </ul>
                </nav>
                <div>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}