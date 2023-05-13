import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function HostLayout () {
    return (
        <div>
           <nav className="host-nav">
                <ul className='flex flex-row gap-10 px-10 my-5 text-sm'>
                    <Link to="/host"><li className='cursor-pointer'>Dashboard</li></Link>
                    <Link to="/host/income"><li className='cursor-pointer'>Income</li></Link>
                    <Link to="/host/vans"><li className='cursor-pointer'>Vans</li></Link>
                    <Link to="/host/reviews"><li className='cursor-pointer'>Reviews</li></Link>
                </ul>
            </nav> 

            <div>
                <Outlet/>
            </div>

        </div>

    )
}