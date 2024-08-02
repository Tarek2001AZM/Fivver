import React from 'react';
import "./Fetured.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
function Fetured(props) {
    return (
        <div className='feature'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance </i>services for your vusiness</h1>
                <div className="search">
                    <div className="searchInput">
                        <FontAwesomeIcon icon={faSearch} className='iconSearch' />
                        <input type="text" placeholder='search now'/>
                    </div>
                    <button >Search</button>

                </div>
                <div className="popular">
                    <span>Popular :</span>
                    <button>Web Design</button>
                    <button>Ai Services</button>
                    <button>ReactJs</button>
                    <button>Writing</button>

                </div>

            </div>
            <div className="right">
                <img src='./imgs/person.png' alt=""/>
            </div>
        </div>
        </div>


    );


}

export default Fetured;