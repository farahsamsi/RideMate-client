import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import UpdateModal from "./UpdateModal";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const { email } = useParams();
  const axiosSecure = useAxiosSecure();
  // const myCarsLoaded = useLoaderData();
  const [myCars, setMyCars] = useState([]);
  const [updateCarId, setUpdateCarId] = useState("");

  const [dateOrder, setDateOrder] = useState("newest");
  const [priceOrder, setPriceOrder] = useState("lowest");

  useEffect(() => {
    fetchMyCars();
  }, [email]);

  const fetchMyCars = async () => {
    // await fetch(`${import.meta.env.VITE_url}/cars/myCars/${email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyCars(data));

    // axios
    //   .get(`${import.meta.env.VITE_url}/cars/myCars/${email}`)
    //   .then((res) => setMyCars(res.data));

    axiosSecure.get(`/cars/myCars/${email}`).then((res) => setMyCars(res.data));
  };

  // Sort by Date Added
  const sortByDate = () => {
    const sortedData = [...myCars].sort((a, b) => {
      const dateA = new Date(a.datePosted);
      const dateB = new Date(b.datePosted);
      return dateOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    setMyCars(sortedData);
    setDateOrder(dateOrder === "newest" ? "oldest" : "newest");
    toast.success("Cars sorted based on Posted Date");
  };

  // Sort by Price
  const sortByPrice = () => {
    const sortedData = [...myCars].sort((a, b) => {
      return priceOrder === "lowest"
        ? a.dailyPrice - b.dailyPrice
        : b.dailyPrice - a.dailyPrice;
    });
    setMyCars(sortedData);
    setPriceOrder(priceOrder === "lowest" ? "highest" : "lowest");
    toast.success("Cars sorted based on Price");
  };

  // update call
  const handleModal = (id) => {
    setUpdateCarId(id);
    document.getElementById("my_modal_4").showModal();
  };

  // delete function
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_url}/cars/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Car has been deleted.",
                icon: "success",
              });
              const remaining = myCars.filter((car) => car._id !== _id);
              setMyCars(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-lg lg:text-5xl font-bold `}>My Cars</h1>
        <p className="font-medium  px-4">
          Manage, update, and view all your listed vehicles in one place. Keep
          track of availability, bookings, and detailed car information
          effortlessly.
        </p>
      </div>
      <UpdateModal carId={updateCarId} fetchMyCars={fetchMyCars}></UpdateModal>
      {myCars.length === 0 ? (
        ""
      ) : (
        <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sort  */}
          <div className="flex flex-col justify-center items-center">
            <label className="label">
              <span className="label-text font-normal ">Sort Cars by Date</span>
            </label>
            <button className="btn btn-outline" onClick={sortByDate}>
              Sort by Date (
              {dateOrder === "newest" ? "Newest First" : "Oldest First"})
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="label">
              <span className="label-text font-normal ">
                Sort Cars by Price
              </span>
            </label>
            <button className="btn btn-outline" onClick={sortByPrice}>
              Sort by Price (
              {priceOrder === "lowest" ? "Lowest First" : "Highest First"})
            </button>
          </div>
        </div>
      )}
      <div>
        {myCars.length === 0 ? (
          <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
            <h2 className="text-lg">
              You haven&apos;t added any cars yet! Start by adding your first
              car to make it available for bookings. Provide key details like
              the model, location, and daily price to attract renters. Once
              listed, you can manage your cars, edit their information, and
              monitor bookings conveniently from this page.
            </h2>
            <Link to="/addCar">
              <button className="btn btn-wide bg-primary">
                Go to Add Cars
              </button>
            </Link>
          </div>
        ) : (
          <div className="card p-0 md:p-6  w-11/12 mx-auto lg:max-w-screen-lg shrink-0 shadow-2xl border">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Car Model</th>
                    <th>Daily Rental Price</th>
                    <th>Availability</th>
                    <th>Date Added</th>
                    <th>Booking Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row  */}
                  {myCars.map((car) => (
                    <tr key={car._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={car?.vehiclePhotoURL}
                                alt={car?.carModel}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{car?.carModel}</div>
                            <div className="text-sm opacity-50">
                              {car?.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost">
                          $ {car?.dailyPrice}/day
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-ghost ${
                            car?.available ? "bg-green-400" : "bg-red-400"
                          }`}
                        >
                          {car?.available ? "Available" : "Unavailable"}
                        </span>
                      </td>
                      <th>{moment(car?.datePosted).format("MMM Do YY")}</th>
                      <th>{car?.bookingCount}</th>
                      <th>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
                          <button
                            onClick={() => handleModal(car?._id)}
                            className="btn text-xl font-extrabold bg-primary btn-sm"
                          >
                            <CiEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(car?._id)}
                            className="btn text-xl font-extrabold text-white bg-red-600 btn-sm"
                          >
                            <MdOutlineDeleteOutline />
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {/* Table */}
    </div>
  );
};

export default MyCars;
