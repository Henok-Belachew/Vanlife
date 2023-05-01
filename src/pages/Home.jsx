import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/about.png";


export default function Home () {
    return (
       <div className="contianer hm">
            <div className="contents hm-content">
                <h1 id='title'>
                    You got the travel plans, we got the travel vans.
                </h1>
                <p>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                
                    <Link  to="/vans">
                        <button>
                            Find your van
                        </button>
                    </Link>
   
            </div>
            <div className="bg"></div>
            <img className="img1" src={img} alt="" />
       </div>
    ) 
}