import { useQuery } from 'react-query'
import axios from 'axios'

const URL = "http://localhost:3030";

export default function useTodos() {
  return useQuery('todos', () =>
    axios.get(`${URL}/todos`).then((res) => res.data)
  )
}
