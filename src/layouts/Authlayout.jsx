import React from "react";
import { NavLink, Outlet } from "react-router";
import authImage from '../assets/authImage.png'
import Logo from './../pages/Components/Logo/Logo';

const Authlayout =()=>{
    return(
        <div className="max-w-7xl mx-auto">

         <NavLink to=""><Logo></Logo></NavLink>

         <div className="flex">
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

            <div>
              <img src={authImage} alt="" />
            </div>
         </div>
        </div>
    )
}
export default Authlayout;