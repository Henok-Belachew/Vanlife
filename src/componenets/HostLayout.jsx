import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export default function HostLayout () {
    const style = {
        color: "#000000",
        textDecoration: "underline",
        fontWeight: "bolder"
    }
    return (
        <div>
           <nav className="">
                <ul className='flex flex-row gap-10 px-10 my-5 text-sm font-semibold text-[#4D4D4D]'>
                    <NavLink style={({isActive}) =>  isActive ? style : null}  end to="/host"><li className='hover:text-black hover:underline'>Dashboard</li></NavLink>
                    <NavLink to="/host/income"><li className='hover:text-black hover:underline'>Income</li></NavLink>
                    <NavLink to="/host/vans"><li className='hover:text-black hover:underline'>Vans</li></NavLink>
                    <NavLink to="/host/reviews"><li className='hover:text-black hover:underline'>Reviews</li></NavLink>
                </ul>
            </nav> 

            <div>
                <Outlet/>
            </div>

        </div>

    )
}