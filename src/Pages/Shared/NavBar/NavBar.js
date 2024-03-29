import React, { useContext } from "react";
import logo from '../../../img/logo.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const handleSignOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutme'>About Me</Link></li>
        <li><Link to='/contact'>Contact</Link></li>    
        { user?.uid ?
          <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </>
          :
          <></>
        }    
    </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">
            <img className='h-12' src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {menuItems}
        </ul>
      </div>
      { user?.uid ?
        <div className="navbar-end">
          <button onClick={handleSignOut}>Sign Out</button>         
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        :
        <div className="navbar-end">
        <Link to='/signin' className="btn">Sign In</Link>
        </div>
      }
    </div>
  );
};

export default NavBar;
