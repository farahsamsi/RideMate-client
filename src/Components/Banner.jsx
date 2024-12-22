import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner() {
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

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full  min-h-[calc(100vh-100px)] overflow-hidden relative py-5">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 duration-1000 ${
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
                <span className="text-primary font-audioWide">RideMate</span>
              </h2>
              <p className="text-lg mb-4">
                Find the Perfect Ride, Anytime, Anywhere – Your Journey Begins
                with RideMate!
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
  );
}

export default Banner;
