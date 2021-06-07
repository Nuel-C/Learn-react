import React, { useState, createContext } from 'react'


export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        username:'',
        email:'',
        isLoggedin:false,
        components:{
            login:false,
            signup:false,
            home:false,
            dashboard:false
        }
    })
    const [use, setUse] = useState({
        components:{
            login:false,
            signup:false,
            home:false,
            dashboard:false
        }
    })
    return(
        <UserContext.Provider value={[user, setUser, use, setUse]}>
            {props.children}
        </UserContext.Provider>
    )
}