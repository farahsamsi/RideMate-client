const WhyChooseUs = () => {
  return (
    <div className="my-4 md:my-6 lg:my-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Why Choose Us</h1>
        <p className="font-medium  px-4">
          Experience Unmatched Convenience, Quality, and Reliability – Here’s
          Why RideMate Stands Out!
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 w-11/12 mx-auto text-center">
        <div className="card card-compact bg-base-100 shadow-xl border transition  hover:scale-105">
          <figure className="pt-3">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/traffic-jam.png"
              alt="traffic-jam"
            />
          </figure>
          <div className="card-body">
            <h2 className=" font-bold  ">Wide Selection of Vehicles</h2>
            <p>
              Choose from a diverse range of cars, from budget-friendly options
              to luxury models, all maintained to the highest standards.
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl border transition  hover:scale-105">
          <figure className="pt-3">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/price-tag.png"
              alt="price-tag"
            />
          </figure>
          <div className="card-body ">
            <h2 className=" font-bold  ">Affordable Pricing</h2>
            <p>
              Transparent and competitive pricing with no hidden fees, ensuring
              you get the best value for your money.
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl border transition  hover:scale-105">
          <figure className="pt-3">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-booking-app-vacation-planning-guys-trip-flaticons-lineal-color-flat-icons.png"
              alt="external-booking-app-vacation-planning-guys-trip-flaticons-lineal-color-flat-icons"
            />
          </figure>
          <div className="card-body ">
            <h2 className=" font-bold  ">Seamless Booking Process</h2>
            <p>
              With our user-friendly platform, renting a car is quick, easy, and
              hassle-free.
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl border transition  hover:scale-105">
          <figure className="pt-3">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/shield.png"
              alt="shield"
            />
          </figure>
          <div className="card-body ">
            <h2 className=" font-bold  ">Commitment to Safety</h2>
            <p>
              Every car is thoroughly inspected and sanitized, prioritizing your
              safety and comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
