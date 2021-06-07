import React, { useContext } from 'react'
import { Nav } from './Nav'
import { UserContext } from '../Context'
import {Redirect} from 'react-router-dom'
import ReactPlayer from "react-player"


export const Read = props => {
    const [user, setUser] = useContext(UserContext)
    const file = props.location.state.file
    console.log(file)
    
    return (
        <div>
            {
                user.isLoggedin === false ? <Redirect to='/login' /> : null
            }
            <Nav />
            <ReactPlayer
              url={file}
              width='100%'
              height='500px'
              className='container'
              style={{marginTop:'5%'}}
            /><br />
        </div>
    )
}
