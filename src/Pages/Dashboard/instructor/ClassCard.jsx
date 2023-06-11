import React from 'react';

const ClassCard = ({classItem}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={classItem.classImg} alt="class image" /></figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>{classItem.courseName}</p>
          <p>👩‍🎓Students: {classItem.seats}</p>
          
        </div>
      </div>
    );
};

export default ClassCard;

