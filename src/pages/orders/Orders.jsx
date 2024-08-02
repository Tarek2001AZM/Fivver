import React from 'react';
import "./Orders.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faTrash} from "@fortawesome/free-solid-svg-icons";
import {dataGigs} from '../mygigs/data'

function MyGigs(props) {

    const displayRow=(gig)=>{
        return <>
            <tr key={gig.id}>
                <td><img src={gig.imgPath} alt=""/></td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.rating}</td>
                <td><FontAwesomeIcon icon={faEnvelope} size='2xl' className='icon'/></td>
            </tr>
        </>
    }
    return (
        <div className='myGigs'>
            <div className="container">

                <div className="list-gigs">
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Buyer</th>
                            <th>Contact</th>
                        </tr>
                        {
                            dataGigs?.length?dataGigs.map((gig)=>displayRow(gig)):''
                        }


                    </table>
                </div>
            </div>

        </div>
    );
}

export default MyGigs;