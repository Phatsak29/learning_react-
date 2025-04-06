import { useEffect, useState } from "react";

const ReactLifeCycle1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const res = await fetch(url);
        if (!res.ok) throw new Error("Api res was not ok");
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error : {error.message}</div>;

  return (
    <>
    <h1>Date:</h1>
    <ul>
        {
            data.map((item,index)=>(
                <li key={index}>ID {item.id} Title:{item.title}</li>

            ))
        }
    </ul>
    </>
  );
};

export default ReactLifeCycle1;
