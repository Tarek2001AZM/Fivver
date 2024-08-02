import React from 'react';
import "./Message.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faTrash} from "@fortawesome/free-solid-svg-icons";
import {dataGigs} from '../mygigs/data'
import {Link} from "react-router-dom";


function MyGigs(props) {

    const displayRow=(message)=>{
        return <>
            <tr key={message.id}>
                <td>Buyer</td>
                <td colSpan={2} className='message'><Link to='/message/123' className='link'>{message.description}</Link></td>
                <td>Date</td>
                <td>
                    <button>Mark as Read</button>
                </td>
            </tr>
        </>
    }
    return (
        <div className='message'>

            <div className="container">
                <h1>Chat</h1>
                <div className="conversation">

                    <div className="sender">
                        <img src="../imgsGigs/react 1.webp" alt=""/>
                        <div className="sub-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, architecto ducimus eum eveniet explicabo facere libero maxime necessitatibus, nobis perferendis perspiciatis possimus quisquam similique sint velit vitae? Illum, nobis.</p>
                        </div>

                    </div>

                    <div className="reciever">
                        <img src="../imgsGigs/react 1.webp" alt=""/>
                        <div className="sub-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, architecto ducimus
                                eum eveniet explicabo facere libero maxime necessitatibus, nobis perferendis
                                perspiciatis possimus quisquam similique sint velit vitae? Illum, nobis.</p>
                        </div>
                    </div>
                    <div className="sender">
                        <img src="../imgsGigs/react 1.webp" alt=""/>
                        <div className="sub-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="reciever">
                        <img src="../imgsGigs/react 1.webp" alt=""/>
                        <div className="sub-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        </div>
                    </div>

                    <div className="sender">
                        <img src="../imgsGigs/react 1.webp" alt=""/>
                        <div className="sub-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        </div>
                    </div>


                </div>
                <div className="send-message">
                    <textarea className='content'>
                        write here ...
                    </textarea>
                    <button>Send</button>

                </div>


            </div>

        </div>
    );
}

export default MyGigs;