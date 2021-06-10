import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Img from '../assets/book.png'
import { UserContext } from '../Context'

export const Nav = () => {
    const [user, setUser] = useContext(UserContext)
    function logout(){
        setUser({
            username:'',
            email:'',
            isLoggedin:false,
            components:{
                login:true,
                signup:false,
                home:false,
                dashboard:false
            }
        })
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{textAlign:'center'}}>
        <a className="navbar-brand" href='/'><img src={Img} alt='' id="navimg" style={{width:'4rem', height:'2rem'}}/> Learn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                   <Link className='nav-link' style={{color:'white', display: user.components.home ? 'none' : 'block'}} style={{color:'white', display: user.isLoggedin ? 'none' : 'block'}} to={{
                              pathname: '/'
                              }}><strong>Home</strong></Link>
                </li>

                <li className="nav-item">
                   <Link className='nav-link' style={{color:'white', display: user.components.dashboard ? 'none' : 'block'}} to={{
                              pathname: '/login'
                              }}><strong>Login</strong></Link>
                </li>

                <li className="nav-item">
                   <Link className='nav-link' style={{color:'white', display: user.isLoggedin === false ? 'none' : 'block'}} to={{
                              pathname: '/dashboard'
                              }}><strong>Courses</strong></Link>
                </li>

                <li className="nav-item">
                   <Link className='nav-link' style={{color:'white', display: user.components.dashboard ? 'none' : 'block'}} to={{
                              pathname: '/signup'
                              }}><strong>Sign Up</strong></Link>
                </li>
    
                <li className="nav-item">
                    <span className='nav-link' style={{alignItems:'center',textAlign:'center'}}><button onClick={logout} className='btn btn-sm' style={{borderRadius:'30px', display: user.isLoggedin ? null : 'none', color:'black',  backgroundColor:'white'}}>Log Out</button></span>
                </li>
            </ul>

        </div>
    </nav>
    )
}
