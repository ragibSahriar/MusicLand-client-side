import React from 'react';

const ClassCard = ({classItem}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={classItem.classImg} alt="class image" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>{status}</p>
          <p>Total Student: {}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ClassCard;

// My Classes: Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button.

// Total Enrolled Students: Initially it will be zero. If any student has successfully booked the Class, show the total number of students.

// Feedback:

// There will be no feedback if the Class is in pending or approved status.
// If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column.