import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { TodoDto } from "../types";
import { URL } from "../constants";

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: TodoDto) => axios.post(`${URL}/todos`, todo).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export { useCreateTodo };
