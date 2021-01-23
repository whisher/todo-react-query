import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { TodoDto } from "../types";
import { URL } from "../constants";

const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: TodoDto) =>
      axios.patch(`${URL}/todos/${todo.id}`, todo).then((res) => res.data),
    {
      onMutate: async (newTodo: TodoDto) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("todos");

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData("todos");

        // Optimistically update to the new value
        queryClient.setQueryData<TodoDto[] | undefined>("todos", (old) => {
          const id = newTodo.id;
          const data = old?.map((todo) => {
            if (Number(todo.id) === Number(id)) {
              return newTodo;
            }
            return todo;
          });
          return data;
        });

        // Return a context object with the snapshotted value
        return { previousTodos };
      },
      onError: (
        err,
        newTodo,
        context:
          | {
              previousTodos: unknown;
            }
          | undefined
      ) => {
        queryClient.setQueryData(
          "todos",
          context ? context.previousTodos : context
        );
      },
      onSuccess: (data, variables) => {
        queryClient.setQueryData(["todos", { id: variables.id }], data);
      },
    }
  );
};

export { useUpdateTodo };
