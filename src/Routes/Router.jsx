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
import CarDetails from "../Pages/CarDetails";
import MyBookings from "../Pages/MyBookings";
import Dashboard from "../Layout/Dashboard";

const Router = createBrowserRouter([
  {
    path: "myDashboard",
    element: (
      <PrivateRoute>
        {/* <MyBookings></MyBookings> */}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
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
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_url}/cars/myCars/${params.email}`),
      },
      {
        path: "myBookings/:email",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },

      {
        path: "cars/:id",
        element: <CarDetails></CarDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_url}/cars/${params.id}`),
      },
    ],
  },
]);

export default Router;
