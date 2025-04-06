import Child from "./Child";

const Parent = () => {
  const name = "Mai";
  const age = 29;
  return (
    <>
      <h1>Parent</h1>
      <Child name={name} age={age}/>
    </>
  );
};
export default Parent;
