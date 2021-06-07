import React, { useState, useContext } from 'react'
import { Nav } from './Nav'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../Context'
import axios from 'axios'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useContext(UserContext)

    function submit(e){
        e.preventDefault()
        setMessage('*Logging In*')
        setError('')
        var details = {
            username: username,
            password: password,
        }
        var url = '/login'
        axios.post(url, details)
        .then(res => {
        console.log(res.data);
        setUser(
            {
                username:res.data.username,
                email:res.data.email,
                isLoggedin:res.data.success,
                components:{
                    login:false,
                    signup:false,
                    home:false,
                    dashboard:res.data.success
                } 
           })
        if(res.data.success === false){
            setMessage('')
            setError(res.data.message)
        }
        })
        .catch((error) => {
            console.log(error)
            setMessage('')
            setError('Server Error')
        })

        setTimeout(()=>{
            setMessage('')
            setError('')
            }, 7000)
    }
    return (
        <div>
            {
                user.isLoggedin ? <Redirect to='/dashboard' /> : null
            }
            <Nav />
            <div className='container' style={{marginTop: '10%'}}>
                    <h2 style={{textAlign:'center'}}>Log In</h2>
                    <div className='form-div'>
                    <span style={{color:'green'}}>{message}</span>
                    <span style={{color:'red'}}>{error}</span>
                        <form onSubmit={submit}>
                        Username:
                        <input required type = 'text'
                        placeholder = 'Username'
                        onChange = {(e)=>{setUsername(e.target.value)}}
                        value = {username}
                        className = 'form-control form-group'
                        />
                        Password:
                        <input required type = 'password'
                        placeholder = 'Password'
                        onChange = {(e)=>{setPassword(e.target.value)}}
                        value = {password}
                        className = 'form-control form-group'
                        />
                        <input 
                        type = 'submit'
                        className = 'btn btn-danger btn-block'
                        value = 'submit'
                        />
                        </form><br/>
                    </div>
                </div>
        </div>
    )
}
