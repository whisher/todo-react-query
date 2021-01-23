import React, { useState } from "react";

import { TodoDto } from "../types";

const DeleteIcon = () => {
  return (
    <svg
      className="text-white h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
};

const UpdateIcon = () => {
  return (
    <svg
      className="text-white h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  );
};
export interface TodoProps {
  handleIscompleteTodo: (data: TodoDto) => void;
  handleUpdateTodo: (data: TodoDto) => void;
  todo: TodoDto;
}

const Todo = ({ handleIscompleteTodo, handleUpdateTodo, todo }: TodoProps) => {
  const [visility, setVisibility] = useState<boolean>(false);
  const mouseEnter = () => {
    setVisibility(true);
  };
  const mouseLeave = () => {
    setVisibility(false);
  };
  const onUpdateTodo = () => {
    handleUpdateTodo(todo);
  };
  const onIsCompleteTodo = () => {
    handleIscompleteTodo(todo);
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="w-full relative"
    >
      <div
        className="w-full flex justify-start items-center rounded-full shadow-md
        bg-gray-50 px-6 py-6"
      >
        <p
          onClick={onIsCompleteTodo}
          className={`text-gray-500 tracking-wide  ${
            +todo.isComplete ? "line-through" : ""
          }`}
        >
          {todo.content}
        </p>
      </div>
      <div
        className={`transition-opacity ${
          visility ? "opacity-100" : "opacity-0"
        }`}
      >
        {+todo.isComplete ? null : (
          <button
            onClick={onUpdateTodo}
            className="absolute top-0 right-0 bg-indigo-500 text-white rounded-full p-0 hover:bg-indigo-400 focus:outline-none w-8 h-8 flex items-center justify-center"
          >
            <UpdateIcon />
          </button>
        )}
        <button className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-0 hover:bg-red-400 focus:outline-none w-8 h-8 flex items-center justify-center">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export { Todo };
