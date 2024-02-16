import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'
import student from '../assets/student.png'

function Auth() {

    const navigate = useNavigate()

    const [userData,setUserData] = useState({
        firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
    })


    const handleRegister = async (e) =>{
        e.preventDefault()
        console.log(userData);
        const {firstname,lastname,address,email,gender,mobile,password,dob,course} = userData
        if(!firstname || !lastname || !address || !email || !gender || !mobile || !password || !dob || !course){
            toast.info("Please fill the form completely")
        }
        else{
        //  toast.success("proceed to register api")
            try{
                const result = await registerAPI(userData)
                if(result.status===200){
                    toast.success(`${result.data.firstname}... `)
                    setUserData({firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""})
                    setTimeout(()=>{
                        navigate("/dashboard")
                    },2000)
                }
                else{
                    toast.warning(result.response.data)
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }
    console.log(userData);

    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className="container w-100">
                <div className="card shadow bg-info">
                    <div className='row'>
                        <div className='col-lg-3'>
                            <img className='m-5' style={{width:'200px'}} src={student} alt="" />
                            <h3 className='text-center text-white'>Welcome</h3>
                            <p className='m-5 text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='col-lg-9 bg-secondary'>
                            <div className="row p-5">
                                <h1 className='text-center fs-3 mb-5'>Apply as a Student</h1>
                                <div className="col-lg-6 p-2">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your First Name" value={userData.firstname} 
                                    onChange={e=>setUserData({...userData,firstname:e.target.value})}/>
        
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Last Name" value={userData.lastname} 
                                    onChange={e=>setUserData({...userData,lastname:e.target.value})}/>
        
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" rows={2} placeholder='Enter your Address' value={userData.address} 
                                    onChange={e=>setUserData({...userData,address:e.target.value})} />
                                    </Form.Group>
        
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your Email" value={userData.email} 
                                    onChange={e=>setUserData({...userData,email:e.target.value})}/>
                                    </Form.Group>
        
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select aria-label="Default select example" value={userData.gender} 
                                    onChange={e=>setUserData({...userData,gender:e.target.value})}>
                                            <option>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Form.Select>
                                    </Form.Group>
        
        
        
                                </div>
                                <div className="col-lg-6 p-3">
                                    <Form.Label column>Mobile</Form.Label>
                                    <Form.Control  className="mb-3" type="number" placeholder="Enter your Mobile Number" value={userData.mobile} 
                                    onChange={e=>setUserData({...userData,mobile:e.target.value})}/>
        
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={userData.password} 
                                    onChange={e=>setUserData({...userData,password:e.target.value})}/>
                                    </Form.Group>
        
                                    <Form.Label column>Date Of Birth:</Form.Label>
                                    <Form.Control className="mb-3" type="date" value={userData.dob} 
                                    onChange={e=>setUserData({...userData,dob:e.target.value})} />
        
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Select aria-label="Default select example" value={userData.course} 
                                    onChange={e=>setUserData({...userData,course:e.target.value})}>
                                            <option>Course</option>
                                            <option value="Biology">Biology</option>
                                            <option value="Computer">Computer</option>
                                        </Form.Select>
                                    </Form.Group>
        
                                    <button onClick={handleRegister} className='btn btn-info'>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={3000} colored/>
        </div>
    )
}

export default Auth