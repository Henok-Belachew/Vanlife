import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export default function HostLayout () {
    return (
        <div>
           <nav className="">
                <ul className='flex flex-row gap-10 px-10 my-5 text-sm font-semibold'>
                    <NavLink end to="/host"><li className='cursor-pointer'>Dashboard</li></NavLink>
                    <NavLink to="/host/income"><li className='cursor-pointer'>Income</li></NavLink>
                    <NavLink to="/host/vans"><li className='cursor-pointer'>Vans</li></NavLink>
                    <NavLink to="/host/reviews"><li className='cursor-pointer'>Reviews</li></NavLink>
                </ul>
            </nav> 

            <div>
                <Outlet/>
            </div>

        </div>

    )
}