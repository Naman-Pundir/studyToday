import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Slogin = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            console.log(email);
            await axios.post("http://localhost:8000/Studentlogin",{
                email,password
            })
            .then(res=>{
                if(res.data == "exist"){
                    history("/Home");
                }else{
                    alert("Invalid Credentiels");
                }
            })

        }catch{
            console.log("Error");
        }
    }

  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/Study.png' alt='Image' className='image-style'/>
                    </figure>
                </div>
                <div className='login-form'>
                    <form method='post'>
                        <h2>Student Login</h2>
                        <br/><br/>
                        <h3>Don't have an account <NavLink to="/Studentregister" >Sign Up</NavLink></h3>
                        <br/><br/>
                        <h3>Email</h3>
                        <br></br>
                        <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Email'/>
                        <br/><br/>
                        <h3>Password</h3>
                        <br></br>
                        <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter Password'/>
                        <br/><br/>
                        <input type='submit' onClick={submit} value="Login" />
                    </form>
                </div>
            </div>
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

  .login-form{
    margin-top: -5rem;
    background: ${({ theme }) => theme.colors.bg};
    padding: 20px;

    input{
        width: 100%;
    }
  }
`;

export default Slogin
