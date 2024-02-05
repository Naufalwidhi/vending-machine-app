// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, message, isSuccess }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className={`bg-white border p-6 rounded shadow-md ${isSuccess ? 'border-green-500' : 'border-red-500'}`}>
                <div className="mb-4">
                    <button className="float-right text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="flex items-center mb-2">
                    {isSuccess ? (
                        <svg
                            className="w-6 h-6 text-green-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6 text-red-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    )}
                    <p className={isSuccess ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
