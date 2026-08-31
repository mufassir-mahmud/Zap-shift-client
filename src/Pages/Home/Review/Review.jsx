import React, { use } from "react";

import customerTop from "../../../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Swiper modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  console.log(reviews);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col text-center items-center gap-5 my-10">
        <img className="w-[200px]" src={customerTop} alt="" />

        <h2 className="text-2xl font-semibold">
          What our customers are saying
        </h2>

        <p className="text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce
          <br />
          pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Swiper */}
      <div className="my-5">
        <Swiper
          loop: true
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={20}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {" "}
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="!w-auto flex justify-center"
            >
              {" "}
              <ReviewCard review={review} />{" "}
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
