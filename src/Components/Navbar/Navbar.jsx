import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
    return (
        <div className="flex">
            
            {/* <ul style={{display:"flex",justifyContent:'between',alignItems:'center',gap:'18px',textDecoration:'none'}}>
                <li style={{backgroundColor:'green',color:'white',padding:'4px',borderRadius:'4px',cursor:'pointer'}}>list1</li>
                <li style={{backgroundColor:'green',color:'white',padding:'4px',borderRadius:'4px',cursor:'pointer'}}>list2</li>
                <li style={{backgroundColor:'green',color:'white',padding:'4px',borderRadius:'4px',cursor:'pointer'}}>list3</li>
                <li style={{backgroundColor:'green',color:'white',padding:'4px',borderRadius:'4px',cursor:'pointer'}}>list4</li>
                <li style={{backgroundColor:'green',color:'white',padding:'4px',borderRadius:'4px',cursor:'pointer'}}>list5</li>
            </ul> */}
            <div className="navbar  flex gap-4 bg-base-100 ">
  <div className="flex-1">
   <button className="btn">Hello!</button>
  </div>
  <div className="gap-10">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    {
      user && <Link to="/task">Add Task</Link>
    }
  </div>
  <div><NavLink to='/login'>Login</NavLink></div>
  <div><NavLink to='/register'>Register</NavLink></div>
  <div className="flex-none ">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>{user?.email}</a></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;