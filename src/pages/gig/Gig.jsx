import React from 'react';
import './Gig.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faClock, faStar, faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import Slide from "../component/slide/Slide";
import {data} from '../component/slide/data'
function Gig(props) {
    const setImagesToData=(data)=>{
         if(data?.length >0){
             for(let i=0;i<data?.length-1;i++){
                 data[i].imgPath=`../imgsGigs/react ${i+1}.webp`;
             }

             return data
         }
         return undefined
    }
console.log(setImagesToData(data))
    return (
        <div className='Gig'>
            <div className="cantainer">
                <div className="left">
                    <div className="left-head">
                        <h1>I will create ai generated art for you</h1>
                        <div className="info">
                            <img src="../imgsGigs/react 1.webp" alt=""/>
                            <span>Tarek AL azami</span>
                            <FontAwesomeIcon icon={faStar} className='star'/>
                            <FontAwesomeIcon icon={faStar} className='star'/>
                            <FontAwesomeIcon icon={faStar} className='star'/>
                            <FontAwesomeIcon icon={faStar} className='star'/>
                            <FontAwesomeIcon icon={faStar} className='star'/>

                        </div>
                        <Slide cards={setImagesToData(data)} slidesToShow={1}/>

                    </div>
                    <div className='descreption'>
                        <h1>About This Gig: </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid delectus distinctio doloribus et, facere illum in
                            laboriosam magni molestias, nulla officia optio provident
                            reprehenderit
                            sit suscipit voluptatem voluptates voluptatibus? Fugiat.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid delectus distinctio doloribus et, facere illum in
                            laboriosam magni molestias, nulla officia optio provident
                            reprehenderit
                            sit suscipit voluptatem voluptates voluptatibus? Fugiat.</p>

                    </div>
                    <div className="About-Selter">
                        <h1>About The Seller</h1>
                        <div className="info">
                            <img src="../imgsGigs/react 1.webp" alt=""/>
                            <div className="sub-info">
                                <span>Tarek AL azami</span>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='star'/>
                                    <FontAwesomeIcon icon={faStar} className='star'/>
                                    <FontAwesomeIcon icon={faStar} className='star'/>
                                    <FontAwesomeIcon icon={faStar} className='star'/>
                                    <FontAwesomeIcon icon={faStar} className='star'/>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="details">
                            <div className="row">
                                <span>From</span>
                                <span>Member since</span>
                            </div>
                            <div className="row">
                                <span>From</span>
                                <span>Member since</span>
                            </div>
                            <div className="row">
                                <span>From</span>
                                <span>Member since</span>
                            </div>
                            <div className="row">
                                <span>From</span>
                                <span>Member since</span>
                            </div>
                            <div className="row">
                                <span>From</span>
                                <span>Member since</span>
                            </div>
                            <div className="row-Last">
                                <hr/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae consectetur u Dolorum ducimus enim molestiae tenetur?</p>
                            </div>

                        </div>
                    </div>
                    <div className="Reviews-section">
                        <h1>Reviews</h1>
                        <div className="Reviews">
                            <div className="info">
                                <img src="../imgsGigs/react 1.webp" alt=""/>
                                <div className="sub-info">
                                    <h3>Tarek AL azami</h3>
                                    <span>Morroco</span>

                                </div>
                            </div>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                            </div>
                            <div className="desc">

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae consectetur u Dolorum ducimus enim molestiae tenetur?
                                </p>
                                <div className="opinions">
                                    <span>Helpful? </span>
                                    <FontAwesomeIcon icon={faThumbsUp} className='star'/>
                                    <span>Yes</span>
                                    <FontAwesomeIcon icon={faThumbsDown} className='star'/>
                                    <span>No</span>

                                </div>
                            </div>
                        </div>
                        <div className="Reviews">
                            <div className="info">
                                <img src="../imgsGigs/react 1.webp" alt=""/>
                                <div className="sub-info">
                                    <h3>Tarek AL azami</h3>
                                    <span>Morroco</span>

                                </div>
                            </div>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                                <FontAwesomeIcon icon={faStar} className='star'/>
                            </div>
                            <div className="desc">

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae consectetur u Dolorum ducimus enim molestiae tenetur?
                                </p>
                                <div className="opinions">
                                    <span>Helpful? </span>
                                    <FontAwesomeIcon icon={faThumbsUp} className='star'/>
                                    <span>Yes</span>
                                    <FontAwesomeIcon icon={faThumbsDown} className='star'/>
                                    <span>No</span>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="right">
                    <div className="cart">
                        <div className="cart-header">
                            <h2>1 Ai generated Image</h2>
                            <span>$5.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Culpa cum exercitationem labore odit quia repellat,
                            reprehenderit.
                        </p>
                        <div className="middle-header">
                            <div className="delivery">
                                <FontAwesomeIcon icon={faClock} className='Clock'/>
                                <span>2 Days Delivery</span>
                            </div>

                            <span>2  Revisions</span>
                        </div>
                        <div className="options">
                            <span> <FontAwesomeIcon icon={faCheck} className='check'/>prompt writing</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check'/>writing writing</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check'/>Image writing</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check'/>Artwork writing</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check'/>Design writing</span>
                        </div>
                        <button>Continue</button>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gig;