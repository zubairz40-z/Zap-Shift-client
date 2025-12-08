import React from "react";
import { 
  TbTruckDelivery,
  TbWorld,
  TbBuildingWarehouse,
  TbCash,
  TbBuildingFactory2,
  TbArrowBackUp
} from "react-icons/tb";

const Service = () => {
  return (
    <div className="max-w-7xl bg-secondary rounded-2xl p-10 space-y-4">

      {/* Title */}
      <h3 className="text-white text-3xl font-bold">Our Services</h3>
      <p className="text-white ">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        {/* CARD TEMPLATE */}
        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition ">
          <TbTruckDelivery className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">
            Express & Standard Delivery
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Delivery within 24–72 hours nationwide. Dhaka express delivery within 4–6 hours.
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition bg-primary">
          <TbWorld className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">Nationwide Delivery</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Delivery to all districts within 48–72 hours.
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition">
          <TbBuildingWarehouse className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">Fulfillment Solution</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Inventory, packaging, processing, and customer support for online stores.
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition">
          <TbCash className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">Cash on Delivery</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Safe and secure COD service anywhere in Bangladesh.
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition">
          <TbBuildingFactory2 className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">
            Corporate Logistics
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Custom logistics, warehousing, and contracts for businesses.
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-5 shadow hover:shadow-md transition">
          <TbArrowBackUp className="text-4xl text-secondary mx-auto" />
          <h2 className="text-lg font-semibold mt-3 text-center">Parcel Return</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Easy return / exchange service for online merchants.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Service;
