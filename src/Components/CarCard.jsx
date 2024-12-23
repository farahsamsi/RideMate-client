import moment from "moment";
// import { useState } from "react";
import { FaCar, FaUser, FaSuitcase } from "react-icons/fa";

const CarCard = ({ car, toggleLayout }) => {
  //   const [present, setPresent] = useState("");
  const {
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
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-4 mx-2 mb-4 ${
        toggleLayout ? "" : "md:grid grid-cols-2"
      }`}
    >
      <img
        src={vehiclePhotoURL}
        alt={carModel}
        className="w-full rounded-t-xl"
      />
      <div className="card-body p-0 items-center text-center">
        <div className="flex-1 flex flex-col items-center lg:justify-center ">
          <div className="flex flex-col items-center "></div>
          <h2
            className={`${
              toggleLayout ? "text-2xl" : "card-title lg:text-4xl"
            }`}
          >
            {carModel}
          </h2>
          <div className="md:flex items-center gap-2 text-gray-600 text-sm my-2">
            <div className="flex items-center gap-1">
              <FaUser /> <span> {moment(datePosted).format("MMM Do YY")}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCar /> <span>{regNo}</span>{" "}
            </div>
            <div className="flex items-center gap-1">
              <FaSuitcase />
              <span> {available ? "Available" : "Unavailable"} </span>
            </div>
          </div>

          <div className="card-actions flex justify-between items-center mt-4">
            <button className="btn bg-primary">Details</button>
            <div className="text-xl font-bold text-orange-500">
              $ {dailyPrice}/day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
