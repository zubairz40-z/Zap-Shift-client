import React, { useContext } from "react";
import Logo from './../../Components/Logo/Logo';
import { NavLink } from "react-router";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, googleSignIn } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
    </>
  );

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => toast.success("Logged in with Google!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-secondary text-xl">
          <Logo />
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {!user ? (
          <>
            <NavLink to="/login" className="btn btn-outline btn-primary">Login</NavLink>
            <NavLink to="/register" className="btn btn-primary text-white">Register</NavLink>
           
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "https://i.pravatar.cc/300"} alt="User Avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><span>{user.displayName || user.email}</span></li>
              <li><button onClick={logOut} className="text-red-500">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
