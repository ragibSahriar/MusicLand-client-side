
import { Outlet } from "react-router-dom";
import Navbar from './../Pages/Navbar';
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../Home/Footer";


const Main = () => {
  return (
    <div>
      <Fade>
      <Navbar></Navbar>
      </Fade>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
