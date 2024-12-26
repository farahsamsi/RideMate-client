import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { SiBigcartel } from "react-icons/si";
import Swal from "sweetalert2";

const MyBookingRow = ({ carId, fetchMyBookingsData }) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    if (carId) {
      fetch(`${import.meta.env.VITE_url}/carsBooking/${carId}`)
        .then((res) => res.json())
        .then((data) => setCar(data));
    }
  }, [carId]);

  // booking related functions
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 16);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffInDays = 1 + (end - start) / (1000 * 60 * 60 * 24);
      const total = Math.ceil(diffInDays * car?.dailyPrice);
      // console.log("difference in days", diffInDays, "total:", total);
      setTotalPrice(total);
    }
  }, [car?.dailyPrice, endDate, startDate]);

  const [updateBooking, setUpdateBooking] = useState({});

  const handleUpdateNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const startDateTime = startDate;
    const endDateTime = endDate;
    const subTotal = totalPrice;
    const updateCarBooking = {
      startDateTime,
      endDateTime,
      subTotal,
    };
    setUpdateBooking(updateCarBooking);
    document.getElementById("booking_modify_modal").close();

    Swal.fire({
      title: "Confirm Update?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update Booking!",
    }).then((result) => {
      if (result.isConfirmed) {
        // update car data to the server
        fetch(`${import.meta.env.VITE_url}/carsBooking/${carId}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCarBooking),
        })
          .then((res) => res.json())
          .then((data) => {
            fetchMyBookingsData();
            setStartDate("");
            setEndDate("");
            setTotalPrice(0);

            if (data.modifiedCount) {
              Swal.fire({
                title: "Success",
                text: "Car Booking updated successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      }
    });
  };

  return (
    <dialog id="booking_modify_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg text-center">
          Update for {car?.carModel}{" "}
        </h3>
        <div>
          <form onSubmit={handleUpdateNow}>
            <div>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-normal ">
                      Pick Start Date
                    </span>
                  </label>
                  <input
                    name="startDate"
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    min={today}
                    max={endDate || ""}
                    placeholder=""
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-normal ">
                      Pick End Date
                    </span>
                  </label>
                  <input
                    name="endDate"
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                    min={startDate || today}
                    placeholder=""
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-normal ">
                      Total Price: ${totalPrice}
                    </span>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    // onClick={handleUpdateNow}
                    className="btn bg-primary "
                  >
                    <SiBigcartel />
                    Confirm Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

MyBookingRow.propTypes = {
  car: PropTypes.object,
  fetchMyBookingsData: PropTypes.function,
};

export default MyBookingRow;
