import { useEffect, useState } from "react";

const ReactLifeCycle4 = () => {
  const [querySearch, setQuerySearch] = useState(["a", "B", "c"]);

  const fetchApi = async () => {
    const urlApi = `https://demo.dataverse.org/api/search?q=${&per_page=100`;
    const res = await fetch(urlApi);
    if (!res.ok) throw new Error("reponse is not ok");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        Result Search :
        <input type="text" onChange={(e) => setQuerySearch(e.target.value)} />
        <ul>
          {querySearch.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ReactLifeCycle4;
