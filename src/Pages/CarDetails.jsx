import { useContext, useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { SiBigcartel } from "react-icons/si";
import { VscOpenPreview } from "react-icons/vsc";
import {
  MdAlternateEmail,
  MdEventAvailable,
  MdOutlineLocationOn,
} from "react-icons/md";
import moment from "moment";
import { PiCurrencyDollarFill } from "react-icons/pi";
import Swal from "sweetalert2";

const CarDetails = () => {
  const { user } = useContext(AuthContext);
  const car = useLoaderData();
  const {
    _id,
    userName,
    userEmail,
    carModel,
    dailyPrice,
    regNo,
    description,
    features,
    vehiclePhotoURL,
    location,
    bookingCount,
    available,
    datePosted,
  } = car || {};

  // booking related functions
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(dailyPrice);
  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffInDays = 1 + Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      const total = diffInDays * dailyPrice;
      console.log("difference in days", diffInDays, "total:", total);
      setTotalPrice(total);
    }
  }, [dailyPrice, endDate, startDate]);

  const handleBookNow = (e) => {
    e.preventDefault();
    // const form = e.target;
    const start = startDate;
    const end = endDate;
    const subTotal = totalPrice;
    console.log(start, end, subTotal);
    Swal.fire({
      title: "Your Booking Summary",
      html: `Car: ${carModel} <br> 
      Location: ${location} <br>
      Car Registration Number: ${regNo} <br>
      Start Date: ${startDate} <br>
      End Date: ${endDate} <br>
      <strong>Total Bill: ${totalPrice}</strong>
      `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm Booking",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed",
          text: "Your Car has been booked successfully.",
          icon: "success",
        });
      }
    });
  };

  const renderFeatures = (featuresString) => {
    if (!featuresString) return null; // Handle empty or undefined string
    const featuresArray = featuresString
      .split(",")
      .map((feature) => feature.trim()); // Split and trim each feature
    return (
      <ul className="list-disc pl-5">
        {featuresArray.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="mt-4 md:mt-6 lg:mt-8 mb-12">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>{carModel}</h1>
      </div>
      <div className="card p-6  w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
        {/* grid for photo and summary */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-1 gap-6">
          <div className="w-full h-80 md:h-96 lg:h-[30rem]">
            <img
              alt={carModel}
              src={vehiclePhotoURL}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-xl lg:text-2xl font-extrabold">{carModel}</h1>
            <div>
              <div className="overflow-x-auto">
                <table className="table md:text-xl md:w-8/12 mx-auto">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="text-primary text-xl">
                        <IoMdPricetags />
                      </td>
                      <td className={`font-bold `}>Reg No :</td>
                      <td>{regNo}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td className="text-primary text-xl">
                        <FaRegClock />
                      </td>
                      <td className={`font-bold `}>Date Posted:</td>
                      <td>{moment(datePosted).format("MMM Do YY")}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td className="text-primary text-xl">
                        <PiCurrencyDollarFill />
                      </td>
                      <td className={`font-bold `}>Price :</td>
                      <td>${dailyPrice}/day</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td className="text-primary text-xl">
                        <MdEventAvailable />
                      </td>
                      <td className={`font-bold `}>Availability :</td>
                      <td>
                        {available === true ? "Available" : "Unavailable"}
                      </td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td className="text-primary text-xl">
                        <MdOutlineLocationOn />
                      </td>
                      <td className={`font-bold `}>Location :</td>
                      <td> {location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-6 space-y-3">
          <h1 className="text-xl lg:text-2xl font-extrabold">
            {carModel} Details:
          </h1>
          <div className="">
            <p className=" flex items-center gap-2">
              <p className="text-primary text-xl">
                <VscOpenPreview />
              </p>
              <p>Owner :</p>
              <p>{userName}</p>
            </p>
            <p className=" flex items-center gap-2 flex-wrap">
              <p className="text-primary text-xl">
                <MdAlternateEmail />
              </p>
              <p>Contact Owner :</p>
              <p>{userEmail}</p>
            </p>
          </div>
          <p>
            <span className="text-lg">Features:</span>{" "}
            {renderFeatures(features)}
          </p>
          <p>Description : {description}</p>
        </div>
        {user ? (
          <div>
            <form onSubmit={handleBookNow}>
              {available ? (
                <div className="flex justify-end items-center gap-4">
                  <p className="text-center my-5 text-sm">
                    Please Fill the Form below before Confirming Booking
                  </p>
                  <button
                    // onClick={handleBookNow}
                    className="btn bg-primary "
                  >
                    <SiBigcartel />
                    Book Now
                  </button>
                </div>
              ) : (
                <p className="my-5 text-end text-red-700">
                  Sorry, This car is not available for Booking
                </p>
              )}
              <div>
                <div>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                      <label className="label">
                        <span className="label-text text-xl font-normal ">
                          Pick Start Date
                        </span>
                      </label>
                      <input
                        name="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => {
                          setStartDate(e.target.value);
                        }}
                        min={today}
                        max={endDate || ""}
                        placeholder=""
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="">
                      <label className="label">
                        <span className="label-text text-xl font-normal ">
                          Pick End Date
                        </span>
                      </label>
                      <input
                        name="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => {
                          setEndDate(e.target.value);
                        }}
                        min={startDate || today}
                        placeholder=""
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="">
                      <label className="label">
                        <span className="label-text text-xl font-normal ">
                          Total Price: ${totalPrice}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-4">
            <p className="text-center my-5 text-sm">
              Please Login to Book Your Ride
            </p>
            <Link to="/login">
              <button className="btn bg-primary ">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
