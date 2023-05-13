import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Vans from './Vans';

import Dashboard from './Dashboard';




export default function Host () {

   

    
    return (
        
        <div className=''>
            {/* <BrowserRouter> */}
            
            {/* Routes */}
            <div>
            <Dashboard/>
            {/* <Routes>
                <Route path='/host' element={<Dashboard/>}></Route>
                <Route path='/host/income' element={<Vans/>}></Route>
                <Route path='/host/vans' element={<Dashboard/>}></Route>
                <Route path='/host/reviews' element={<Dashboard/>}></Route>
            </Routes> */}
            </div>

            {/* </BrowserRouter> */}
        </div>
    )
}