
import { Outlet } from "react-router-dom";
import Navbar from './../Pages/Navbar';
import { Slide } from "react-awesome-reveal";


const Main = () => {
  return (
    <div>
      <Slide>
      <Navbar></Navbar>
      </Slide>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
