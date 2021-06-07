import React, { useContext, useState } from 'react'
import { Nav } from './Nav'
import { UserContext } from '../Context'
import { Redirect, Link } from 'react-router-dom'
import Eng from '../assets/english.jpeg'

export const English = () => {
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
                        <img alt='' src={Eng} style={{width:'100%', height:'90%'}}/>
                    </div>
                    <div className='col-sm-6'>
                        <ol>
                            <li style={{display: year === 1 ? 'block' : 'none'}}><h1>First Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=QdAgnyD4xhY&list=PLvXbn5FzrrpImcEzrWavZgxiXR39m2zSP'
                                    }
                                    }}><h1>Basic Grammar</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/results?search_query=compound+words'
                                    }
                                    }}><h1>Compound words</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=KCiOTBcha-o&t=2s'
                                    }
                                    }}><h1>Silent Letters</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=7mahmMmnSx4&list=PLOZUTLsJbEAjW-Z9Bou0fPvPs8zdF79pJ'
                                    }
                                    }}><h1>Introduction to Phonetics</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 2 ? 'block' : 'none'}}><h1>Second Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=O80c7WBXkI4&list=PLvXbn5FzrrpImcEzrWavZgxiXR39m2zSP&index=2'
                                    }
                                    }}><h1>Basic Grammar II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=2U0OBDRvkKo'
                                    }
                                    }}><h1>Compound words II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=wtEfaEUTZhI'
                                    }
                                    }}><h1>Silent Letters II</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=JfwVXfl0EnI&list=PLOZUTLsJbEAjW-Z9Bou0fPvPs8zdF79pJ&index=2'
                                    }
                                    }}><h1>Introduction to Phonetics II</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 3 ? 'block' : 'none'}}><h1>Third Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=c0t5YIv6jKY&list=PLvXbn5FzrrpImcEzrWavZgxiXR39m2zSP&index=3'
                                    }
                                    }}><h1>Basic Grammar III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=-qbaY9BhC6w'
                                    }
                                    }}><h1>Compound words III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=nUccn2K0fjw'
                                    }
                                    }}><h1>Silent Letters III</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=SwUpGllGvhw&list=PLOZUTLsJbEAjW-Z9Bou0fPvPs8zdF79pJ&index=3'
                                    }
                                    }}><h1>Introduction to Phonetics III</h1></Link></li>

                                </ul>
                            </li>

                            <li style={{display: year === 4 ? 'block' : 'none'}}><h1>Final Year</h1>
                                <ul style={{marginTop:'5%'}} id='ul'>
                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=JpU1JLEotoc&list=PLvXbn5FzrrpImcEzrWavZgxiXR39m2zSP&index=4'
                                    }
                                    }}><h1>Basic Grammar IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=9Qzs41s4PVM'
                                    }
                                    }}><h1>Compound words IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=ADCHItBNIFM'
                                    }
                                    }}><h1>Silent Letters IV</h1></Link></li>

                                    <li><Link to={{
                                        pathname: '/read',
                                        state:{
                                        file:'https://www.youtube.com/watch?v=L6Ben2yfksA&list=PLOZUTLsJbEAjW-Z9Bou0fPvPs8zdF79pJ&index=4'
                                    }
                                    }}><h1>Introduction to Phonetics IV</h1></Link></li>

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
