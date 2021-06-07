import React, { useContext, useState } from 'react'
import { Nav } from './Nav'
import { UserContext } from '../Context'
import { Redirect, Link } from 'react-router-dom'
import Math from '../assets/maths.jpg'


export const Maths = () => {
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
                        <img alt='' src={Math} style={{width:'100%', height:'90%'}}/>
                    </div>
                    <div className='col-sm-6'>
                        <ol>
                            <li style={{display: year === 1 ? 'block' : 'none'}}><h1>First Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=NybHckSEQBI'
                                    }
                                    }}><h1>Algebra</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=fYyARMqiaag&list=PLF797E961509B4EB5'
                                    }
                                    }}><h1>Calculus</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=BcOPKQAZcn0&t=2s'
                                    }
                                    }}><h1>Differentiation</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=g-Aym5nJheM'
                                    }
                                    }}><h1>Integration</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 2 ? 'block' : 'none'}}><h1>Second Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=grnP3mduZkM&t=4s'
                                    }
                                    }}><h1>Algebra II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=1EGFSefe5II&list=PLF797E961509B4EB5&index=2'
                                    }
                                    }}><h1>Calculus II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=IvLpN1G1Ncg'
                                    }
                                    }}><h1>Differentiation II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=zOxaUlRkFG0'
                                    }
                                    }}><h1>Integration II</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 3 ? 'block' : 'none'}}><h1>Third Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=LwCRRUa8yTU'
                                    }
                                    }}><h1>Algebra III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=SzLF-wLZF_I&list=PLF797E961509B4EB5&index=3'
                                    }
                                    }}><h1>Calculus III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=oiQ6g8VTOtI'
                                    }
                                    }}><h1>Differentiation III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=Vc1kVuRuefY'
                                    }
                                    }}><h1>Integration III</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 4 ? 'block' : 'none'}}><h1>Final Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=MHeirBPOI6w'
                                    }
                                    }}><h1>Algebra IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=f-_UsIP5jyA&list=PLF797E961509B4EB5&index=4'
                                    }
                                    }}><h1>Calculus IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=I876Sb5xrws'
                                    }
                                    }}><h1>Differentiation IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=sWSLLO3DS1I'
                                    }
                                    }}><h1>Integration IV</h1></Link></li>

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
