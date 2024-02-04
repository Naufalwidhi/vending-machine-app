// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white border border-gray-300 p-6 rounded shadow-md">
        <div className="mb-4">
          <button className="float-right text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
            &times;
          </button>
        </div>
        <p className="text-red-500 font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
