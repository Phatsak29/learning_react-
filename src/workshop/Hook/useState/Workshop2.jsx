import { useState } from "react"

const Workshop2 = () => {
const [numberState, setNumberState] = useState(0)
const [stringState, setStringState] = useState('Phatsak')
const [booleanState, setBooleanState] = useState(false)
  return (
    <>
        <h1>Number : {numberState}</h1>
        <h1>String : {stringState}</h1>
        <h1>Boolean : {String(booleanState)}</h1>
        <button onClick={()=>setNumberState((p)=>p+1)}>Set Number</button>
        <button onClick={()=>setStringState('Mai')}>Set String</button>
        <button onClick={()=>setBooleanState(true)}>Set Boolean</button>
    </>
  )
}
export default Workshop2