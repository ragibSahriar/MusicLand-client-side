import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MyCart from "../Pages/Dashboard/MyCart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Instructor from "../Instructor/Instructor";
import AddClass from "../hooks/Addclass";
import MyClasses from "../Pages/Dashboard/instructor/MyClasses";
import ManageClass from "../Layout/Admin/ManageClass";
import Classes from "../Classes/Classes";
import Error from "../Error";


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
        {
          path:'/classes',
          element: <Classes></Classes>
        },
        {
          path:'/*',
          element: <Error></Error>
        },
      ],
    },
    { path: '/dashboard',
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
      {
        path:'addClass',
        element: <AddClass></AddClass>
      },
      {
        path:'myClass',
        element: <MyClasses></MyClasses>
      },
      {
        path:'manageclass',
        element: <ManageClass></ManageClass>
      },
      
    ]
    }
  ]);