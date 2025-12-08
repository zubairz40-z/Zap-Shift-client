import React from "react";
import Banner from "./Banner/Banner";
import Work from "./Works/Work";
import Service from "./Servicee/Service";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews"; // Reviews will fetch JSON itself

const Home = () => {
  return (
    <div>
      <div className="m-5">
        <Banner />
      </div>

      <Work />

      <Service />

      <Brands />

      {/* Reviews component will fetch reviews.json from public folder */}
      <Reviews />
    </div>
  );
};

export default Home;
