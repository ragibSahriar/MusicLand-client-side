import React, { useState } from 'react';
import { FaCheck, FaComments, FaTimes } from 'react-icons/fa';
import AllClassHook from '../../hooks/AllClassHook';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageClass = () => {
  const [data, refetch] = AllClassHook();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textInput, setTextInput] = useState('');


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTextInput('');
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted text:', textInput);
    // You can perform additional actions with the submitted text
    closeModal();
  };

  const handleFeedback = async (classObj, feedback) => {
    if (!feedback) {
      alert("Feedback cannot be empty");
      return;
    }
    try {
      await axios.post(`http://localhost:5000/classes/feedback/${classObj._id}`, {
        feedback,
      });
      refetch(); // Refetch the updated data
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  const handleApprove = classObj => {
    fetch(`http://localhost:5000/addClass/approved/${classObj._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  const handleDeny = classObj => {
    fetch(`http://localhost:5000/addClass/deny/${classObj._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  return (
    <div>
      <style>{/* CSS styles here */}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((classObj) => (
          <div
            key={classObj._id}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={classObj.classImg}
              alt={classObj.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{classObj.instructor_name}</h2>
        
            <p className="mb-2">Email: {classObj.email}</p>
            <p className="mb-2">Available seats: {classObj.seats}</p>
            <p className="mb-2">Price: ${classObj.price}</p>
            <p className="mb-2">Status: {classObj.status}</p>
            <div className="flex">
              <>
                <button onClick={() => handleApprove(classObj)} className="btn btn-sm btn-outline mr-2">
                  <FaCheck className="text-green-500" />
                </button>
                <button onClick={() => handleDeny(classObj)}  className="btn btn-sm btn-outline mr-2">
                  <FaTimes className="text-red-500" />
                </button>
              </>
              <button className="btn btn-sm btn-primary" onClick={openModal}>
                <FaComments />
                Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="font-bold">Feedback</h2>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Write your feedback here"
                type="text"
                id="text-input"
                value={textInput}
                onChange={handleTextInputChange}
                style={{ width: '100%', height: '60px', fontSize: '18px' }}
              />
              <button onClick={() => handleFeedback(classObj)}  className="btn bg-green-600" type="submit">
                Submit
              </button>
            </form>
            <button
              className="px-2 py-1 rounded-full text-white mt-1 bg-red-700"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClass;
