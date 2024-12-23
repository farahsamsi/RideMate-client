import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";

// import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);

  const emailRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState('');

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged in");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}.
                    Please Try again
                    `,
        });
      });
  };

  const googleLoginBtn = () => {
    handleGoogleLogin()
      .then(() => {
        navigate("/");
        toast.success("Google login successful.");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="mb-4 md:mb-6 lg:mb-20 container mx-auto">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Login</h1>
        <p className="font-medium  px-4">
          Join RideMate Today – Unlock seamless car rental experiences,
          exclusive deals, and personalized services. Sign up now to explore
          hassle-free bookings and hit the road with ease!
        </p>
      </div>

      <div className="card  w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />

            <label className="label">
              <p className="label-text-alt link link-hover">Forgot password?</p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-primary ">
              Login
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-10 top-[29.5%] lg:top-[34.5%]"
        >
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </button>
        <div className="divider"></div>

        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
          <div className="flex flex-col justify-center">
            <p>Do not have an account ?</p>
            <Link to="/register" className="btn">
              <button>Register</button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Or</p>
            <button onClick={googleLoginBtn} className="btn">
              Continue with Google
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
