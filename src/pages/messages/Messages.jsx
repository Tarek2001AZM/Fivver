import React from 'react';
import "./Messages.scss"
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
        <div className='messages'>
            <div className="container">
                <h1>Messages</h1>
                <div className="list-gigs">
                    <table>
                        <tr className='header' >
                            <th>Buyer</th>
                            <th className='MessageTh'>Message</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        {
                            dataGigs?.length ? dataGigs.map((gig) => displayRow(gig)) : ''
                        }


                    </table>
                </div>
            </div>

        </div>
    );
}

export default MyGigs;