import React from 'react';
import "./MyGigs.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {dataGigs} from './data'

function MyGigs(props) {

    const displayRow=(gig)=>{
        return <>
            <tr key={gig.id}>
                <td><img src={gig.imgPath} alt=""/></td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.rating}</td>
                <td><FontAwesomeIcon icon={faTrash} size='2xl' color='red'/></td>
            </tr>
        </>
    }
    return (
        <div className='myGigs'>
            <div className="container">
                <div className="row">
                    <h1>Gigs</h1>
                    <button>Add New Gig</button>
                </div>
                <div className="list-gigs">
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Orders</th>
                            <th>Actions</th>
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