import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Page/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
           <div className="bg-red-50">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;