import React from 'react'
import img from '../images/van2.png'
import { Outlet, Link, useParams } from 'react-router-dom';
import Data from '../API';

export default function InnerLayout () {
    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);
    return (
        <div className='px-10'>
            <Link to="/host/vans"> <h3 className='text-sm underline font-semibold'>Back to all vans</h3> </Link> 

            <div className='bg-white p-5 my-4'>
                <div className='flex flex-row items-center gap-5'>
                    <img className='w-[160px]' src={img} alt="" />
                    <div className='flex flex-col gap-1 items-start'>
                        <span className='bg-orange-400 px-4 py-1 text-white rounded-md text-sm'>Simple</span>
                        <h1 className='font-bold text-[22px]'>Modest Explorer</h1>
                        <h2 className='font-bold'>$60/ <span className='font-light'>day</span>
                        </h2>

                    </div>
                </div>
                <nav className=''>
                    <ul className='flex flex-row gap-5 text-sm my-3'>
                        <Link to={`/host/vans/${params.id}`}> <li>Details</li> </Link>
                        <Link to={`/host/vans/${params.id}/pricing`}> <li>Pricing</li> </Link>
                        <Link to={`/host/vans/${params.id}/photos`}> <li>Photos</li> </Link>
                    </ul>
                </nav>
                <div>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}