import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="font-outfit relative">
      {/* navbar */}
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-250px)]">
        {/* outlet */}
        <Outlet> </Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
