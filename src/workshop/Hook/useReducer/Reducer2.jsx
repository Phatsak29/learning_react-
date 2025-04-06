import { useReducer, useState } from "react";

const Reducer2 = () => {
  const iniState = {
    result: 100,
  };

  //   const [state, dispatch] = useReducer(reducer, iniState);
  const [state, setState] = useState(iniState);

  const handleAdd = () =>
    setState((prev) => ({ ...prev, result: prev.result + 10 }));
  const handleSubtract = () =>
    setState((prev) => ({ ...prev, result: prev.result - 10 }));
  const handleMultiply = () =>
    setState((prev) => ({ ...prev, result: prev.result * 10 }));
  const handleDivide = () =>
    setState((prev) => ({ ...prev, result: prev.result / 10 }));
  const handleReset = () => setState(iniState);

  return (
    <>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSubtract}>SUBTRACT</button>
      <button onClick={handleMultiply}>MULTIPLY</button>
      <button onClick={handleDivide}>DIVIDE</button>
      <button onClick={handleReset}>RESET</button>
      <h1>Result : {state.result}</h1>
    </>
  );
};

export default Reducer2;
