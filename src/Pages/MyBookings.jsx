import moment from "moment";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookings = () => {
  const myBookingsLoaded = useLoaderData();
  const [myBookings, setMyBookings] = useState(myBookingsLoaded);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_url}/carsBooking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Cancel!",
                text: "Your Booking has been Canceled.",
                icon: "success",
              });
              const remaining = myBookingsLoaded.filter(
                (car) => car._id !== _id
              );
              setMyBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-lg lg:text-5xl font-bold `}>My Bookings</h1>
        <p className="font-medium  px-4">
          Manage, update, and view all your listed vehicles in one place. Keep
          track of availability, bookings, and detailed car information
          effortlessly.
        </p>
      </div>

      <div>
        {myBookings.length === 0 ? (
          <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
            <h2 className="text-lg">
              You haven&apos;t booked any cars yet! Start by booking your first
              car to make it available for ride. Observe key details like the
              model, location, and daily price to get the car that suits you
              best. Once listed, you can manage your cars, edit their
              information, and monitor booking status conveniently from this
              page.
            </h2>
            <Link to="/availableCars">
              <button className="btn btn-wide bg-primary">
                Go to Available Cars
              </button>
            </Link>
          </div>
        ) : (
          <div className="card p-0 md:p-6  w-11/12 mx-auto lg:max-w-screen-lg shrink-0 shadow-2xl border">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-slate-200 text-black">
                    <th>Car Model</th>
                    <th>Total Price</th>
                    <th>Booking Status</th>
                    <th>Journey Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row  */}
                  {myBookings.map((car) => (
                    <tr className="hover" key={car._id}>
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
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost">
                          ${car?.subTotal}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-ghost 
                            ${car?.bookingStatus === "Pending" && "bg-blue-400"}
                            ${
                              car?.bookingStatus === "Confirm" && "bg-green-400"
                            }
                            ${car?.bookingStatus === "Cancel" && "bg-red-400"}
                            `}
                        >
                          {car?.bookingStatus}
                        </span>
                      </td>
                      <th>
                        From : {moment(car?.startDateTime).format("lll")} <br />
                        To : {moment(car?.endDateTime).format("lll")}
                      </th>

                      <th>
                        <div className="flex flex-col  items-center justify-center gap-1">
                          <button
                            // onClick={() => handleModal(car?._id)}
                            className="btn  bg-primary btn-sm"
                          >
                            <CiEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(car?._id)}
                            className="btn  text-white bg-red-600 btn-sm"
                          >
                            <MdOutlineDeleteOutline /> Cancel
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

export default MyBookings;
