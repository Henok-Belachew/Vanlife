import React from 'react' 
import {Link, NavLink} from "react-router-dom";
import logo from '../images/logo.png';


export default function Header () {
    
    return (
        <nav className="flex justify-between items-center bg-[#FFF7ED] py-8 px-10">
            <Link to="/"><img className="w-[110px]" src={logo} alt="" /></Link>   
            <ul className="flex gap-5 text-sm font-semibold text-[#4D4D4D]">
                <NavLink className={({isActive}) =>  isActive ? "active" : null}  to="/host"><li className='hover:text-black hover:underline'>Hosts</li></NavLink>
                <NavLink to="/vans" >
                    <li className='hover:text-black hover:underline'>Vans</li></NavLink>   
                <NavLink  to="/about"><li className='hover:text-black hover:underline'>About</li></NavLink>   
            </ul>
        </nav>
    )
}