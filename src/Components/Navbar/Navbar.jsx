import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="px-8  text-gray-900">
      <div className="navbar  flex gap-4 ">
        <div className="flex-1">
          <button className="btn">Hello!</button>
        </div>
        <div className="gap-10">
          <Link to="/">Home</Link>

          {user && <Link to="/task">Add Task</Link>}
        </div>
        {user ? (
          <>
            <div className="flex-none ">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="user" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>{user?.email}</a>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/register">Register</NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
