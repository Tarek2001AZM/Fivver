import React from 'react';
import './Slide.scss';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';



function Slide({cards,slidesToShow}) {

    const CatCard = (item) => (
        <Link to='/gigs' key={item.id} className='Linkcard'>
            <div className="card">
                <span>{item.title}</span>
                <img src={item.imgPath} alt="" />
            </div>
        </Link>
    );



    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow}>
                    {cards?.length > 0 ? cards.map((item) => CatCard(item)) : 'No data available'}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
