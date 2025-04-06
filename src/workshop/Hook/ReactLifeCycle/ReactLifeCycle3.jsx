import { useEffect, useState } from "react";

const ReactLifeCycle3 = () => {
  const [valueState, setValueState] = useState("");

  useEffect(() => {
    const message =  localStorage.getItem("msgUser")
    console.log(message)
  }, []);

  useEffect(() => {
    if(valueState) localStorage.setItem("msgUser", valueState);
  }, [valueState]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setValueState(e.target.value)}
        value={valueState}
      />
    </>
  );
};
export default ReactLifeCycle3;
