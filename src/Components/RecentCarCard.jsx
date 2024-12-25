import moment from "moment";
import PropTypes from "prop-types";
import { FaCar, FaUser } from "react-icons/fa";
import { LuBookmarkCheck } from "react-icons/lu";

const RecentCarCard = ({ car }) => {
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
      className={`bg-white rounded-xl shadow-lg p-4 mx-2 mb-4 hover:scale-105 transition ease-in-out`}
    >
      <img
        src={vehiclePhotoURL}
        alt={carModel}
        className="w-full rounded-xl pb-3"
      />
      <div className="card-body p-0 items-center text-center">
        <div className="flex-1 flex flex-col items-center lg:justify-center ">
          <div className="flex flex-col items-center "></div>
          <h2 className={`text-2xl`}>{carModel}</h2>
          <div className=" space-y-2 text-gray-600 text-sm my-2">
            <div className="flex items-center gap-1">
              <FaUser /> <span>Added {moment(datePosted).fromNow()}</span>
            </div>

            <div className="flex items-center gap-1">
              <FaCar />
              <span className={`${available ? "badge bg-primary" : ""}`}>
                {" "}
                {available
                  ? "Available For Immediate Booking"
                  : "Unavailable"}{" "}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <LuBookmarkCheck /> <span>Booking Count: {bookingCount}</span>
            </div>
          </div>

          <div className="card-actions flex justify-between items-center mt-4">
            {/* <button className="btn bg-primary">Details</button> */}
            <div className="text-xl font-bold text-orange-500">
              $ {dailyPrice}/day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentCarCard.propTypes = {
  car: PropTypes.object,
};

export default RecentCarCard;
