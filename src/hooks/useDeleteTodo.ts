import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { TodoDto } from "../types";
import { URL } from "../constants";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: TodoDto) =>
      axios.delete(`${URL}/todos/${todo.id}`).then((res) => res.data),
    {
      onSuccess: () => queryClient.invalidateQueries("todos"),
    }
  );
};

export { useDeleteTodo };
