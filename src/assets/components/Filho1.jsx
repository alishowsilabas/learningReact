import React from "react";
import { useFetch } from "../../hooks/useFetch";

const Filho1 = () => {
  const { isLoading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      {isLoading && <p>Is Loading...</p>}
      {error && <p>Houve um erro inesperado...</p>}
      {data && <p>{data.length}</p>}
    </div>
  );
};

export default Filho1;
