import { useEffect, useState } from "react";

const ReactLifeCycle2 = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds+1);
    }, 1000);
    console.log(`rerender`)
    
    return () => clearInterval(intervalId);
}, []);

console.log(`rerender`)
  return (
    <>
      <div>Time(sec) : {seconds}</div>
    </>
  );
};

export default ReactLifeCycle2;
