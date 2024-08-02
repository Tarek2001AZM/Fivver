import React from 'react';
import {dataJobs} from "./dataJobs";
import './Footer.scss'
const dataShow=(item,key)=>{
    return <>

        <div className="category" key={key}>
            <h1>{item.category}</h1>

            {
                item.jobs?.length > 0 ? item.jobs.map((item,key)=>{
                    return <>
                        <span>{item.title}</span>
                    </>
                    }) :''
            }

        </div>
    </>
}

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    {
                        dataJobs?.length >0 ? dataJobs.map((item,key)=>dataShow(item,key)):''
                    }
                </div>
                <div className="bottom">
                    <div className="left">
                        <h2>Fivver©</h2>
                        <span>© Fiverr International Ltd. 2024</span>
                    </div>
                    <div className="right">
                        <div className="sub-left">
                            <img src="./imgsRsocio/facebook.PNG" alt=""/>
                            <img src="./imgsRsocio/instagram.PNG" alt=""/>
                            <img src="./imgsRsocio/linkden.PNG" alt=""/>
                            <img src="./imgsRsocio/pintrest.PNG" alt=""/>
                            <img src="./imgsRsocio/ticktok.PNG" alt=""/>
                            <img src="./imgsRsocio/x.PNG" alt=""/>
                        </div>
                        <div className="sub-right">
                            <button>Englich</button>
                            <button>$ USD</button>
                            <img src="./imgsRsocio/perso.PNG" alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;