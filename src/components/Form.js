import React from "react";

const Form = () => {
  return (
    <div className="wrapper w-full align-center items-center justify-center">
      <div className="Form w-12/12 h-30 h-full flex-col p-8 mt-10 bg-red-500 flex">
        <input
          className="block mt-10 pb-10"
          type="text"
          placeholder="ENTER EMAIL"
        />
        <input
          className="block mt-10 pb-10"
          type="password"
          placeholder="ENTER PASSWORD"
        />
        <button className="px-4 mt-10" type="submit">
          SAVE
        </button>
        <button className=" px-4 mt-10" type="reset">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Form;
