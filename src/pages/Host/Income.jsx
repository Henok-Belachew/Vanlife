import React from 'react';
import income from '../../images/income.png'

export default function Income () {
    return (
        <div className='px-10'>
            <h1 className='text-[30px] py-2  font-bold'>Income</h1>
            <span className=''>Last <span className='underline font-semibold'>30 days</span></span>
            <h1 className='text-[40px] py-2 font-bold'>$2,260</h1>
            <img src={income} className='my-2' alt="" />

            <div className="my-5">
                <h2 className='flex flex-row justify-between items-center font-bold text-lg'>Your transactions (3) <span className='text-sm font-normal'>Last <span className='underline font-semibold text-sm'>30 days</span></span> </h2>

                <div className="my-5 flex flex-col gap-4">
                    <div className='bg-white rounded-md flex flex-row justify-between p-5'>
                        <h1 className='font-bold text-[25px]'>$720</h1>
                        <span>1/12/22</span>
                    </div>

                    <div className='bg-white rounded-md flex flex-row justify-between p-5'>
                        <h1 className='font-bold text-[25px]'>$560</h1>
                        <span>10/11/22</span>
                    </div>

                    <div className='bg-white rounded-md flex flex-row justify-between p-5'>
                        <h1 className='font-bold text-[25px]'>$980</h1>
                        <span>23/11/22</span>
                    </div>

                </div>
            </div>
        </div>
        
    )
}