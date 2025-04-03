import React from "react";

const ModalContent = ({ onClose }) => {
  return (
    <div
      className="flex justify-evenly items-center border rounded-lg absolute top-20 left-12 bottom-20 z-10 bg-black text-white p-2"
      role="dialog"
      aria-modal="true"
    >
      <p className="mx-2">Hey I am a Modal</p>
      <button
        className="bg-black text-white p-1 border rounded-md"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ModalContent;
