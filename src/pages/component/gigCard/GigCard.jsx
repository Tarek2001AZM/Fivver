import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
import './GigCard.scss'
import {Link} from "react-router-dom";

function GigCard({gig,key}) {
    return (
        <Link to={`/gig/${gig.id}`} className='link'>
            <div className='card' key={key}>
                <img src='./imgsGigs/react 1.webp' alt=""/>
                <div className="details">
                    <div className="info">
                        <img src="./imgsGigs/react 1.webp" alt=""/>
                        <span>{gig["title"].substring(0, 20)}</span>
                    </div>
                    <p>{gig["description"].substring(0, 40)}...</p>
                    <FontAwesomeIcon icon={faStar} className='star'/>
                </div>
                <hr/>
                <div className="price">
                    <FontAwesomeIcon icon={faHeart} className='star'/>
                    <div className="price-info">
                        <h3>STARTING AT</h3>
                        <span>${gig["price"]}</span>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default GigCard;