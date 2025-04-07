import React, { useState } from 'react'

const Ck2 = () => {
  return (
    <>  
        <CompA />
        <CompB />
        <CompC />
    </>
  )
}

const CompA=()=>{
    const [counter, setCounter] = useState(second)
    return <div>Hello Comp A</div>
}
const CompB=()=>{
    return <div>Hello Comp B</div>
}
const CompC=()=>{
    return <div>Hello Comp C</div>
}

export default Ck2