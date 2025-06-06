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

  // theme controller state
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("setTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
            <NavLink to={`/myDashboard`}>Dashboard</NavLink>
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
      <li className="w-full flex items-center justify-center lg:w-auto">
        <label className="swap swap-rotate w-full lg:h-8 lg:w-8 ">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onClick={toggleTheme}
            className="theme-controller"
            // value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
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
    <div
      className={`  sticky top-0 z-50 ${
        theme === "light" ? "bg-white" : "bg-[#1D232A]"
      }`}
    >
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
          <ul className="menu menu-horizontal px-1 flex items-center justify-center">
            {links}
          </ul>
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
