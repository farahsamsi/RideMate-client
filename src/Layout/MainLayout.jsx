import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-outfit">
      {/* navbar */}
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-300px)]">
        {/* outlet */}
        <Outlet></Outlet>
      </div>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
