import React, { useState } from 'react';
import { FaCheck, FaComments, FaTimes } from 'react-icons/fa';
import AllClassHook from '../../hooks/AllClassHook';

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

  return (
    <div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          max-width: 400px;
          border-radius: 4px;
        }

        .modal-content input[type="text"] {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 12px;
        }
      `}</style>

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
            <h2 className="text-xl font-bold mb-2">{classObj.name}</h2>
            <p className="mb-2">Instructor: {classObj.instructorName}</p>
            <p className="mb-2">Email: {classObj.instructorEmail}</p>
            <p className="mb-2">Available seats: {classObj.availableSeats}</p>
            <p className="mb-2">Price: ${classObj.price}</p>
            <p className="mb-2">Status: {classObj.status}</p>
            <div className="flex">
              <>
                <button className="btn btn-sm btn-outline mr-2">
                  <FaCheck className="text-green-500" />
                </button>
                <button className="btn btn-sm btn-outline mr-2">
                  <FaTimes className="text-red-500" />
                </button>
              </>
              <button
                className="btn btn-sm btn-primary"
                onClick={openModal}
              >
                <FaComments />_
                 feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="text-input">Enter your text:</label>
              <input
                type="text"
                id="text-input"
                value={textInput}
                onChange={handleTextInputChange}
                style={{ width: '100%', height: '60px', fontSize: '18px' }}
              />
              <button type="submit">Submit</button>
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClass;
