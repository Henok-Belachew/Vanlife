import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/about.png";


export default function Home () {
    return (
       <div className="relative h-[300px] ">
            <div className="relative z-10 pt-12 h-full text-white px-10 flex-col gap-10 justify-between items-center ">
                <h1 id='title' className="font-bold text-[30px] leading-none block my-2">
                    You got the travel plans, we got the travel vans.
                </h1>
            <p className="leading-normal block mt-5">
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                
                    <Link className="block my-5"  to="/vans">
                        <button className="mx-auto block px-auto w-full mt-1 text-white rounded-[5px] bg-[#FF8C38] py-3 text-xs font-bold">
                            Find your van
                        </button>
                    </Link>
   
            </div>
            {/* <div className="bg"></div> */}
            <img className="absolute top-0 z-1 w-full h-full" src={img} alt="" />
       </div>
    ) 
}