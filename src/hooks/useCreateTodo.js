import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

const URL = "http://localhost:3030";

export default function useCreateTodo() {
  return useMutation(
    (values) => axios.post(`${URL}/todos`, values).then((res) => res.data),
    {
      onSuccess: () => queryCache.refetchQueries('todos'),
    }
  )
}
