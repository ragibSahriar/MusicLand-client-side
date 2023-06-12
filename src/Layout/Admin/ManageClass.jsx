import React, { useState } from 'react';
import { FaCheck, FaComments, FaTimes } from 'react-icons/fa';
import AllClassHook from '../../hooks/AllClassHook';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageClass = () => {
  const [data, refetch] = AllClassHook();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [classObj, setClassObj] = useState(null);

  const openModal = (classObj) => {
    setIsModalOpen(true);
    setClassObj(classObj);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTextInput('');
    setClassObj(null);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted text:', textInput);
    if (!classObj || !classObj._id) {
      console.error('Invalid class object');
      return;
    }
    handleFeedback(classObj._id, textInput); // Pass classObj._id to handleFeedback
    closeModal();
  };

  const handleFeedback = async (id, feedback) => {
    console.log(id);
    if (!feedback) {
      alert('Feedback cannot be empty');
      return;
    }
    try {
      await axios.post(`https://music-cloud-server.vercel.app/addClass/feedback/${id}`, {
        feedback,
      });
      refetch(); // Refetch the updated data
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  const handleApprove = (classObj) => {
    fetch(`https://music-cloud-server.vercel.app/addClass/approved/${classObj._id}`, {
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

  const handleDeny = (classObj) => {
    fetch(`https://music-cloud-server.vercel.app/addClass/deny/${classObj._id}`, {
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
          <div key={classObj._id} className="bg-white p-4 shadow-md rounded-lg">
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
                <button onClick={() => handleDeny(classObj)} className="btn btn-sm btn-outline mr-2">
                  <FaTimes className="text-red-500" />
                </button>
              </>
              <button className="btn btn-sm btn-ghost bg-zinc-950 text-white" onClick={() => openModal(classObj)}>
                <FaComments />
                Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && classObj && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg px-4 py-6 w-96">
            <h2 className="font-bold text-xl mb-4">Feedback</h2>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Write your feedback here"
                type="text"
                id="text-input"
                value={textInput}
                onChange={handleTextInputChange}
                className="w-full h-16 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-500"
              />
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-500"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 rounded-full text-white bg-red-700"
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
