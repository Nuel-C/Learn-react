import React, {useContext} from 'react'
import { Nav } from './Nav'
import { UserContext } from '../Context'
import { Redirect, Link } from 'react-router-dom'
import Computer from '../assets/computer.jpg'
import English from '../assets/english.jpeg'
import Maths from '../assets/maths.jpg'
import Physics from '../assets/physics.jpg'



export const Dashboard = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div>
            {
                user.isLoggedin === false ? <Redirect to='/login' /> : null
            }
            <Nav />

            <div className='container' style={{marginTop:'10%'}}>
                <div className='row'>
                        <div className='col-sm-6' style={{textAlign:'center', alignItems:'center'}}>
                            <img src={Computer} alt='' style={{width:'100%', height:'100%'}} id='learn'/>
                        </div>

                        <div className='col-sm-6' style={{paddingTop:'5%'}}>
                            <h1 style={{fontSize:'5rem'}}><span style={{color:'Red'}}>Computer</span> Science</h1>
                            <p>Learn about the world of computers.</p>
                            <Link className='nav-link' to='/computer'><button className='btn btn-lg' style={{borderRadius:'30px',  backgroundColor:'white'}}>Learn</button></Link>
                        </div>

                        <div className='col-sm-6' style={{textAlign:'center', alignItems:'center', marginTop:'10%'}}>
                            <img src={English} alt='' style={{width:'100%', height:'100%'}} id='learn'/>
                        </div>

                        <div className='col-sm-6' style={{paddingTop:'10%'}}>
                            <h1 style={{fontSize:'5rem'}}><span style={{color:'Red'}}>English</span> Language</h1>
                            <p>Learn the English Language.</p>
                            <Link className='nav-link' to='/english'><button className='btn btn-lg' style={{borderRadius:'30px', backgroundColor:'white'}}>Learn</button></Link>
                        </div>

                        <div className='col-sm-6' style={{textAlign:'center', alignItems:'center', marginTop:'10%'}}>
                            <img src={Maths} alt='' style={{width:'100%', height:'100%'}} id='learn'/>
                        </div>

                        <div className='col-sm-6' style={{paddingTop:'10%'}}>
                            <h1 style={{fontSize:'5rem'}}><span style={{color:'Red'}}>Maths</span></h1>
                            <p>Learn Mathematics.</p>
                            <Link className='nav-link' to='/maths'><button className='btn btn-lg' style={{borderRadius:'30px', backgroundColor:'white'}}>Learn</button></Link>
                        </div>

                        <div className='col-sm-6' style={{textAlign:'center', alignItems:'center', marginTop:'10%', marginBottom:'5%'}}>
                            <img src={Physics} alt='' style={{width:'100%', height:'100%'}} id='learn'/>
                        </div>

                        <div className='col-sm-6' style={{paddingTop:'10%', marginBottom:'5%'}}>
                            <h1 style={{fontSize:'5rem'}}><span style={{color:'Red'}}>Physics</span></h1>
                            <p>Learn physics.</p>
                            <Link className='nav-link' to='/physics'><button className='btn btn-lg' style={{borderRadius:'30px', backgroundColor:'white'}}>Learn</button></Link>
                        </div>
                </div>
            </div>
        </div>
    )
}
