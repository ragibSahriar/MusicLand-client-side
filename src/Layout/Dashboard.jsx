import { FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const role = useRole();
  console.log(role);

  const admin = (
    <>
      <h1 className="text-center">Admin Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/allUsers"
          className={({ isActive }) =>
            isActive ? "text-gray" : "default"
          }
        >
          Manage User
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageclass"
          className={({ isActive }) =>
            isActive ? "text-white" : "default"
          }
          >
          Manage Class
        </NavLink>
      </li>
          <li><NavLink to="/">Home</NavLink></li>
    </>
  );
  const instructor = (
    <>
      <h1 className="text-center">Instructor Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/addClass"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }
        >
          ➕Add Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myClass"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }
        >
          🏛My Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }
        >
          🏠HOME
        </NavLink>
      </li>
    </>
  );
  const student = (
    <>
      <h1 className="text-center">Student Panel</h1>
      <div className="divider"></div>
      <li>
        <NavLink
          to="/dashboard/selected"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }
        >
          Selected class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/enrolled"
          className={({ isActive }) =>
            isActive ? "text-[#f1961f]" : "default"
          }
        >
          Enrolled class
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-sky-500 text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {role === "admin" && admin}
            {role === "instructor" && instructor}
            {role === "student" && student}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
