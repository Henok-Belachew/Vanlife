import React from 'react' 
import {Link, NavLink} from "react-router-dom";
import logo from '../images/logo.png';


export default function Header () {
    
    return (
        <nav className="flex justify-between items-center bg-[#FFF7ED] py-8 px-10">
            <Link to="/"><img className="w-[110px]" src={logo} alt="" /></Link>   
            <ul className="flex gap-5 text-sm font-semibold text-[#4D4D4D]">
                <NavLink className={({isActive}) =>  isActive ? "active" : "hover:text-black hover:font-bold hover:underline"}  to="/host"><li>Hosts</li></NavLink>
                <NavLink to="/vans" className={({isActive}) =>  isActive ? "active" : "hover:text-black hover:font-bold hover:underline"}>
                    <li>Vans</li></NavLink>   
                <NavLink className={({isActive}) =>  isActive ? "active" : "hover:text-black hover:font-bold hover:underline"} to="/about"><li>About</li></NavLink>   
            </ul>
        </nav>
    )
}