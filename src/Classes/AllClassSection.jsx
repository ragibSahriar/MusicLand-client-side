import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import axios from "axios";
import useRoleChange from "../hooks/useRole";

const AllClassSection = ({ classes }) => {
    const {data}= useRoleChange()
    const {user} = useContext(AuthContext)
    
    const handleSelect = (classes) => {
        if (user && user.email) {
          const cartItem = {
            classId: classes._id,
            name: classes.courseName,
            classImg: classes.classImg,
            price: classes.price,
            seats: classes.seats,
            email: user.email,
          };
      
          axios.post("http://localhost:5000/classCarts", cartItem)
            .then((response) => {
              console.log(response.classes);
              if (response.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Class successfully added to your Class Page!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else if (response.classes.message) {
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Class already added",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          Swal.fire({
            title: "Please login to select the class.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login now!",
          }).then((result) => {
            if (result.isConfirmed) {
            //   navigate("/login", { state: { from: location } });
            }
          });
        }
      };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={classes.classImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{classes.courseName}</h2>
        <div className="text-xl text-sky-800">
          <p>
            Intstructor:{" "}
            <span className="text-2xl"> {classes.instructor_name}</span>
          </p>
          <p>Available seat: {classes.seats}</p>
          <p>Class Fee: {classes.price}</p>
        </div>
       <div>
       {data.role === "student" && (
          <button
            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700"
            onClick={() => handleSelect(classes)}
          >
            Select
          </button>
        )}
        {data.role === "admin" && (
          <button disabled className="btn btn-sm btn-accent">
            Select
          </button>
        )}
        {data.role === "instructor" && (
          <button disabled className="btn btn-sm btn-accent">
            Select
          </button>
        )}
       </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AllClassSection;
