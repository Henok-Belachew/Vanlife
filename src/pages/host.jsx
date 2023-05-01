import React from 'react';
import Data from '../API';


export function Van (props) {
    return (
        <div className='van-card'>
            <img src={props.img} alt="" />
            <div className="van-dt">
                <div className="van-left">
                    <h2>{props.name}</h2>
                    <span>${props.price}/day</span>
                </div>

                <span>Edit</span>
            </div>
        </div>
    )
}

export default function Host () {

    const all_vans = Data.map((a_van)=> {
        return (<Van 
            name = {a_van.name} 
            price = {a_van.price}
            img = {a_van.imageUrl}
            />)
            
    })

    
    return (
        <div className='host'>
            <nav className="host-nav">
                <ul>
                    <li>Dashboard</li>
                    <li>Income</li>
                    <li>Vans</li>
                    <li>Reviews</li>
                </ul>
            </nav>

            <div className="wel">
                <h1>Welcome!</h1>
                <div className='flex-row'>
                    <span>Income last <span className='day'>30 days</span></span>
                    <span>Details</span>
                </div>
                <h1>$2,260</h1>

                
            </div>
            <div className='flex-row wel-btm'>
                    <h2 className='bold'>Review score 5.0<span className='thin'>/5</span></h2>
                    <span>Details</span>
            </div>
            <div className="van-list">
                <h2 className='list-top'>Your listed vans <span>View all</span></h2>
            
                <div className="list">
                {
                    all_vans
                }
                </div>
            </div>


        </div>
    )
}