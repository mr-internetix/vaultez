import React from "react";


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
