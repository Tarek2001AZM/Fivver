import React from 'react';
import './Gigs.scss'
import GigCard from "../component/gigCard/GigCard";
import {dataGigs} from "./dataGigs";
import {Link} from "react-router-dom";


function Gigs(props) {
    return (
        <div className="Gigs">
            <div className="container">
                <div className="head-top">
                <span>Fivver >Grphics&Design</span>
                <h1>Al Artists</h1>
                <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
                <div className="Filters">
                    <div className="left-filter">
                        <span>Budget</span>
                        <input type="text"/>
                        <input type="text"/>
                        <button>Apply</button>
                    </div>
                    <div className="right-filter">
                        <p> Sort by</p>
                        <span> Newest >

                        </span>
                    </div>

                </div>
                </div>
                <div className="gig-list">
                    {
                        dataGigs?.length > 0 ? dataGigs.map((item,key)=>{
                            return <GigCard gig={item} key={key} />
                    }
                    ) :''

                    }
                </div>
            </div>
        </div>
    );
}

export default Gigs;