import AOS from "aos";
import { useEffect } from "react";
import { FaCarSide, FaClock, FaGift } from "react-icons/fa";

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
              <button
                onClick={() =>
                  document.getElementById("my_modal_for_card_1").showModal()
                }
                className="btn bg-primary w-full "
              >
                Learn More
              </button>
            </div>
          </div>
          {/* modal for card 1 */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="my_modal_for_card_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="flex items-center gap-3 mb-4">
                <FaCarSide className="text-2xl text-primary" />
                <h3 className="text-xl font-bold text-primary">
                  Weekend Escape Discount
                </h3>
              </div>
              <p className="py-4">
                <p className="text-base mb-3 text-gray-700">
                  <strong>Enjoy 20% Off</strong> on all SUV rentals every
                  weekend!
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                  <li>
                    Flat 20% discount on all SUV rentals every Friday to Sunday
                  </li>
                  <li>Spacious, comfortable SUVs for group travel</li>
                  <li>Reliable and well-maintained vehicles</li>
                  <li>Easy online booking and flexible pickup options</li>
                </ul>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Offer Validity:</strong> Every weekend (Friday 12:01 AM
                – Sunday 11:59 PM)
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Available Locations:</strong> All major cities across
                Bangladesh – Dhaka, Chittagong, Sylhet, and more
              </p>
              <p className="text-xs text-gray-500 italic mb-4">
                *Offer applicable only on SUV category rentals. Discount
                auto-applied at checkout. Subject to availability.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_for_card_2").showModal()
                }
                className="btn bg-primary w-full "
              >
                Learn More
              </button>
            </div>
            {/* modal for card 2 */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_for_card_2"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box text-left">
                <div className="flex items-center gap-3 mb-4">
                  <FaGift className="text-2xl text-red-500" />
                  <h3 className="text-xl font-bold text-red-500">
                    Holiday Specials
                  </h3>
                </div>
                <p className="py-4">
                  <p className="text-base mb-3 text-gray-700">
                    <strong>Celebrate the season</strong> with up to{" "}
                    <strong>30% off</strong> on luxury car rentals!
                  </p>

                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                    <li>
                      Up to 30% discount on luxury car rentals during the
                      holiday season
                    </li>
                    <li>Choose from top-tier models with premium comfort</li>
                    <li>
                      Ideal for festive events, celebrations, or elegant travel
                    </li>
                    <li>Hassle-free booking with instant confirmation</li>
                  </ul>
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Offer Period:</strong> Available during official
                  holidays and festive weeks
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Available Locations:</strong> Major cities across
                  Bangladesh – Dhaka, Chittagong, Cox’s Bazar, and more
                </p>
                <p className="text-xs text-gray-500 italic mb-4">
                  *Valid only for luxury car category. Discounts may vary by
                  date and availability. Offer applied automatically at
                  checkout.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_for_card_3").showModal()
                }
                className="btn bg-primary w-full "
              >
                Learn More
              </button>
            </div>
            {/* modal for card 3 */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_for_card_3"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box text-left">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-2xl text-yellow-500" />
                  <h3 className="text-xl font-bold text-yellow-600">
                    Early Bird Saver
                  </h3>
                </div>
                <p className="py-4">
                  <p className="text-base mb-3 text-gray-700">
                    <strong>Book your car 7 days in advance</strong> and enjoy a{" "}
                    <strong>15% discount</strong> instantly!
                  </p>

                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                    <li>
                      15% discount when you book at least 7 days in advance
                    </li>
                    <li>
                      Valid on all car types including economy, SUVs, and luxury
                    </li>
                    <li>Perfect for planners who love saving more</li>
                    <li>Instant discount applied during checkout</li>
                  </ul>
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Who can use this?</strong> Anyone planning ahead for
                  trips, events, or business travel
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Available Nationwide:</strong> Dhaka, Sylhet, Khulna,
                  Rajshahi, and more
                </p>
                <p className="text-xs text-gray-500 italic mb-4">
                  *Booking must be made at least 7 full days before the pickup
                  date. Subject to availability. Terms apply.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
