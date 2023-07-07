import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { io } from 'socket.io-client';

const Sdashboard = () => {

    const [userData, setUserData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [currCourse, setCurrcourse] = useState([]);
    var flag = false;
    var counter = 0;
    

    const fetchData = () =>{
        return axios.get("http://localhost:8000/Dashboard").then((res) =>{
            if(res.data == "Error"){
                alert("Error");
            }else{
                setUserData(res.data.userData);
                setCourseData(res.data.courseData);
                setCurrcourse({lectures : []});
                setLoading(false);
            }
        })
    }

    const clicked = (x) =>{
        setCurrcourse(x);
    }

    useEffect(() => {
        fetchData();
    }, []);

  if(loading){
    return(
        <p></p>
    )
  }else{
    return (
        <Wrapper>
            <div className='sidebar'>
                <h2>Enrolled Courses</h2>
                <br></br><br></br>
                {
                    courseData.map((courseObj,index) =>{
                        flag = true;
                        return(
                            <div>
                                {
                                    userData.enroll.map((userObj,index) => {
                                        if(flag == false){
                                            return(
                                                <div></div>
                                            )
                                        }else if(courseObj._id == userObj.course){
                                                    flag = false;
                                                    return(
                                                        <div className='services-1' onClick={() => clicked(courseObj)}>
                                                            <h3>{courseObj.courseName}</h3>
                                                        </div>
                                                    )
                                        }else{
                                            return(
                                                <div></div>
                                            )
                                        }
                                    })
                                }

                            </div>
                            
                            
                        )
                    })
                    
                }
                <div className='profile-box'>
                    <div className='grid grid-two-column'>
                        <div className='profile-image'>
                            <FaRegUser className='duration-img-2'/>
                        </div>
                        <div className='profile-data'>
                            <h3>{userData.name}</h3>
                            <br></br>
                            <br></br>
                            <div className='duration'>
                                    <MdEmail className='duration-img' />
                                    <p>Email: {userData.email}</p>
                            </div>
                        </div>      
                    </div> 
                </div>
            </div>
            
            <div className='lecture-container'>
              <h2>{currCourse.courseName}</h2>
              <br></br>
              <div className='grid grid-two-column'>
                
                {
                  currCourse.lectures.map((lectureObj,index) => {
                    counter++;
                    return(
                      <NavLink to={lectureObj.lectureUrl}>
                        <div className='services-1'>
                          <p>Lecture {counter}</p>
                        </div>
                      </NavLink>
                    )
                  })
                }
              </div>
            </div>
            
        </Wrapper>
      )
  } 
  
}

const Wrapper = styled.section`

        .lecture-container{
            position: absolute;
            left: 30%;
            width: 60%;
            overflow-y: auto;
        }

    .grid{
        gap: 4.8rem;
    }

    .profile-container{
        position: absolute;
        margin-top:15rem;
        left: 30%;
    }

    .profile-box{
        position: absolute;
        bottom:15%;
        padding: 20px;
        width: 90%;
        margin-left: 5%;
        height: 10rem;
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: lightgray;
        text-align: left;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    .duration{
            display: flex;
            flex-direction: row;
            gap: 15px;
        }

        .duration-img{
            height: 2.5rem;
            width: 2.5rem;
            
        }

        .duration-img-2{
            height: 5rem;
            width: 5rem;
            margin-top: 0.5rem;
        }

    .profile-data{
        margin-left: -10rem;

        h3{
            font-size: 2rem;
        }

        p{
            font-size: 1.5rem;
        }
    }

    .sidebar{
        position: fixed;
        left: 0;
        background-color: #212529;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 25%;

        h2{
          color: white;
          font-size: 3.5rem;
          margin-left: 20px;
          margin-top: 10px;
        }

    }

    .services-1 {
    padding: 20px;
    width: 90%;
    margin-left: 5%;
    height: 5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: lightgray;
    text-align: left;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-1:hover{
    background-color: ${({theme}) => theme.colors.border};
    
    p{
        color: white;
    }

  }

  .hero-section-image {
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
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

`;

export default Sdashboard
