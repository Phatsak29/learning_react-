import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue); // ✅ ใช้ค่าที่ส่งเข้ามา

  const increment = () => setCounter(prev => prev + 1);   // ✅ เพิ่ม 1
  const decrement = () => setCounter(prev => prev - 1);   // ✅ ลด 1
  const reset = () => setCounter(initialValue);           // ✅ รีเซตตามค่าเริ่มต้น

  return { counter, increment, decrement, reset };
};

export default useCounter;
