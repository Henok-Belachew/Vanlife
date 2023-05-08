import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Van_Detail from "./pages/VansDetail";
import About from "./pages/About";
import Host from "./pages/host";
import logo from './images/logo.png'
import './styles.css'
// import './index.css'
// import './host.css'
// import './vans.css'
// import { About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {

    
    return (
        
        
        <div className="w-[450px] mx-auto bg-red-300 relative">
            <BrowserRouter>
        <nav className="flex justify-between items-center bg-[#FFF7ED] py-8 px-10">
            <Link to="/"><img className="w-[100px]" src={logo} alt="" /></Link>   
            <ul className="flex gap-5 text-sm">
                <Link className="" to="/host"><li>Hosts</li></Link>
                <Link to="/vans"><li>Vans</li></Link>   
                <Link to="/about"><li>About</li></Link>   
            </ul>
        </nav>
        <div className="relative">
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/vans" element={<Vans/>}></Route>
            <Route path="/host" element={<Host/>}></Route>
            <Route path="/vans/:id" element={<Van_Detail/>}></Route>
            
        </Routes>
        </div>
        
        </BrowserRouter>
        <footer className="bg-[#252525] text-white text-xs text-center py-3">
            <span>&copy; 2023 #VANLIFE</span>
        
        </footer>
        </div>
        
        

        
    )
}