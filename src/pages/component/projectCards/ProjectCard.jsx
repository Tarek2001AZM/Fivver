import React from 'react';
import '../slide/data'
import {Link} from "react-router-dom";
import {Slider} from 'infinite-react-carousel'
import './ProjectCard.scss'
function ProjectCard({cards,slidesToShow}) {

    const CatCard = (item) => (
        <Link to='' key={item.id} className='Linkcard'>
            <div className="card-2">
                <img src={item.imgPath} alt="" className="imgCard" />

                <div className="imgdesc">
                    <img src={item.imgPath} alt=""/>
                    <div className="desc">
                        <h3>{item.title}</h3>
                        <span>Anna bell</span>

                    </div>

                </div>

            </div>
        </Link>
    );


    return (
        <div className='slide-2'>
            <div className="container">

                <Slider slidesToShow={slidesToShow}>
                    {cards?.length > 0 ? cards.map((item) => CatCard(item)) : 'No data available'}
                </Slider>
            </div>
        </div>
    );
}

export default ProjectCard;
