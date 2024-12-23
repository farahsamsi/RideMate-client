import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="font-outfit relative">
      {/* navbar */}
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-250px)]">
        {/* outlet */}
        {loading ? <Loader></Loader> : <Outlet> </Outlet>}
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
