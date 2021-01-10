import React from "react";
import { FormInputs } from "./types";
import { Container, Form } from "./components";

const App = () => {
  const handleFormSubmit = (data: FormInputs) => {};
  return (
    <Container>
      <Form handleFormSubmit={handleFormSubmit}></Form>
    </Container>
  );
};

export { App };
