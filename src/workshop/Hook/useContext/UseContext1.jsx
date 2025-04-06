import { useEffect, useState } from "react"

const UseContext1 = ({count2}) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('first')
    
  }, [])
  
  return (
    <div>
      <div>Count:{count}</div>
      <div>Count2:{count2}</div>
      <button onClick={()=> setCount(count+1)}>Add Count</button>
    </div>
  )
}
export default UseContext1