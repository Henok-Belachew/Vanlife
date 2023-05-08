import React from 'react'
import { Link } from 'react-router-dom';
import vans from "../images/vans.png"

export default function About () {
    return (
        <div className="">
            <img className="" src={vans} alt="" />
            <div className="px-10 flex flex-col gap-4 mb-8">
                <h1 className='text-[28px] font-bold leading-[1.8rem] my-2'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
                </p>
                <p className='mt-4'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="bg-[#FFCC8D] p-8 rounded-lg"> 
                    <h2 className='text-[22px] font-bold leading-[1.8rem]'>
                    Your destination is waiting. <br></br>
                    Your van is ready.
                    </h2>
                    
                    <Link  to="/vans">
                        <button className='bg-black text-white px-10 py-4 rounded-md mt-4 text-sm font-bold'>
                            Explore our vans
                        </button>
                    </Link> 
                    
                    

                </div>
            </div>

        </div>
    )
}