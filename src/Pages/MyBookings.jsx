import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import MyBookingRow from "../Components/MyBookingRow";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { Legend, Tooltip } from "chart.js";
import Swal from "sweetalert2";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";

const MyBookings = () => {
  // const myBookingsLoaded = useLoaderData();
  const { email } = useParams();

  const [myBookings, setMyBookings] = useState([]);
  const [updateBookingId, setUpdateBookingId] = useState(null);

  useEffect(() => {
    fetchMyBookingsData();
  }, [email]);
  const fetchMyBookingsData = async () => {
    // await fetch(`${import.meta.env.VITE_url}/carsBooking/myBookings/${email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyBookings(data));

    axios
      .get(`${import.meta.env.VITE_url}/carsBooking/myBookings/${email}`, {
        withCredentials: true,
      })
      .then((res) => setMyBookings(res.data));
  };

  const handleModify = (_id) => {
    setUpdateBookingId(_id);
    document.getElementById("booking_modify_modal").showModal();
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Booking!",
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
              fetchMyBookingsData();
            }
          });
      }
    });
  };

  // rechart related functions
  const [dailyPriceAndCarModel, setDailyPriceAndCarModel] = useState([]);
  useEffect(() => {
    const array = myBookings.map((booking) => {
      return {
        dailyPrice: booking.dailyPrice,
        carModel: booking.carModel,
      };
    });
    setDailyPriceAndCarModel(array);
  }, [myBookings]);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
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
                    <tr key={car._id} className="hover">
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
                                                ${
                                                  car?.bookingStatus ===
                                                    "Pending" && "bg-blue-400"
                                                }
                                                ${
                                                  car?.bookingStatus ===
                                                    "Confirm" && "bg-green-400"
                                                }
                                                ${
                                                  car?.bookingStatus ===
                                                    "Cancel" && "bg-red-400"
                                                }
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
                            onClick={() => handleModify(car?._id)}
                            className="btn  bg-blue-500 btn-sm"
                          >
                            <SlCalender /> Modify Date
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
      <MyBookingRow
        carId={updateBookingId && updateBookingId}
        fetchMyBookingsData={fetchMyBookingsData}
      ></MyBookingRow>
      <div className="hidden my-8 w-full md:flex items-center justify-center">
        <div>
          <h1 className="text-center text-3xl">
            Comparison of Daily Prices of your Booked Cars
          </h1>
          <BarChart
            width={800}
            height={300}
            data={dailyPriceAndCarModel}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="carModel" />
            <YAxis />
            <Tooltip content="Daily Price " />
            {/* <Legend /> */}
            <Bar
              dataKey="dailyPrice"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {dailyPriceAndCarModel.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
