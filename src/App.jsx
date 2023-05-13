import React from "react";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Van_Detail from "./pages/VansDetail";
import About from "./pages/About";
import HostLayout from "./componenets/HostLayout";
import HostVans from "./pages/Host/Vans";
// import HostVans from "./componenets/hostVans";

import InnerLayout from "./componenets/innerLayout";
import Details from "./pages/Host/vans/details";
import Pricing from "./pages/Host/vans/pricing";
import Photos from "./pages/Host/vans/Photos";



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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function App () {

    
    return (
        <BrowserRouter>
                <div className="w-[480px] mx-auto bg-[#FFF7ED] relative">
                    {/* Nav header was here :( */}
                <div className="relative">
                <Routes>
                    <Route element={<Layout/>}>
                            <Route path="about" element={<About/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="vans" element={<Vans/>}/>
                            {/* <Route path="/host" element={<Host/>}/> */}
                            <Route path="vans/:id" element={<Van_Detail/>}/>

                            <Route path="host" element={<HostLayout/>}> 
                                    <Route index element={<Dashboard/>}/>
                                    <Route path="income" element={<Income/>}/>
                                    <Route path="reviews" element={<Reviews/>}/>
                                    <Route path="vans" element={<HostVans/>}/>
                                    <Route path="vans/:id" element={<InnerLayout/>}>
                                        <Route index element={<Details/>}/>
                                        <Route path="pricing" element={<Pricing/>}/>
                                        <Route path="photos" element={<Photos/>}/>
                                    </Route>
                            </Route>
                            
                    </Route>
            
                </Routes>
                </div>        
                </div>
        </BrowserRouter>        
    )
}