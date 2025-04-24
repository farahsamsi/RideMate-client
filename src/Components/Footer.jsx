import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaRoad,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <footer className="footer container mx-auto grid-cols-1 md:grid-cols-3">
        <nav>
          <Link to="/" className="text-2xl font-audioWide">
            <span className="text-primary">R</span>ide
            <span className="text-primary">M</span>ate
          </Link>
          <p className="text-lg mt-2">
            Rent a car effortlessly, anytime, anywhere. Explore your options
            with RideMate and enjoy the ride.
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="border p-2 rounded-full border-primary hover:text-orange-400"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="border p-2 rounded-full border-primary hover:text-orange-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="border p-2 rounded-full border-primary hover:text-orange-400"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="#"
              className="border p-2 rounded-full border-primary hover:text-orange-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </nav>
        <nav>
          <h1 to="/" className="text-2xl font-bold">
            Quick links
          </h1>
          <button
            onClick={() =>
              document.getElementById("about_us_modal").showModal()
            }
            className="link link-hover text-lg"
          >
            About us
          </button>
          {/* about us modal */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="about_us_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="flex items-center gap-3 mb-4">
                <FaRoad className="text-2xl text-blue-600" />
                <h3 className="text-xl font-bold text-blue-700">
                  About RideMate
                </h3>
              </div>

              <p className="text-base text-gray-700 mb-3">
                <strong>RideMate</strong> is your trusted companion for smooth,
                flexible, and enjoyable travel experiences across Bangladesh.
                Whether you&apos;re planning a spontaneous road trip or a
                carefully organized tour, we’ve got the perfect ride for you.
              </p>

              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                <li>
                  Wide range of vehicles – from budget-friendly options to
                  luxury rides
                </li>
                <li>Simple booking process with real-time availability</li>
                <li>Transparent pricing – no hidden charges</li>
                <li>
                  Available in major cities and tourist hotspots across
                  Bangladesh
                </li>
                <li>24/7 customer support to help you anytime, anywhere</li>
              </ul>

              <p className="text-sm text-gray-700 mb-2">
                At RideMate, we believe that the journey should be just as
                memorable as the destination. That&apos;s why we’re dedicated to
                making your ride easy, reliable, and enjoyable.
              </p>

              <p className="text-xs text-gray-500 italic mb-4">
                From city drives to cross-country adventures – RideMate is
                always ready for the road ahead.
              </p>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <a className="link link-hover text-lg">Contact</a>
          <Link to="/availableCars" className="link link-hover text-lg">
            Cars
          </Link>
          <Link to="/" className="link link-hover text-lg">
            Home
          </Link>
        </nav>

        <div className="w-full flex flex-col items-start ">
          <h2 className="text-2xl font-bold">Subscribe</h2>
          <p className="text-lg">
            Want to be notified about our services? Just sign up and we will
            send you a notification by email.
          </p>
          <div className="flex items-center justify-between border border-primary py-2 pr-2 pl-3 rounded-full w-full">
            <input
              type="text"
              className="bg-transparent rounded-full"
              placeholder="Enter Your Email Address"
            />
            <button className="-ml-9 bg-primary p-4 rounded-full ">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
