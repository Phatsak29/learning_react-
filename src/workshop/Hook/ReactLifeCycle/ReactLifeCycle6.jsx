import React, { useEffect, useRef } from 'react'

const ReactLifeCycle6 = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        console.log(inputRef.current.value)
    }, [inputRef.current?.value])
    
    return (
        <>
            <h1>WorkSHop 6</h1>
            <label htmlFor="">
                <input type="text"
                ref={inputRef}
                 />
            </label>
        </>
    )
}

export default ReactLifeCycle6