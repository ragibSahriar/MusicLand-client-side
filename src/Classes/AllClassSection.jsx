import React from "react";

const AllClassSection = ({ classes }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={classes.classImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{classes.courseName}</h2>
        <div className="text-xl text-sky-800">
          <p>Intstructor: <span className="text-2xl"> {classes.instructor_name}</span></p>
          <p>Available seat: {classes.seats}</p>
          <p>Class Fee: {classes.price}</p>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AllClassSection;
