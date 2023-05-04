import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Van_Detail from "./pages/VansDetail";
import About from "./pages/About";
import Host from "./pages/host";
import logo from './images/logo.png'
import './style.css'
// import './index.css'
// import './host.css'
// import './vans.css'
// import { About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {

    
    return (
        
        
        <div className="main w-[500px] mx-auto px-10 py-5 bg-[#FFF7ED]">
            <BrowserRouter>
        <nav className="main-nav flex justify-between align-center outline-dotted">
            <Link to="/"><img className="w-2/4" src={logo} alt="" /></Link>   
            <ul className="flex gap-5 text-sm">
                <Link to="/host"><li>Hosts</li></Link>
                <Link to="/vans"><li>Vans</li></Link>   
                <Link to="/about"><li>About</li></Link>   
            </ul>
        </nav>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/vans" element={<Vans/>}></Route>
            <Route path="/host" element={<Host/>}></Route>
            <Route path="/vans/:id" element={<Van_Detail/>}></Route>
            
        </Routes>
        </BrowserRouter>
        <footer>
            <span>&copy; 2023 #VANLIFE</span>
        
        </footer>
        </div>
        
        

        
    )
}