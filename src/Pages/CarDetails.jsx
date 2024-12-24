import { useContext } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { SiBigcartel } from "react-icons/si";
import { VscOpenPreview } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import moment from "moment";

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

  console.log(features);
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
                        <FaRegStarHalfStroke />
                      </td>
                      <td className={`font-bold `}>Price :</td>
                      <td>${dailyPrice}/day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {user && (
              <div className="flex justify-end">
                <button
                  //   onClick={handleWatchList}
                  className="btn bg-primary "
                >
                  <SiBigcartel />
                  Book Now
                </button>
              </div>
            )}
          </div>
        </div>
        {/* for game description */}
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
      </div>
    </div>
  );
};

export default CarDetails;
