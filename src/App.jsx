import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Van_Detail from "./pages/VansDetail";
import About from "./pages/About";
import HostLayout from "./componenets/HostLayout";
import HostVans from "./pages/Host/Vans";
// import HostVans from "./componenets/hostVans";





import Layout from "./componenets/layout";

// Let's import the hosts pages
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";

// import Layout from "./componenets/Layout.jsx";
// import Layout from './componenets/Layout'

import './styles.css'
// import './index.css'
// import './host.css'
// import './vans.css'
// import { About, Vans } from "./Components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



export default function App () {

    
    return (
        <BrowserRouter>
                <div className="w-[480px] mx-auto bg-[#FFF7ED] relative">
                    {/* Nav header was here :( */}
                <div className="relative">
                <Routes>
                    <Route element={<Layout/>}>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/vans" element={<Vans/>}/>
                            {/* <Route path="/host" element={<Host/>}/> */}
                            <Route path="/vans/:id" element={<Van_Detail/>}/>

                            <Route path="/host" element={<HostLayout/>}> 
                                    <Route path="/host" element={<Dashboard/>}/>
                                    <Route path="/host/income" element={<Income/>}/>
                                    <Route path="/host/reviews" element={<Reviews/>}/>
                                    <Route path="/host/vans" element={<HostVans/>}/>
                            </Route>
                            
                    </Route>
            
                </Routes>
                </div>        
                </div>
        </BrowserRouter>        
    )
}