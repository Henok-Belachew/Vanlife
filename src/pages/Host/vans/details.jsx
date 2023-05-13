import React from 'react'
import Data from '../../../API';
import { useParams } from 'react-router-dom';

export default function Details () {
    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);
    return (
        <div className='flex flex-col gap-2 text-sm'>
            <h1 className='font-bold'>Name: <span className='font-light'>{targetVan.name}</span></h1>
            <h2 className='font-bold'>Category:  <span className='font-light'>{targetVan.type}</span> </h2>
            <h2 className='font-bold'>Description: <span className='font-light'>{targetVan.description}</span></h2>
            <h2 className='font-bold'>Visibility: <span className='font-light'>Public</span> </h2>
        </div>
    )
}