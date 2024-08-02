import NavBar from "./pages/component/NavBar";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from './pages/component/Footer/Footer'
import Gigs from "./pages/gigs/Gigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/mygigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Gig from "./pages/gig/Gig";
import Add from "./pages/addgig/Add";
import './App.scss'
function App() {
    const LayOut=()=>{
        return (
            <>
                <div>
                    <NavBar/>
                    <Outlet/>
                    <Footer/>
                </div>
            </>
        )
    }
    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayOut />}>
                        <Route path='/' element={<Home/>} />
                        <Route path='/gigs' element={<Gigs />} />
                        <Route path='/gig/:id' element={<Gig />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/mygigs' element={<MyGigs />} />
                        <Route path='/messages' element={<Messages />} />
                        <Route path='/message/:id' element={<Message />} />
                        <Route path='/add' element={<Add />} />



                    </Route>
                </Routes>
          </BrowserRouter>


  </>




  );
}

export default App;
