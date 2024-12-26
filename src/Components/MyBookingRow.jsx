import moment from "moment";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import ModifyBookingModal from "../Pages/ModifyBookingModal";

const MyBookingRow = ({ car, fetchMyBookingsData }) => {
  const handleModify = () => {
    console.log("modify for", car?.carModel);
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
              fetchMyBookingsData();
            }
          });
      }
    });
  };

  return (
    <tr className="hover">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={car?.vehiclePhotoURL} alt={car?.carModel} />
            </div>
          </div>
          <div>
            <div className="font-bold">{car?.carModel}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost">${car?.subTotal}</span>
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
            onClick={() => handleModify()}
            className="btn  bg-blue-500 btn-sm"
          >
            <SlCalender /> Modify Date
          </button>
          <ModifyBookingModal></ModifyBookingModal>
          <button
            onClick={() => handleDelete(car?._id)}
            className="btn  text-white bg-red-600 btn-sm"
          >
            <MdOutlineDeleteOutline /> Cancel
          </button>
        </div>
      </th>
    </tr>
  );
};

MyBookingRow.propTypes = {
  car: PropTypes.object,
  fetchMyBookingsData: PropTypes.function,
};

export default MyBookingRow;
