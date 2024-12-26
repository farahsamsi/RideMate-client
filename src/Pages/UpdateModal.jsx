import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const UpdateModal = ({ carId, fetchMyCars }) => {
  const { user } = useContext(AuthContext);

  const [availability, setAvailability] = useState("");
  const [avaiLable, setAvaiLable] = useState(true);

  const handleAvailabilityChange = (e) => {
    if (e.target.value == "Available") {
      setAvailability(e.target.value);
      setAvaiLable(true);
    } else {
      setAvailability(e.target.value);
      setAvaiLable(false);
    }
  };

  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [carId]);

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

    const carUpdateData = {
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

    // update car data to the server
    fetch(`${import.meta.env.VITE_url}/cars/${carId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("my_modal_4").close();
        fetchMyCars();
        form.reset();

        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Car updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-[#F4F3F0]">
          <h1 className={`text-2xl text-center font-bold `}>Update Your Car</h1>
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
                  className="input w-full"
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
                  className="input w-full"
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
                  defaultValue={car.carModel}
                  type="text"
                  placeholder="Enter Car Model"
                  className="input w-full"
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
                  defaultValue={car.dailyPrice}
                  type="number"
                  placeholder="Enter Daily Rental Price"
                  className="input w-full"
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
                  defaultValue={car.regNo}
                  type="text"
                  placeholder="Enter Vehicle Registration Number"
                  className="input w-full"
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
                  defaultValue={car.description}
                  type="text"
                  placeholder="Write description for Your Vehicle"
                  className="textarea input w-full"
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
                  defaultValue={car.features}
                  type="text"
                  placeholder="Write Features of Your Vehicle"
                  className="textarea input w-full"
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
                  defaultValue={car.vehiclePhotoURL}
                  type="text"
                  placeholder="Enter Vehicle Photo URL"
                  className="input w-full"
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
                  defaultValue={car.location}
                  type="text"
                  placeholder="Enter Location"
                  className="input w-full"
                  required
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl font-normal ">
                    Availability
                  </span>
                </label>

                <select
                  name="available"
                  className="input w-full"
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
                className={`btn bg-primary text-xl w-full `}
              >
                Update Car
              </button>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

UpdateModal.propTypes = {
  carId: PropTypes.number,
  fetchMyCars: PropTypes.function,
};

export default UpdateModal;
