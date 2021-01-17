import React from "react";
import { TodoDto } from "./types";
import { Alert, Container, Form, Loading, Todos } from "./components";
import { useTodos, useCreateTodo } from "./hooks";

const defaultTodoFormValues = {
  content: "",
  isComplete: false,
};

const App = () => {
  const { data: todos, isError, isLoading } = useTodos();
  const createTodoMutation = useCreateTodo();
  const handleFormSubmit = (data: TodoDto) => {
    createTodoMutation.mutate(data);
  };
  return (
    <Container>
      {isError && <Alert />}
      {isLoading ? <Loading /> : <Todos todos={todos} />}
      <div className="w-full mt-3">
        <Form
          handleFormSubmit={handleFormSubmit}
          initialValues={defaultTodoFormValues}
        ></Form>
      </div>
    </Container>
  );
};

export { App };
