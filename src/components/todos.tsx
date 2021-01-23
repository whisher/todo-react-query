import React from "react";

import { TodoDto } from "../types";
import { Todo } from "./todo";

export interface TodosProps {
  handleIscompleteTodo: (data: TodoDto) => void;
  handleUpdateTodo: (data: TodoDto) => void;
  todos: TodoDto[];
}

const Todos = ({
  handleIscompleteTodo,
  handleUpdateTodo,
  todos,
}: TodosProps) => {
  const onIscompleteTodo = (data: TodoDto) => {
    handleIscompleteTodo(data);
  };
  const onUpdateTodo = (data: TodoDto) => {
    handleUpdateTodo(data);
  };
  return (
    <>
      {todos.map((todo: TodoDto, i) => (
        <div key={todo.id} className="w-full mb-2">
          <Todo
            handleIscompleteTodo={onIscompleteTodo}
            handleUpdateTodo={onUpdateTodo}
            todo={todo}
          />
        </div>
      ))}
    </>
  );
};

export { Todos };
