import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import MyBookingRow from "../Components/MyBookingRow";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Legend, Tooltip } from "chart.js";

const MyBookings = () => {
  // const myBookingsLoaded = useLoaderData();
  const { email } = useParams();

  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    fetchMyBookingsData();
  }, [email]);
  const fetchMyBookingsData = async () => {
    await fetch(`${import.meta.env.VITE_url}/carsBooking/myBookings/${email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  };

  // function extractDailyPriceAndCarModel(myBookings) {
  //   return myBookings.map((booking) => {
  //     return {
  //       dailyPrice: booking.dailyPrice,
  //       carModel: booking.carModel,
  //     };
  //   });
  // }
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
  // const dailyPriceAndCarModel = extractDailyPriceAndCarModel(myBookings);
  console.log(dailyPriceAndCarModel);
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
                    <MyBookingRow
                      key={car._id}
                      car={car}
                      setMyBookings={setMyBookings}
                      myBookings={myBookings}
                      fetchMyBookingsData={fetchMyBookingsData}
                    ></MyBookingRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {/* Table */}
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
            <Legend />
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
