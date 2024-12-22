import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const slides = [
    {
      image: "url('https://i.ibb.co.com/dD7z4wc/Untitled-design-1.png')",
    },
    {
      image: "url('https://i.ibb.co.com/2npsyWy/Untitled-design-2-1.png')",
    },
    {
      image: "url('https://i.ibb.co.com/RBpYyN2/Untitled-design-3-1.png')",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="my-4 md:my-6 lg:my-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Happy Customers</h1>
        <p className="font-medium px-4">
          Real Stories, Real Experiences – Hear What Our Customers Have to Say
        </p>
      </div>

      {/* carousel */}
      <div className="w-11/12 lg:w-8/12 mx-auto">
        <div className="carousel w-full min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-750px)] lg:min-h-[calc(100vh-450px)] overflow-hidden relative py-5">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-1000 ease-in-out ${
                index === currentSlide ? "z-10" : "z-0"
              }`}
              style={{
                backgroundImage: slide.image,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-6 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-extrabold my-4">
                    Your Next Car Awaits at{" "}
                    <span className="text-primary font-audioWide">
                      RideMate
                    </span>
                  </h2>
                  <p className="text-lg mb-4">
                    Find the Perfect Ride, Anytime, Anywhere – Your Journey
                    Begins with RideMate!
                  </p>
                  <div className="flex justify-center items-center gap-8">
                    <Link to="availableCars">
                      <button className="hover:scale-105 font-semibold text-black transition ease-in-out bg-primary p-4 flex items-center gap-2">
                        <span className="">
                          <FaCar />
                        </span>
                        View Available Cars
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Carousel controls */}
          <div className="absolute bottom-6 flex justify-center w-full space-x-2 z-40">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-primary" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
