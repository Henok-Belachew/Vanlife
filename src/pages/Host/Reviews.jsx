import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IMG from '../../images/rating.png'

export default function Reviews () {
    return (
        <div className='px-10'>
            <div className='flex flex-row gap-5 items-center'>
                <h1 className='text-[25px] py-2  font-bold'>Your reviews</h1>
                <span className=''>Last <span className='underline font-semibold'>30 days</span></span>
            </div>
            <div className='flex flex-row items-center'>
                <h1 className='text-[25px] py-2  font-bold'>5.0</h1>
                <FontAwesomeIcon className='text-sm px-1 ml-1 block' icon={faStar} style={{color: "#FF8C38",}}/>
                <span className='text-semibold'>overall rating</span>
            </div>
            <img src={IMG} className='py-3' alt="" />
            <div>
                <h3 className='font-bold my-3'>Reviews(2)</h3>
                <div className='flex flex-row gap-1 text-xs my-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                </div>
                <h3 className='font-bold text-sm'>Elliot <span className='font-semibold text-[#4D4D4D]'>Decemeber 1,2022</span></h3>
                <p className='text-xs my-2'>
                    The beach bum is such as awesome van! Such as comfortable trip. we had it for 2 weeks
                    and theer was not a single issue. Super clean when we picked it up and the host is very conmforable and understanding. Highly recommend!
                </p>
            </div>
            <hr className='bg-[#4D4D4D] text-[#4D4D4D] h-[1.2px] my-5'  />
            <div>
                
                <div className='flex flex-row gap-1 text-xs my-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FF8C38",}}/>
                       
                </div>
                <h3 className='font-bold text-sm'>Sandy <span className='font-semibold text-[#4D4D4D]'>Novmember 23,2022</span></h3>
                <p className='text-xs my-2 mb-5'>
                    This is our third time using the Modes Explorer for our travels and we love it! No compliants, absolutely perfect!
                </p>
                
            </div>
            
        </div>
        
    )
}