import { useState,useEffect } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
;

  return (
    <>
      <h1>Functional</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Add count</button>
    </>
  );
};
export default FunctionalComponent;
