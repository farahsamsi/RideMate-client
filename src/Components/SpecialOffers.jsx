import AOS from "aos";
import { useEffect } from "react";

const SpecialOffers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      // easing: "ease-in-out",
      //   delay: 100,
    });
  }, []);
  return (
    <div className="my-4 md:my-6 lg:my-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>
          Special Offers Just for You
        </h1>
        <p className="font-medium  px-4">
          Unbeatable Deals on Your Favorite Rides – Grab Them Before They’re
          Gone!
        </p>
      </div>
      <div className="w-10/12 mx-auto">
        {/* card 1 */}
        <div
          className="card bg-base-100 w-full grid grid-cols-1 md:grid-cols-2
          gap-4 shadow-xl p-4 hover:scale-105 transition ease-in-out mb-6"
        >
          <figure className="">
            <img
              src="https://i.ibb.co.com/6vVSvqT/Untitled-design-1.jpg"
              alt="Cars"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0 items-center text-center">
            <div className="flex-1 flex flex-col items-center lg:justify-center ">
              <div className="flex flex-col items-center ">
                <h2 className="card-title lg:text-4xl">
                  Weekend Escape Discount
                </h2>
                <p>
                  Enjoy 20% off on all SUV rentals every weekend. Perfect for
                  road trips with friends and family.
                </p>
              </div>
            </div>
            <div className="card-actions w-full">
              <button className="btn bg-primary w-full ">Learn More</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          className="card bg-base-100 w-full flex-col-reverse md:grid md:grid-cols-2
          gap-4 shadow-xl p-4 hover:scale-105 transition ease-in-out mb-6"
        >
          <div className="card-body p-0 items-center text-center">
            <div className="flex-1 flex flex-col items-center lg:justify-center ">
              <div className="flex flex-col items-center ">
                <h2 className="card-title lg:text-4xl">Holiday Specials</h2>
                <p>
                  Celebrate the season with up to 30% off on luxury car rentals.
                  Make your holidays unforgettable!
                </p>
              </div>
            </div>
            <div className="card-actions w-full">
              <button className="btn bg-primary w-full ">Learn More</button>
            </div>
          </div>
          <figure className="">
            <img
              src="https://i.ibb.co.com/NLJjkpY/Untitled-design-2-1.jpg"
              alt="Cars"
              className="rounded-xl"
            />
          </figure>
        </div>

        {/* card 3 */}
        <div
          className="card bg-base-100 w-full grid grid-cols-1 md:grid-cols-2
          gap-4 shadow-xl p-4 hover:scale-105 transition ease-in-out mb-6"
        >
          <figure className="">
            <img
              src="https://i.ibb.co.com/x3kk0JL/Untitled-design-3-1.jpg"
              alt="Cars"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0 items-center justify-end text-center">
            <div className="flex-1 flex flex-col items-center lg:justify-center ">
              <div className="flex flex-col items-center ">
                <h2 className="card-title lg:text-4xl">Early Bird Saver</h2>
                <p>
                  Book your car 7 days in advance and get a 15% discount. Plan
                  ahead, save more!
                </p>
              </div>
            </div>
            <div className="card-actions w-full">
              <button className="btn bg-primary w-full ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
