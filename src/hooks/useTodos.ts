import { useQuery } from "react-query";
import axios from "axios";
import { URL } from "../constants";

const useTodos = () => {
  return useQuery("todos", () =>
    axios.get(`${URL}/todos`).then((res) => res.data)
  );
};

export { useTodos };
