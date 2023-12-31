import { Link } from "react-router-dom";
import { useContext } from 'react';
import "typeface-roboto";
import { AuthContext } from "../AuthProvider/Authprovider";



const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
    return (
        <nav className="mx-auto space-x-4 container mx-auto border-b border-zinc-800 p-2  m-1">
       <nav className="   p-1 rounded text-black   flex justify-around mx-auto items-center ">
        <div className="flex space-x-2">
          <img className="w-8 rounded-full" src="https://th.bing.com/th/id/R.ee91ecf276e355eae3ff467f89941cfa?rik=IYimY4UTWAUgSw&pid=ImgRaw&r=0" alt="" />
          <a className="text-xl">musicCloud</a>
        </div>
        <div className=" flex items-center mx-auto space-x-4">
            <Link to="/" className="font-sans font-roboto  font-semibold  hover:text-amber-900 hover:font-bold">
            Home
            </Link>
            <Link to="/instructor" className="font-sans font-roboto  font-semibold hover:text-green-700">Instructor</Link>
            <Link to="/classes" className="font-sans font-roboto  font-semibold hover:text-green-700">Classes</Link>
            <Link to="/dashboard" className="font-sans font-roboto  font-semibold hover:text-green-700">Dashboard</Link>
        </div>
        

<div>
          {user ? (
            <div className="flex items-center">
              {user.photoURL && (
                <img className="w-12 h-12 mx-3 rounded-full" src={user.photoURL} alt="User Profile" />
              )}
              <button className="px-2 py-2 text-zinc-900 rounded bg-white text-xl font-bold list-none" onClick={handleLogOut}>Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <li className="btn text-green bg-orange-700">Login</li>
            </Link>
          )}
        </div>
      </nav>
      
     </nav>
    );
};

export default Navbar;