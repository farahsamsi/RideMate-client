import moment from "moment";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyBookingRow from "../Components/MyBookingRow";

const MyBookings = () => {
  const myBookingsLoaded = useLoaderData();
  const [myBookings, setMyBookings] = useState(myBookingsLoaded);

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
                    <MyBookingRow
                      key={car._id}
                      car={car}
                      setMyBookings={setMyBookings}
                      myBookings={myBookings}
                    ></MyBookingRow>
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
