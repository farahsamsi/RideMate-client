import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, handleLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  useEffect(() => {
    if (loading) {
      console.log("wait");
    } else {
      setNewUser(user);
    }
  }, [loading, user]);

  const signOutBtn = () => {
    Swal.fire({
      text: "Are you sure you want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFC311",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogOut().then(() => {
          // toast.info("Successfully Signed Out");
          navigate("/");
          Swal.fire({
            text: "Your are successfully signed out from RideMate",
            icon: "success",
          }).catch((error) => toast.error(error.message));
        });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableCars">Available Cars</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addCar">Add Cars</NavLink>
          </li>

          <li>
            <NavLink to={`/myCars/${user?.email}`}>My Cars</NavLink>
          </li>
          <li>
            <NavLink to={`/myBookings/${user?.email}`}>My Bookings</NavLink>
          </li>
          <li onClick={signOutBtn}>
            <a>Logout</a>
          </li>
        </>
      )}
      {user ? (
        ""
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  const userLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={`/myCars/${user?.email}`}>My Cars</Link>
      </li>
      <li>
        <Link to={`/myBookings/${user?.email}`}>My Bookings</Link>
      </li>
      <li onClick={signOutBtn}>
        <a>Logout</a>
      </li>
    </>
  );

  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="navbar px-4  items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl md:text-3xl  font-audioWide">
            <span className="text-primary">R</span>ide
            <span className="text-primary">M</span>ate
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* conditional rendering user avatar or register button */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt={newUser?.displayName}
                    src={newUser?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {userLinks}
              </ul>
            </div>
          ) : (
            <Link
              to="register"
              className="btn bg-primary font-light rounded-3xl"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
