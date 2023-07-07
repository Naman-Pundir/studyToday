import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { BsClockHistory } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { Button } from '../styles/Button';
import { useNavigate } from 'react-router-dom';

const Subscription = ({courseId}) => {

    const [course,setCourse] = useState([]);
    const [instructor, setInstructor] = useState([]);
    const [id,setId] = useState('');
    const history = useNavigate();

    const fetchData = () => {
        return axios.get("http://localhost:8000/Subscribe" ,{
            params:{
                id: courseId
            }
        }).then((res) => {
            if(res.data == "error"){
                console.log("Error");
            }else{
                setCourse(res.data.course);
                setInstructor(res.data.instructor);
            }
            
        })
    }

    const handleSubmit = () => {
        setId(courseId);
        axios.post("http://localhost:8000/Subscribe",{},{
            params:{
                id: courseId
            }
        }).then((res) => {
            if(res.data == "Error"){
                alert("Some error occured");
            }else{
                alert("Subscription Successful");
                console.log(res.data);
                history("/Courses");
            }
        }).catch((error) =>{
            alert("Error");
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(course);
    console.log(instructor);

  return (
            <Wrapper>
                <div className='container'>
                    <div className='grid grid-two-column'>
                        <figure className='hero-section-image'>
                            <img src='images/course.jpg' alt='Image'></img>
                        </figure>
                        <div className='course-data'>
                            <h2>{course.courseName}</h2>
                            <br></br>
                            <p>{course.description}</p>
                            <br></br>
                            <br></br>
                            <div className='duration'>
                                <BsClockHistory className='duration-img' />
                                <p>Duration: {course.duration} hrs.</p>
                            </div>
                            <br/><br/>
                            <div className='duration'>
                                <FaUserTie className='duration-img' />
                                <p>Instructor: {instructor.name}</p>
                            </div>
                            <br/><br/>
                            <div className='duration'>
                                <IoMdPricetags className='duration-img' />
                                <p>Price: {course.price} Rs.</p>
                            </div>
                            <br/><br/>
                            <Button onClick={handleSubmit}>Subscribe Now</Button>
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

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
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

  .course-data{
    margin-top: -5rem;

    .duration{
        display: flex;
        flex-direction: rox;
        gap: 15px;
    }

    .duration-img{
        height: 2.5rem;
        width: 2.5rem;
        
    }

    h2{
        text-transform: uppercase;
    }
  }
`;

export default Subscription
