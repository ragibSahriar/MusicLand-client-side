import { NavLink, Outlet } from "react-router-dom";
import { FaUsers,FaPlusSquare } from 'react-icons/fa';
const Dashboard = () => {
  // TODO LOAD DATA FROM THE SERVER TO HAVE DYNAMIC ISADMIN BASED ON DATA
  const isAdmin = true;
  
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center  text-black">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-sky-200">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-black">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history"><FaPlusSquare></FaPlusSquare> Add Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers" className='text-black'><FaUsers></FaUsers>Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclass" className='text-black'><FaUsers></FaUsers>Manage Users</NavLink>
              </li>
              <li>
                {/* <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink> */}
                {/* <FaHome></FaHome> */}
                {/* <FaCalendarAlt></FaCalendarAlt> */}
                {/* <FaHome></FaHome>  */}
                {/* <FaWallet></FaWallet> */}
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/"> Home</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/menu"> Our Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">Order Food</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">Instructor</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass"> My Classes</NavLink>
              </li>
              <li>
                {/* <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink> */}
                {/* <FaHome></FaHome> */}
                {/* <FaCalendarAlt></FaCalendarAlt> */}
                {/* <FaHome></FaHome>  */}
                {/* <FaWallet></FaWallet> */}
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/"> Home</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/menu"> Our Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">Order Food</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;