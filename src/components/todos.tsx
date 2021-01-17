import React from "react";

import { TodoDto } from "../types";
import { Todo } from "./todo";

export interface TodosProps {
  todos: TodoDto[];
}

const Todos = ({ todos }: TodosProps) => {
  return (
    <>
      {todos.map((todo: TodoDto, i) => (
        <div key={todo.id} className="w-full mb-2">
          <Todo todo={todo} />
        </div>
      ))}
    </>
  );
};

export { Todos };
