import React from "react";
import { useForm } from "react-hook-form";

import { FormInputsDto, TodoDto } from "../types";

const PlusIcon = () => {
  return (
    <svg
      className="text-white h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

export interface FormProps {
  handleFormSubmit: (data: TodoDto) => void;
  initialValues: TodoDto;
}

const Form = ({ handleFormSubmit, initialValues }: FormProps) => {
  const { errors, handleSubmit, register, reset } = useForm<FormInputsDto>();
  const onSubmit = (inputs: FormInputsDto) => {
    if (!errors.content) {
      const { content } = inputs;
      const data = { content, isComplete: false };
      handleFormSubmit(data);
      reset();
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`${
          !!errors.content ? "border border-red-500" : "border border-white"
        } bg-white flex items-center rounded-full shadow-xl`}
      >
        <input
          name="content"
          ref={register({ required: true })}
          defaultValue={initialValues.content}
          className="rounded-l-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none"
          type="text"
          placeholder="Write a new task"
        />

        <div className="p-4">
          <button className="bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <PlusIcon />
          </button>
        </div>
      </div>
    </form>
  );
};

export { Form };
