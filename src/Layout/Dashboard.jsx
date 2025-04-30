import { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const [newUser, setNewUser] = useState({});
  useEffect(() => {
    if (loading) {
      console.log("wait");
    } else {
      setNewUser(user);
    }
  }, [loading, user]);
  return (
    <div>
      {/* drawer navbar for dashboard */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* navbar for medium and small device */}
          <div className="flex w-full justify-between px-7 py-4  lg:hidden">
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
            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary drawer-button lg:hidden"
            >
              {/* Open drawer */}
              <IoMdMenu />
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-52 md:w-72 lg:w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar w-full h-fit flex items-center justify-center"
              >
                <div className="w-11 lg:w-40 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt={newUser?.displayName}
                    src={newUser?.photoURL}
                  />
                </div>
              </div>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
