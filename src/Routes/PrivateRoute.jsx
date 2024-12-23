import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  } else {
    return <div>{children}</div>;
  }
};

export default PrivateRoute;
