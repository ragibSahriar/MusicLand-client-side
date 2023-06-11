import React from 'react';

const AllClassSection = ({classes}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img  src={classes.classImg} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{classes.courseName}</h2>
          <p>Intstructor: {classes.instructor_name}</p>
          <p>Available seat: {classes.seats}</p>
          <p>Class Fee: {classes.price}</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default AllClassSection;

