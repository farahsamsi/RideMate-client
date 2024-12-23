import { Link } from "react-router-dom";
import ErrorAnimation from "../../public/errorAnimation.json";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Lottie animationData={ErrorAnimation}></Lottie>
      <Link to="/">
        <button className="btn btn-wide bg-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
