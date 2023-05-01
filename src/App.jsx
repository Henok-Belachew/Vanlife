import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Van_Detail from "./pages/VansDetail";
import About from "./pages/About";
import Host from "./pages/host";
import './index.css'
import './host.css'
import './vans.css'
// import { About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {

    
    return (
        
        
        <div className="main">
            <BrowserRouter>
        <nav className="main-nav">
            <Link to="/"><h2>#VANLIFE</h2></Link>   
            <ul>
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