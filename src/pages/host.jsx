import React from 'react';
import img from '../images/van1.png'
import Data from '../API';


export function Van (props) {

    if (props.listed == true) {
    return (
        <div className='flex flex-row p-3 bg-white rounded-sm'>
            <img src={props.img} className='w-[65px] rounded-md'  alt="" />
            <div className="flex flex-row justify-between items-center w-full ml-2 text-sm">
                <div className="">
                    <h2 className='font-bold '>{props.name}</h2>
                    <span>{props.price}/day</span>
                </div>

                <span className='cursor-pointer'>Edit</span>
            </div>
        </div>
    )
    }

}

export default function Host () {

    const listed_vans = Data.map((a_van)=> {
        return (<Van 
            name = {a_van.name} 
            price = {a_van.price}
            img = {a_van.imageUrl}
            listed = {a_van.listed}
            />)     
    })

    
    return (
        <div className=''>
            <nav className="host-nav">
                <ul className='flex flex-row gap-10 px-10 my-5 text-sm'>
                    <li className='cursor-pointer'>Dashboard</li>
                    <li className='cursor-pointer'>Income</li>
                    <li className='cursor-pointer'>Vans</li>
                    <li className='cursor-pointer'>Reviews</li>
                </ul>
            </nav>

            <div className="wel px-10 bg-orange-100 py-2">
                <h1 className='text-[30px] py-2  font-bold'>Welcome!</h1>
                <div className='flex-row flex justify-between text-sm'>
                    <span className=''>Income last <span className='underline font-semibold'>30 days</span></span>
                    <span className='cursor-pointer'>Details</span>
                </div>
                <h1 className='text-[32px] py-2 font-bold'>$2,260</h1>

                
            </div>
            <div className='flex justify-between flex-row py-5 bg-orange-200 px-10'>
                    <h2 className='font-bold text-lg'>Review score 5.0<span className='font-light'>/5</span></h2>
                    <span className='text-sm cursor-pointer'>Details</span>
            </div>
            <div className="px-10 my-5">
                <h2 className='flex flex-row justify-between font-bold text-lg'>Your listed vans <span className='text-sm font-normal cursor-pointer'>View all</span></h2>

                <div className="list my-5 flex flex-col gap-3">

                    {
                        listed_vans
                    }

                </div>
            </div>


        </div>
    )
}