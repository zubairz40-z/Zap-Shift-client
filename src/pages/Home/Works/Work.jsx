import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuPackageSearch } from "react-icons/lu";

const Work =()=>{
    return(
        <section className="py-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-secondary">How It Works</h3>
                  <p className="text-gray-500 mt-2">
                    Simple steps to send or receive packages hassle-free.
                  </p>
                </div>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2">
                  
                  <div className="card bg-base-100 shadow-md ">
                    <div className="card-body items-center text-center">
                      <TbTruckDelivery className="text-5xl text-secondary" />
                      <h2 className="card-title mt-2">Booking Pick & Drop</h2>
                      <p>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                  </div>
            <div className="card bg-base-100 shadow-md">
                    <div className="card-body items-center text-center">
                      <LuPackageSearch  className="text-5xl text-secondary" />
                      <h2 className="card-title mt-2">Fast Dispatch</h2>
                      <p>We assign the nearest rider instantly to ensure a faster pickup.</p>
                    </div>
                  </div>
        
                  <div className="card bg-base-100 shadow-md ">
                    <div className="card-body items-center text-center">
                    
                      <FaBusinessTime className="text-5xl text-secondary" />
                      <h2 className="card-title mt-2">Real-time Tracking</h2>
                      <p>Track your parcel anytime with our accurate GPS tracking system.</p>
                    </div>
                  </div>
        
                  <div className="card bg-base-100 shadow-md ">
                    <div className="card-body items-center text-center">
                      <RiSecurePaymentLine className="text-5xl text-secondary" />
                      <h2 className="card-title mt-2">Secure Delivery</h2>
                      <p>Your parcels are handled with care and delivered safely every time.</p>
                    </div>
                  </div>
        
                </div>
              </section>
    )
}

export default Work;