import React, { useContext, useState } from 'react'
import { Nav } from './Nav'
import { UserContext } from '../Context'
import { Redirect, Link } from 'react-router-dom'
import Comp from '../assets/computer.jpg'


export const Computer = () => {
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
                        <img alt='' src={Comp} style={{width:'100%', height:'20rem'}}/>
                    </div>
                    <div className='col-sm-6'>
                        <ol>
                            <li  style={{display: year === 1 ? 'block' : 'none'}}><h1>First Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=Q7JEvW99J1I&t=5s'
                                    }
                                    }}><h1>Introduction</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=HfTXHrWMGVY&list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a'
                                    }
                                    }}><h1>Web Development</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=_cCGBMmMOFw&list=PLFt_AvWsXl0fnA91TcmkRyhhixX9CO3Lw&index=1'
                                    }
                                    }}><h1>Game Development</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=GHpchgLoDvI&list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz&index=1'
                                    }
                                    }}><h1>Artificial Intelligence</h1></Link></li>

                                </ul>                     
                            </li>
                            <li style={{display: year === 2 ? 'block' : 'none'}}><h1>Second Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=9dkGd2u7yYM'
                                    }
                                    }}><h1>Introduction II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=88QJumITbQA&list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a&index=2'
                                    }
                                    }}><h1>Web Development II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=9iCnjdXEfMA&list=PLFt_AvWsXl0fnA91TcmkRyhhixX9CO3Lw&index=2'
                                    }
                                    }}><h1>Game Development II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=K9gH7hBAdpo&list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz&index=2'
                                    }
                                    }}><h1>Artificial Intelligence II</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 3 ? 'block' : 'none'}}><h1>Third Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=i3SZkTK4-MI'
                                    }
                                    }}><h1>Introduction III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=5YDVJaItmaY'
                                    }
                                    }}><h1>Web Development III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=XT_CtYN1OOU&list=PLFt_AvWsXl0fnA91TcmkRyhhixX9CO3Lw&index=3'
                                    }
                                    }}><h1>Game Development III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=HF_ncSeCMmA&list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz&index=3'
                                    }
                                    }}><h1>Artificial Intelligence III</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 4 ? 'block' : 'none'}}><h1>Final Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=HXh8Xhzg5qI'
                                    }
                                    }}><h1>Introduction IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=5YDVJaItmaYhttps://www.youtube.com/watch?v=BvJYXl2ywUE&list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a&index=3'
                                    }
                                    }}><h1>Web Development IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=L9zlZjxmwXU&list=PLFt_AvWsXl0fnA91TcmkRyhhixX9CO3Lw&index=4'
                                    }
                                    }}><h1>Game Development IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=P74Sa1GvPd4&list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz&index=4'
                                    }
                                    }}><h1>Artificial Intelligence IV</h1></Link></li>

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
