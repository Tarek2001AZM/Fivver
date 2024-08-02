import React from 'react';
import './Add.scss'
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
        <div className='Add-Gig'>
            <div className="cantainer">
                <div className="left">
                    <h1>Add New Gig</h1>
                    <div className="input-fild">
                        <label>Title</label>
                        <input type="text" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <label>Category</label>
                        <select className='select-category'>
                            <option value="">chose category</option>
                            <option value="">design</option>
                            <option value="">design</option>
                            <option value="">design</option>

                        </select>
                    </div>
                    <div className="input-fild">
                        <label>choose File</label>
                        <input type="file" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <label>Discreption</label>
                        <textarea placeholder=" e.g write discreption"></textarea>

                    </div>
                    <div className="input-fild">
                        <label>Title</label>
                        <input type="text" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <button>Create</button>
                    </div>
                </div>
                <div className="right">
                    <div className="input-fild">
                        <label>Service Title</label>
                        <input type="text" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <label>Short Discreption</label>
                        <textarea placeholder=" e.g write discreption"></textarea>

                    </div>
                    <div className="input-fild">
                        <label>Delivry Time (e.g 3 days)</label>
                        <input type="text" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <label>Revision Number</label>
                        <input type="number" placeholder=" e.g i will do some thing i'm realy good at "/>
                    </div>
                    <div className="input-fild">
                        <label>Add Feature</label>
                        <input type="text" placeholder=" e.g page designing ... "/>
                    </div>
                    <div className="input-fild">
                        <input type="text" placeholder=" e.g file uploading ... "/>
                    </div>
                    <div className="input-fild">
                        <input type="text" placeholder=" e.g setting up a domain ... "/>
                    </div>
                    <div className="input-fild">
                        <input type="text" placeholder=" e.g hosting ... "/>
                    </div>
                    <div className="input-fild">
                        <label>Price</label>
                        <input type="text" placeholder=" e.g hosting ... "/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Gig;