import React from 'react';
import Fetured from "../component/fetured/Fetured";
import TrustedBy from "../component/trustedBy/TrustedBy";
import Slide from "../component/slide/Slide";
import { data } from '../component/slide/data';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import './Home.scss'
import ProjectCard from "../component/projectCards/ProjectCard";
import GigCard from "../component/gigCard/GigCard";
function Home(props) {
    return (
        <div className='container'>
            <Fetured/>
            <TrustedBy/>
            <Slide cards={data} slidesToShow={5}/>
            <div className="fetures">
                <div className="container">
                    <div className="left">
                        <h1>Hellow world how are you doing all things is goings as expected goood</h1>
                        <div className="bags">
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>

                        </div>
                    </div>
                    <div className="right">
                        <video controls>
                            <source src='./videos/3asara.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>

            </div>
            <div className="fetures busness ">
                <div className="container">
                    <div className="left">
                        <h1>Fivver <i>Busness</i></h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                        <div className="bags">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus deserunt dolor,
                                doloremque enim et, exercitationem ipsam iste necessitatibus </p>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <span><FontAwesomeIcon icon={faCircle} className='cercel'/> Lorem ipsum dolor sit amet, consectetur adipisicing !!</span>
                            <button>Explore Fivver Busness</button>
                        </div>
                    </div>
                    <div className="right">
                    <video controls>
                            <source src='./videos/3asara.mp4' type="video/mp4"/>
                        </video>
                    </div>
                </div>

            </div>
            <ProjectCard cards={data} slidesToShow={4}/>

        </div>
    );
}

export default Home;