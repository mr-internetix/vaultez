import React from "react";
import ReactCircleModal from 'react-circle-modal'


<ReactCircleModal
backgroundColor="#97349a"
toogleComponent={onClick => (
  <button onClick={onClick}>
    Click here to open modal
  </button>
)}
// Optional fields and their default values
offsetX={0}
offsetY={0}
>
{(onClick) => (
  <div style={{ backgroundColor: '#fff', padding: '1em' }}>
    <p>
      Content inside of modal
    </p>
    <button onClick={onClick}>
      Click here to close modal
    </button>
  </div>
)}
</ReactCircleModal>
const Button = () => {
  return (
    <div className="add-btn fixed">
      <div
        className="bg-black hover:bg-white hover:text-black text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Button;
