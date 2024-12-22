import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <footer className="footer container mx-auto  grid grid-cols-1 md:grid-cols-3">
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
          <a className="link link-hover text-lg">About us</a>
          <a className="link link-hover text-lg">Contact</a>
          <a className="link link-hover text-lg">Cars</a>
          <a className="link link-hover text-lg">Home</a>
        </nav>

        <nav className="">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-bold">Subscribe</h2>
            <p className="text-lg">
              Want to be notified about our services? Just sign up and we will
              send you a notification by email.
            </p>
            <div className="flex items-center justify-between border border-primary py-2 pr-2 pl-3 rounded-full  w-full">
              <input
                type="text"
                className="bg-transparent rounded-full"
                placeholder="Enter Your Email Address"
              />
              <button className=" bg-primary p-4 rounded-full ">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
