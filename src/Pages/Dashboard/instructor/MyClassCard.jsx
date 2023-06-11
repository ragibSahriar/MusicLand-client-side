import React from "react";
import { FaMailBulk } from "react-icons/fa";

const MyClassCard = ({ classItem }) => {
  return (
    <div className="flex">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={classItem.classImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{classItem.instructor_name}</h2>
          <p className="flex items-center gap-2">📩{classItem.email}</p>
          <div className="text-xl">
            <p>Seats- {classItem.seats}</p>
            <p>💲Price- {classItem.price}</p>
            <p>Status- {classItem.status}</p>
            {classItem.feedback && (
              <p className="text-red-700">Feedback- {classItem.feedback}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
