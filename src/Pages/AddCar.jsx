import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const [availability, setAvailability] = useState("");
  const [avaiLable, setAvaiLable] = useState(true);
  const navigate = useNavigate();

  const handleAvailabilityChange = (e) => {
    if (e.target.value == "Available") {
      setAvailability(e.target.value);
      setAvaiLable(true);
    } else {
      setAvailability(e.target.value);
      setAvaiLable(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const carModel = form.carModel.value;
    const dailyPrice = parseInt(form.dailyPrice.value);
    const regNo = form.regNo.value;
    const description = form.description.value;
    const features = form.features.value;
    const vehiclePhotoURL = form.vehiclePhotoURL.value;
    const location = form.location.value;
    const available = avaiLable;

    const datePosted = new Date();
    let bookingCount = 0;

    const carData = {
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
    };

    // console.log(carData);

    fetch(`${import.meta.env.VITE_url}/cars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Car added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/myCars/${user?.email}`);
        }
        form.reset();
      });
  };

  return (
    <div className="w-11/12 container mx-auto border">
      <div className={`py-5 md:py-10 mb-6 md:mb-9 `}>
        <div className="w-10/12 mx-auto">
          <div className="text-center">
            <h1 className={`text-2xl lg:text-5xl font-bold `}>
              Add Your Car to RideMate
            </h1>
            <p className="md:max-w-[930px] mx-auto my-4 md:my-6">
              Expand Your Reach – List your car on RideMate and connect with
              renters. Earn effortlessly while sharing your vehicle with trusted
              users.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* row name and email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Your Name
                  </span>
                </label>
                <input
                  name="userName"
                  type="text"
                  value={`${user?.displayName}`}
                  className="input w-full border-slate-100"
                  readOnly
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Your Email
                  </span>
                </label>
                <input
                  name="userEmail"
                  type="email"
                  value={`${user?.email}`}
                  readOnly
                  className="input w-full border-slate-100 "
                  required
                />
              </div>
            </div>

            {/* row of car model, Daily Rental Price, Vehicle Registration Number */}
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Car Model
                  </span>
                </label>
                <input
                  name="carModel"
                  type="text"
                  placeholder="Enter Car Model"
                  className="input w-full border-slate-100"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Daily Rental Price
                  </span>
                </label>
                <input
                  name="dailyPrice"
                  type="number"
                  placeholder="Enter Daily Rental Price"
                  className="input w-full border-slate-100"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Vehicle Registration Number
                  </span>
                </label>
                <input
                  name="regNo"
                  type="text"
                  placeholder="Enter Vehicle Registration Number"
                  className="input w-full border-slate-100"
                  required
                />
              </div>
            </div>

            {/* row Description, features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Write description for Your Vehicle"
                  className="textarea input w-full border-slate-100"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Features
                  </span>
                </label>
                <textarea
                  name="features"
                  type="text"
                  placeholder="Write Features of Your Vehicle and separate them using comma"
                  className="textarea input w-full border-slate-100"
                  required
                />
              </div>
            </div>

            {/* row  Vehicle Photo URL */}
            <div className="">
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Vehicle Photo URL
                  </span>
                </label>
                <input
                  name="vehiclePhotoURL"
                  type="text"
                  placeholder="Enter Vehicle Photo URL"
                  className="input w-full border-slate-100"
                  required
                />
              </div>
            </div>
            {/* row  Location and availability */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Location
                  </span>
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter Location"
                  className="input w-full border-slate-100"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Availability
                  </span>
                </label>
                {/* <input
                  name="available"
                  type="text"
                  placeholder="Enter Location"
                  className="input w-full border-slate-100"
                  required
                /> */}
                <select
                  name="available"
                  className="input w-full border-slate-100"
                  id="genre"
                  value={availability}
                  onChange={handleAvailabilityChange}
                >
                  <option disabled value="">
                    Select Availability
                  </option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
            </div>

            {/* row 6 */}
            <div>
              <button
                type="submit"
                className={`btn bg-primary text-xl w-full text-white`}
              >
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
