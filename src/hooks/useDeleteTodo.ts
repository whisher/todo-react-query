import axios from "axios";
import { useMutation } from "react-query";
import { URL } from "../constants";

export default function useDeleteTodo() {
  return useMutation((todoId) =>
    axios.delete(`${URL}/todos/${todoId}`).then((res) => res.data)
  );
}
