import { useReducer } from "react";

const UseReducer1 = () => {
  const iniState = {
    result: 100,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { result: state.result + action.payload };
        break;
      case "SUBTRACT":
        return { result: state.result - action.payload };
        break;
      case "MULTIPLY":
        return { result: state.result * action.payload };
        break;
      case "DIVIDE":
        return { result: state.result / action.payload };
        break;
      case "RESET":
        return { result: state.result };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, iniState);
  const handleAdd = () => dispatch({ type: "ADD", payload: 10 });
  const handleSubtract = () => dispatch({ type: "SUBTRACT", payload: 10 });
  const handleMultiply = () => dispatch({ type: "MULTIPLY", payload: 10 });
  const handleDivide = () => dispatch({ type: "DIVIDE", payload: 10 });
  const handleReset = () => dispatch({ type: "RESET" });
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
export default UseReducer1;
