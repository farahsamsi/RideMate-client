import moment from "moment";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCars = () => {
  const myCarsLoaded = useLoaderData();
  const [myCars, setMyCars] = useState(myCarsLoaded);

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
              const remaining = myCarsLoaded.filter(
                (review) => review._id !== _id
              );
              setMyCars(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>My Cars</h1>
        <p className="font-medium  px-4">
          Manage, update, and view all your listed vehicles in one place. Keep
          track of availability, bookings, and detailed car information
          effortlessly.
        </p>
      </div>
      <div>
        <h2>My cars : {myCars.length}</h2>
      </div>

      {/* Table */}
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
                          <img src={car?.vehiclePhotoURL} alt={car?.carModel} />
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
                  <th className="flex flex-col lg:flex-row items-center justify-center gap-1">
                    <button className="btn text-xl font-extrabold bg-primary btn-sm">
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(car?._id)}
                      className="btn text-xl font-extrabold text-white bg-red-600 btn-sm"
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
