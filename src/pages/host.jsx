import React from 'react';
import img from '../images/van1.png'
// import Data from '../API';


// export function Van (props) {
//     return (
//         <div className='van-card'>
//             <img src={props.img} alt="" />
//             <div className="van-dt">
//                 <div className="van-left">
//                     <h2>{props.name}</h2>
//                     <span>${props.price}/day</span>
//                 </div>

//                 <span>Edit</span>
//             </div>
//         </div>
//     )
// }

export default function Host () {

    // const all_vans = Data.map((a_van)=> {
    //     return (<Van 
    //         name = {a_van.name} 
    //         price = {a_van.price}
    //         img = {a_van.imageUrl}
    //         />)
            
    // })

    
    return (
        <div className=''>
            <nav className="host-nav">
                <ul className='flex flex-row gap-10 px-10 my-5 text-sm'>
                    <li>Dashboard</li>
                    <li>Income</li>
                    <li>Vans</li>
                    <li>Reviews</li>
                </ul>
            </nav>

            <div className="wel px-10 bg-orange-100">
                <h1 className='text-[30px] py-2  font-bold'>Welcome!</h1>
                <div className='flex-row flex justify-between text-sm'>
                    <span className=''>Income last <span className='underline font-semibold'>30 days</span></span>
                    <span>Details</span>
                </div>
                <h1 className='text-[32px] py-3 font-bold'>$2,260</h1>

                
            </div>
            <div className='flex justify-between flex-row py-5 bg-orange-200 px-10'>
                    <h2 className='font-bold text-lg'>Review score 5.0<span className='font-light'>/5</span></h2>
                    <span className='text-sm'>Details</span>
            </div>
            <div className="px-10 my-5">
                <h2 className='flex flex-row justify-between font-bold'>Your listed vans <span className='text-sm font-normal'>View all</span></h2>

                <div className="list my-5 flex flex-col gap-3">

                    {/* List-item-1 */}
                    <div className='flex flex-row p-3 bg-white rounded-sm'>
                        <img src={img} className='w-[65px] rounded-md'  alt="" />
                        <div className="flex flex-row justify-between items-center w-full ml-2 text-sm">
                            <div className="">
                                <h2 className='font-bold'>Modest Explorer</h2>
                                <span>$60/day</span>
                            </div>

                            <span className=''>Edit</span>
                        </div>
                    </div>

                    {/* List-item-2 */}
                    <div className='flex flex-row p-3 bg-white rounded-sm'>
                        <img src={img} className='w-[65px] rounded-md'  alt="" />
                        <div className="flex flex-row justify-between items-center w-full ml-2 text-sm">
                            <div className="">
                                <h2 className='font-bold'>Beach Bum</h2>
                                <span>$60/day</span>
                            </div>

                            <span className=''>Edit</span>
                        </div>
                    </div>

                    {/* List-item-3 */}
                    <div className='flex flex-row p-3 bg-white rounded-sm'>
                        <img src={img} className='w-[65px] rounded-md'  alt="" />
                        <div className="flex flex-row justify-between items-center w-full ml-2 text-sm">
                            <div className="">
                                <h2 className='font-bold'>Green Wonder</h2>
                                <span>$70/day</span>
                            </div>

                            <span className=''>Edit</span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}