import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AvailableCars from "../Pages/AvailableCars";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import AddCar from "../Pages/AddCar";
import MyCars from "../Pages/MyCars";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_url}/cars`),
      },
      {
        path: "availableCars",
        element: <AvailableCars></AvailableCars>,
        loader: () => fetch(`${import.meta.env.VITE_url}/cars`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addCar",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "myCars/:email",
        element: (
          <PrivateRoute>
            <MyCars></MyCars>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/cars/myCars/${params.email}`),
      },
    ],
  },
]);

export default Router;
