import React, { useEffect, useState } from 'react'

const ReactLifeCycle5 = () => {
    const [isValid, setIsValid] = useState(true)
    const [email, setEmail] = useState('')
    // console.log(email)
    useEffect(() => {
        //validate
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const isValidEmail = emailRegx.test(email)
        // console.log(isValidEmail)
        setIsValid(isValidEmail)
    }, [email])
    
    return (
        <>
            <div>Validate Form Data</div>
            <label >
                Email:<input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            {!isValid && <p style={{ color: "red" }}>Invalid Email formatting</p>}
        </>
    )
}

export default ReactLifeCycle5