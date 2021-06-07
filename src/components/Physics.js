import React, { useContext, useState } from 'react'
import { UserContext } from '../Context'
import { Nav } from './Nav'
import { Redirect, Link } from 'react-router-dom'
import Phy from '../assets/physics.jpg'


export const Physics = () => {
    const [user, setUser] = useContext(UserContext)
    const [year, setYear] = useState(1)
    function subtract(){
        if(year === 1){
            return year
        }else if( year === 2){
            setYear(1)
            return year
        }else if(year === 3){
            setYear(2) 
            return year
        }else if(year === 4){
            setYear(3)
            return year
        }else{
            return year
        }
    }

    function add(){
        if(year === 1){
            setYear(2)
        }else if( year === 2){
            setYear(3)
        }else if(year === 3){
            setYear(4) 
        }else if(year === 4){
            return year
        }else{
            return year
        }
    }

    return (
        <div>
            {
                user.isLoggedin === false ? <Redirect to='/login' /> : null
            }
            <Nav />
            <div className='container' style={{marginTop:'5%', marginBottom:'0%'}}>
                <div className='row'>
                   <div className='col-sm-6'>
                        <img alt='' src={Phy} style={{width:'100%', height:'90%'}}/>
                    </div>
                    <div className='col-sm-6'>
                        <ol>
                            <li style={{display: year === 1 ? 'block' : 'none'}}><h1>First Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=i_CijGuk7fw&t=4s'
                                    }
                                    }}><h1>Introduction</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=XrtrzRXoHHo'
                                    }
                                    }}><h1>Heat</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=Hr4g2EzE3Tc'
                                    }
                                    }}><h1>Expansivity</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=CIv6vu9d73c&t=1s'
                                    }
                                    }}><h1>Electricity</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 2 ? 'block' : 'none'}}><h1>Second Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=b1t41Q3xRM8'
                                    }
                                    }}><h1>Introduction II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=tuSC0ObB-qY'
                                    }
                                    }}><h1>Heat II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=L096aweZUKA&t=3s'
                                    }
                                    }}><h1>Expansivity II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=ybuhfEa-PrU'
                                    }
                                    }}><h1>Electricity II</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 3 ? 'block' : 'none'}}><h1>Third Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=uIojjqSm0m4'
                                    }
                                    }}><h1>Introduction III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=XrtrzRXoHHo'
                                    }
                                    }}><h1>Heat III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=ziWegVVAnCI'
                                    }
                                    }}><h1>Expansivity III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=EJeAuQ7pkpc'
                                    }
                                    }}><h1>Electricity III</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 4 ? 'block' : 'none'}}><h1>Final Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=PUZkE1vIvIA'
                                    }
                                    }}><h1>Introduction IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=_1SvckZVy6w'
                                    }
                                    }}><h1>Heat IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=ZPXr3fL4la8'
                                    }
                                    }}><h1>Expansivity IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=F_vLWkkOETI'
                                    }
                                    }}><h1>Electricity IV</h1></Link></li>

                                </ul>
                            </li>
                            <button className='btn btn-danger' onClick={subtract}>Previous</button> <button className='btn btn-success' onClick={add}>Next</button>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
