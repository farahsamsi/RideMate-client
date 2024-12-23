import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { handleRegister, manageProfile, handleGoogleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, with at least one uppercase letter and one lowercase letter."
      );
      return;
    }

    handleRegister(email, password)
      .then(() => {
        manageProfile(name, photo);
        navigate("/");
        toast.success("Registration is complete.");
      })
      .catch((error) => toast.error(error.message));

    /** closing tag of handle submit */
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
        <h1 className={`text-2xl lg:text-5xl font-bold `}>Register</h1>
        <p className="font-medium  px-4">
          Join RideMate Today – Unlock seamless car rental experiences,
          exclusive deals, and personalized services. Sign up now to explore
          hassle-free bookings and hit the road with ease!
        </p>
      </div>

      <div className="card bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border relative">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your display photo URL"
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
          </div>
          {/* {error && <p className="text-red-600">{error}</p>} */}
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-primary ">
              Register
            </button>
          </div>
        </form>

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-10 top-[48.3%] lg:top-[54.5%]"
        >
          {showPassword ? <FaEyeSlash /> : <FaRegEye />}
        </button>
        <div className="divider"></div>

        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
          <div className="flex flex-col justify-center">
            <p>Already have an account ?</p>
            <Link to="/login" className="btn">
              <button>Login</button>
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

export default Register;
