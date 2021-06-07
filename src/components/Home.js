import React from 'react'
import Learn from '../assets/study.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6' style={{textAlign:'center', alignItems:'center'}}>
                        <img src={Learn} alt='' style={{width:'100%', height:'100%'}} id='learn'/>
                    </div>

                    <div className='col-sm-6' style={{paddingTop:'5%'}}>
                        <h1 style={{fontSize:'5rem'}}><span style={{color:'Red'}}>Learn</span> Without</h1>
                        <h1 style={{fontSize:'5rem'}}>Limits</h1>
                        <p>Build skills with courses from world-class universities and companies.</p>
                        <Link className='nav-link' to='/signup'><button className='btn btn-lg' style={{borderRadius:'30px'}}>Signup</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
