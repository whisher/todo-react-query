import React from "react";

const ExclamationIcon = () => {
  return (
    <svg
      className="text-red-400 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
};

const Alert = () => {
  return (
    <div
      className="w-full relative px-5 py-4 leading-normal text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <span className="absolute inset-y-0 left-0 flex items-center ml-4">
        <ExclamationIcon />
      </span>
      <p className="ml-6">Sorry, something went wrong :(</p>
    </div>
  );
};

export { Alert };
