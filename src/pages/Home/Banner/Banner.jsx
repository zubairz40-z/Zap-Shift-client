import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
      
      {/* SLIDE 1 */}
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute bottom-10 left-10 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-300 drop-shadow-lg">
            Fast & Secure Delivery
          </h2>

          <div className="flex gap-4">
            <button className="btn btn-primary text-white">Track Your Parcel</button>
            <button className="btn btn-secondary text-white">Be a Rider</button>
          </div>
        </div>
      </div>

      {/* SLIDE 2 */}
      <div className="relative">
        <img src={bannerImg2} />
        <div className="absolute bottom-10 left-10 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-300 drop-shadow-lg">
            Delivery Anywhere Anytime
          </h2>

          <div className="flex gap-4">
            <button className="btn btn-primary text-white">Track Your Parcel</button>
            <button className="btn btn-secondary text-white">Be a Rider</button>
          </div>
        </div>
      </div>

      {/* SLIDE 3 */}
      <div className="relative">
        <img src={bannerImg3} />
        <div className="absolute bottom-10 left-10 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-300 drop-shadow-lg">
            Safe, Fast & Reliable
          </h2>

          <div className="flex gap-4">
            <button className="btn btn-primary text-white">Track Your Parcel</button>
            <button className="btn btn-secondary text-white">Be a Rider</button>
          </div>
        </div>
      </div>

    </Carousel>
  );
};

export default Banner;
