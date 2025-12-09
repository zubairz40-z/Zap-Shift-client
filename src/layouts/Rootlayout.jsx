import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <div>
         <Footer />
      </div>
     
    </div>
  );
};

export default RootLayout;


