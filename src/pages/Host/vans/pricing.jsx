import React from 'react'
import Data from '../../../API';
import { useParams } from 'react-router-dom';

export default function Pricing () {
    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);
    return (
        <h1 className='font-bold text-[20px]'>
           ${targetVan.price}<span className='font-light text-sm'>/day</span> 
        </h1>
    )
}