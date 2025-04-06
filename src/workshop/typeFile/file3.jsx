const MyComponent = () => {
  const name = "phatsak";
  const age = "9";

  const greetUser = (userName) => `Hello : ${userName}`;
  return (
    <>
      <div>{greetUser(name)}</div>
      <div>{`You are age ${age} years old`}</div>
      <div>{age > 18 ? "You are adult" : "You are young"}</div>
    </>
  );
};
export default MyComponent;
