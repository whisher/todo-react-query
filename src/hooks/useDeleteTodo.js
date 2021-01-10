import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

const URL = "http://localhost:3030";

export default function useDeleteTodo() {
  return useMutation(
    (todoId) => axios.delete(`${URL}/todos/${todoId}`).then((res) => res.data),
    {
      onSuccess: () => queryCache.refetchQueries('todos'),
    }
  )
}
