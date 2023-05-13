import React from 'react'
import Data from '../../../API';
import { useParams } from 'react-router-dom';

export default function Photos () {
    const params = useParams()
    const targetVan = Data.find(van => van.id === params.id);
    return (
       <img className='w-[80px] rounded-md' src={targetVan.imageUrl} alt="" />
    )
}