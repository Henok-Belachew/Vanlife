import React from 'react' 
import {Link} from "react-router-dom";
import logo from '../images/logo.png';


export default function Header () {
    return (
        <nav className="flex justify-between items-center bg-[#FFF7ED] py-8 px-10">
            <Link to="/"><img className="w-[110px]" src={logo} alt="" /></Link>   
            <ul className="flex gap-5 text-sm">
                <Link className="" to="/host"><li>Hosts</li></Link>
                <Link to="/vans"><li>Vans</li></Link>   
                <Link to="/about"><li>About</li></Link>   
            </ul>
        </nav>
    )
}