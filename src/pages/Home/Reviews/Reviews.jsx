import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import reviewphoto from '../../../assets/customer-top.png';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Reviews.json") // public folder path
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading reviews...</div>;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 relative">
      {/* Top image/banner */}
      <div className="flex justify-center mb-6">
        <img src={reviewphoto} alt="Customers" className=" object-cover " />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
        What Our Customers Are Saying
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl h-full">
              <img
                src={review.img}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-secondary"
              />
              <h3 className="font-bold text-lg text-secondary">{review.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{review.location}</p>
              <p className="mb-2 text-yellow-400">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-700">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
