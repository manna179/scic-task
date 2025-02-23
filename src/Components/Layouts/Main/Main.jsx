import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Page/Footer";


const Main = () => {
    return (
        <div className="max-w-full">
           <div className="w-full bg-red-100">
           <Navbar></Navbar>
           </div>
            
           <div className="bg-red-50 w-11/12 mx-auto  ">
           <Outlet></Outlet>
           </div>
          <div className="bg-red-100 ">
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Main;