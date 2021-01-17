import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { TodoDto } from "../types";
import { URL } from "../constants";

const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: TodoDto) =>
      axios.patch(`${URL}/todos/${todo.id}`, todo).then((res) => res.data),
    {
      onMutate: (values) => {},
      onError: (error, values, rollback) => {},
      onSuccess: async (values) => {},
    }
  );
};

export { useCreateTodo };
