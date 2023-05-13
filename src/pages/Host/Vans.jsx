import React from 'react';
import Data from '../../API';
import { Link, useParams } from 'react-router-dom';

export function Van (props) {

    
    return (
        <div className='flex flex-row p-3 bg-white rounded-md gap-5 items-center cursor-pointer'>
            
                <img src={props.img} className='w-[65px] rounded-md'  alt="" />
            
                <div className="">
                    <h2 className='font-bold text-[17px]'>{props.name}</h2>
                    <span>{props.price}/day</span>
                </div>   
        </div>
    )

}



export default function Vans () {

    const params = useParams()
   


    const listed_vans = Data.map((a_van)=> {

        if (a_van.listed) {
        return (<Link to={`/host/vans/${a_van.id}`}> 
                    
                    <Van 
                        name = {a_van.name} 
                        price = {a_van.price}
                        img = {a_van.imageUrl}
                        listed = {a_van.listed}
                    />
                </Link>)   }
        
        return ""
    })

   
    return (
       <div className='px-10'>
            <h1 className='text-[25px] py-2  font-bold'>Your listed vans</h1>

            <div className="my-5">
    
                <div className="list my-5 flex flex-col gap-2">

                    {
                        listed_vans
                    }

                </div>
            </div>
       </div>
    )
}