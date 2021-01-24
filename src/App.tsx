import React, { useState } from "react";
import { TodoDto } from "./types";
import { Alert, Container, Form, Loading, Todos } from "./components";
import { useTodos, useCreateTodo, useDeleteTodo, useUpdateTodo } from "./hooks";

const defaultTodoFormValues: TodoDto = {
  content: "",
  isComplete: "0",
};

const App = () => {
  const { data: todos, isError, isLoading } = useTodos();
  const [todoFormValues, setTodoFormValues] = useState<TodoDto>(
    defaultTodoFormValues
  );
  const createTodoMutation = useCreateTodo();
  const deleteTodoMutation = useDeleteTodo();
  const updateTodoMutation = useUpdateTodo();
  const handleFormSubmit = (data: TodoDto) => {
    data.id ? updateTodoMutation.mutate(data) : createTodoMutation.mutate(data);
  };
  const handleDeleteTodo = (data: TodoDto) => {
    deleteTodoMutation.mutate(data);
  };
  const handleIscompleteTodo = (data: TodoDto) => {
    data.isComplete = +data.isComplete ? "0" : "1";
    updateTodoMutation.mutate(data);
  };
  const handleUpdateTodo = (data: TodoDto) => {
    setTodoFormValues(data);
  };
  return (
    <Container>
      {isError && <Alert />}
      {isLoading ? (
        <Loading />
      ) : (
        <Todos
          handleDeleteTodo={handleDeleteTodo}
          handleIscompleteTodo={handleIscompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          todos={todos}
        />
      )}
      <div className="w-full mt-3">
        <Form
          handleFormSubmit={handleFormSubmit}
          formValues={todoFormValues}
        ></Form>
      </div>
    </Container>
  );
};

export { App };
