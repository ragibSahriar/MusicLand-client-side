import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MyCart from "../Pages/Dashboard/MyCart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Instructor from "../Instructor/Instructor";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path:'/instructor',
          element: <Instructor></Instructor>
        },
      ],
    },
    { path: 'dashboard',
     element: <Dashboard></Dashboard>,
    children:[
      {
        path:'mycart',
        element: <MyCart></MyCart>
      },
      {
        path:'allUsers',
        element: <AllUsers></AllUsers>
      },
    ]
    }
  ]);