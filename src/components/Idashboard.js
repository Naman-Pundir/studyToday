import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Idashboard = () => {

  const [course,setCourse] = useState([]);
  const [students,setStudents] = useState([]);
  const [instructor,setInstructor] = useState([]);
  const [loading,setLoading] = useState(true);
  const [lectureUrl, setLectureurl] = useState('');
  const history = useNavigate();
  var flag = flag;
  var counter = 0;

  const fetchData = () => {
    return axios.get("http://localhost:8000/Instructordashboard").then((res) => {
        setCourse(res.data.course);
        setStudents(res.data.students);
        setInstructor(res.data.instructor);
        setLoading(false);
    })
  }

  async function submit(e){
    e.preventDefault();
      try{
          await axios.post("http://localhost:8000/Instructordashboard",{},{
            params:{
              lectureUrl: lectureUrl
            }
          }).then((res) =>{
            if(res.data == "Error"){
              alert("Error");
            }else{
              alert("Successfully Uploaded");
              window.location.reload();
            }
          })
      }catch{
        console.log("Error");
      }
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
                <h2>Enrolled Students</h2>
                <br></br><br></br>
                {
                    students.map((userObj,index) =>{
                        flag = true;
                        return(
                            <div>
                                {
                                    userObj.enroll.map((enrollObj,index) => {
                                        if(flag == false){
                                            return(
                                                <div></div>
                                            )
                                        }else if(enrollObj.course== course._id){
                                                    flag = false;
                                                    return(
                                                        <div className='services-1'>
                                                            <h3>{userObj.name}</h3>
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
                            <h3>{instructor.name}</h3>
                            <br></br>
                            <br></br>
                            <div className='duration'>
                                    <MdEmail className='duration-img' />
                                    <p>Email: {instructor.email}</p>
                            </div>
                        </div>      
                    </div> 
                </div>
            </div>
            <div className='lecture-form'>
              <h3>Upload a new Lecture:</h3>
              <br></br>
              <form method='POST'>
                <input type='text' onChange={(e) => {setLectureurl(e.target.value)}} placeholder='Enter URL to the lecture'></input>
                <input type='submit' value='Upload' onClick={submit} />
              </form>
            </div>
            <div className='lecture-container'>
              <div className='grid grid-two-column'>
                {
                  course.lectures.map((lectureObj,index) => {
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


    .lecture-form{
      position: fixed;
      left: 30%;
      bottom: 5%;

      input{
        width: 150%;
      }

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

export default Idashboard
