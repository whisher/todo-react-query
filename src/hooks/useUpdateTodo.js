import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

const URL = "http://localhost:3030";

export default function useSavePost() {
  return useMutation(
    (values) =>
      axios.patch(`${URL}/todos/${values.id}`, values).then((res) => res.data),
    {
      onMutate: (values) => {
        const previousPost = queryCache.getQueryData(['todo', values.id])

        queryCache.setQueryData(['todo', values.id], (old) => ({
          ...old,
          ...values,
        }))

        return () => queryCache.setQueryData(['todo', values.id], previousPost)
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: async (values) => {
        queryCache.refetchQueries('todos')
        await queryCache.refetchQueries(['todo', values.id])
      },
    }
  )
}
