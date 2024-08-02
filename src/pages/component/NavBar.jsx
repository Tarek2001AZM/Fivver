import React, {useEffect} from 'react';
import './NavBar.scss'
import {Link, useLocation} from "react-router-dom";
function NavBar() {
    const [isVavScrolled, setIsScrolled] = React.useState(false);
    const [isShowedMenuUser, setIsShowedMenuUser] = React.useState(false);

    const {pathname} = useLocation();
    const isscrolled=()=>{
        window.addEventListener("scroll",()=>{
            return window.scrollY >0 ? setIsScrolled(true):setIsScrolled(false);
        })
    }
    useEffect(() => {
        isscrolled()

        return ()=>{
            window.removeEventListener("scroll",isscrolled)
        }
    }, []);

    const CurrentUser={
        id:1,
        username:'tarekAZM',
        isSeler:true,

    }

    return (
        <div className={isVavScrolled || pathname !== "/" ? "NavBar active" :"NavBar "}>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='link'>
                        <span className='text'>Fiver</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Fivver Busness </Link>
                    <Link to='/' className='link'>Explore</Link>
                     <Link to='/' className='link'>English</Link>
                    <Link to='/' className='link'>Sign In</Link>
                    {!CurrentUser?.isSeler && <Link to='/' className='link'> Bcome a Seller</Link>}
                    {!CurrentUser?.isSeler && <button>Join</button>}
                    {CurrentUser && (
                        <div className="user">
                            <img src=" https://codeskulptor-demos.commondatastorage.googleapis.com/pang/Vlt8FBC.png" alt="" className='UserImage' />
                            <Link to='' className='link userName' onClick={()=>setIsShowedMenuUser(prev=>!prev)}>{CurrentUser.username}</Link>
                            {
                                isShowedMenuUser ? <div className="options">
                                    {
                                        CurrentUser?.isSeler && <>
                                            <span><Link to='/gigs' className='link'>Gigs</Link></span>
                                            <span><Link to='/add' className='link'>Add New Gig</Link></span>
                                            <span><Link to='/mygigs' className='link'>My Gigs</Link></span>

                                        </>
                                    }
                                    <span><Link to='/orders' className='link'>Orders</Link></span>
                                    <span><Link to='/messages' className='link'>Messages</Link></span>
                                    <span><Link to='/messages' className='link'>Messages</Link></span>
                                    <span><Link to='/' className='link'>logout</Link></span>


                                </div> : ''
                            }

                        </div>
                    )}
                </div>

            </div>
            {isVavScrolled || pathname !== "/" ?
                <>
                    <hr/>
                    <div className='menu'>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>
                        <span>Grphic&design</span>


                    </div>
                </>:''
            }


        </div>

    );

}

export default NavBar;