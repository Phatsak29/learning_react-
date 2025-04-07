import React, { useEffect, useState } from 'react'

const ReactLifeCycle7 = () => {
    const [userSession, setUserSession] = useState(null)
    const [user, setUser] = useState({})
    useEffect(() => {
        const userSessionLocal =  sessionStorage.getItem("user")
        setUserSession(userSessionLocal)
        console.log(userSessionLocal)

    }, [])
    
    const handleOnClickLogin =()=>{
        console.log(user)
        sessionStorage.setItem('user',JSON.stringify(user))
        setUserSession(JSON.stringify(user))
    }
    return (
        <>
            {userSession ? <div>Log Out</div> :
                <div>
                    <div>Log in</div>
                    <div>
                        Name : <input type="text" name='username' onChange={(e) => setUser({ ...user,username:e.target.value })} />
                    </div>
                    <div>
                        Password : <input type="text" name='password' onChange={(e)=> setUser({...user,password:e.target.value})} />
                    </div>
                    <button onClick={handleOnClickLogin}>Login</button>
                </div>
            }
        </>
    )
}

export default ReactLifeCycle7