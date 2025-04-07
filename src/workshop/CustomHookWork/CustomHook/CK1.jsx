const CK1 = () => {
  const { counter, increment, decrement, reset } = useCounter(10); // เริ่มจาก 10

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
