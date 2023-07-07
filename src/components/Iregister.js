import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Iregister = () => {

    const history = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [contact, setContact] = useState('')
    const [coursename, setCoursename] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [duration, setDuration] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            console.log(email);
            await axios.post("http://localhost:8000/Instructorregister",{
                name,email,password,confirmPassword,contact,coursename,description,price,duration
            })
            .then(res=>{
                console.log(res.data);
                if(res.data == "unequal"){
                    alert("Password and confirmPassword are not equal.")
                }else if(res.data == "exist"){
                    alert("This email already exist");
                }else{
                    history("/Instructorlogin");
                }
            })

        }catch{
            console.log("ERROR");
        }
    }

  return (
    <Wrapper>
        <div className='container'>
            <h2>New Instructor Registration</h2>
            <br></br><br></br>
            <h3>Already have an account <NavLink to="/Instructorlogin">Login</NavLink> now</h3>
            <br></br>
            <form method='post' className='register-form'>
                <div className='grid grid-two-column'>
                    <div className='personal-details'>
                        <h2>Personal Details</h2>
                        <br></br>
                        <br></br>
                        <h3>Name</h3>
                        <br></br>
                        <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='Enter Full Name'></input>
                        <br></br>
                        <br></br>
                        <h3>Email</h3>
                        <br></br>
                        <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Email'></input>
                        <br></br>
                        <br></br>
                        <h3>Contact Number</h3>
                        <br></br>
                        <input type='number' onChange={(e) => {setContact(e.target.value)}} placeholder='Enter Contact Number'></input>
                        <br></br>
                        <br></br>
                        <h3>Password</h3>
                        <br/>
                        <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter Password'></input>
                        <br/><br/>
                        <h3>Confirm Password</h3>
                        <br/>
                        <input type='password' onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder='Retype Password'></input>
                        <br/><br/>
                        <input type='submit' onClick={submit} value="Register"></input>
                    </div>
                    <div className='course-details'>
                        <h2>Course Details</h2>
                        <br></br>
                        <br></br>
                        <h3>Course Name</h3>
                        <br></br>
                        <input type='text' onChange={(e) => {setCoursename(e.target.value)}} placeholder='Enter Course Name'></input>
                        <br></br>
                        <br></br>
                        <h3>Description</h3>
                        <br></br>
                        <input type='text' onChange={(e) => {setDescription(e.target.value)}} placeholder='Enter Course Description'></input>
                        <br></br>
                        <br></br>
                        <h3>Fee</h3>
                        <br></br>
                        <input type='number' onChange={(e) => {setPrice(e.target.value)}} placeholder='Enter Course Fee'></input>
                        <br></br>
                        <br></br>
                        <h3>Duration</h3>
                        <br></br>
                        <input type='number' onChange={(e) => {setDuration(e.target.value)}} placeholder='Enter Course Duration'></input>
                    </div>
                </div>
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 12rem 0;

    img {
        min-width: 30rem;
        height: 35rem;
    }

    .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

  .register-form{
    
    background: ${({ theme }) => theme.colors.bg};
    padding: 20px;

    input{
        width: 100%;
    }
  }

  .container{
    width: 80%;
  }
`;

export default Iregister
