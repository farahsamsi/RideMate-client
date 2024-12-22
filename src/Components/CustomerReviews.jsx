// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";

import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  value: 5,
  edit: false,
};

const CustomerReviews = () => {
  const testimonials = [
    {
      name: "Dan Martin",
      role: "Customer",
      review:
        "RideMate made my trip smooth and hassle-free. Highly recommended for anyone looking for affordable rentals.",
      image: "https://i.ibb.co.com/GCDSnK9/Untitled-design-4-1.png", // Replace with your image URL
    },
    {
      name: "Sarah Lee",
      role: "Customer",
      review:
        "The car was in perfect condition, and the booking process was seamless. Fantastic service!",
      image: "https://i.ibb.co.com/3NvpjM4/Untitled-design-5-1.png",
    },
    {
      name: "James Brown",
      role: "Customer",
      review:
        "I’ve used RideMate several times, and they never disappoint. Great variety of cars and excellent support!",
      image: "https://i.ibb.co.com/YPsLvkr/Untitled-design-6-1.png",
    },
    {
      name: "Emily Davis",
      role: "Customer",
      review:
        "From start to finish, my experience was amazing. I’ll definitely use RideMate again!",
      image: "https://i.ibb.co.com/3hS0fDf/Untitled-design-7-1.png",
    },
    {
      name: "John Smith",
      role: "Customer",
      review:
        "Affordable prices, reliable cars, and quick support – everything you’d want in a car rental service.",
      image: "https://i.ibb.co.com/khF4tqY/Untitled-design-8-1.png",
    },
  ];

  return (
    <div className="my-4 md:my-6 lg:my-20 container mx-auto">
      {/* swiper */}
      <div className="w-11/12 mx-auto rounded-lg lg:grid lg:grid-cols-2">
        <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
          <h1 className={`text-2xl lg:text-5xl font-bold `}>Happy Customers</h1>
          <p className="font-medium px-4">
            Real Stories, Real Experiences – Hear What Our Customers Have to Say
          </p>
        </div>
        <div>
          <Swiper
            effect={"fade"}
            //   navigation
            pagination={{
              clickable: true,
            }}
            modules={[Virtual, EffectFade, Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            className=""
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mockup-window bg-base-300 border">
                    <div className="bg-base-200 flex flex-col justify-start items-start px-6 py-6">
                      {/* Quote Icon */}
                      <div className="flex flex-col items-center w-full">
                        <div className="text-primary text-4xl">
                          <span className="font-bold">“</span>
                        </div>
                        {/* Review Text */}
                        <p className="text-center leading-relaxed mb-6">
                          {testimonial.review}
                        </p>
                      </div>
                      {/* User Info */}
                      <div className="flex items-center space-x-4">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src={testimonial.image} />
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm ">{testimonial.role}</p>
                        </div>
                      </div>
                      {/* Rating */}
                      <div className="mt-4 flex space-x-1">
                        <ReactStars {...firstExample} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
