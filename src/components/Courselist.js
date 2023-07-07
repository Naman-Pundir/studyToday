import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Courselist = () => {

    const [courses, setCourses] = useState([]);
    const history = useNavigate();

    const fetchData = () =>{
        return axios.get("http://localhost:8000/Courses").then((res) => setCourses(res.data));
    }

    const clicked = (x) =>{
        history("/Subscribe" , {state: {id: x}});
    }    
    

    useEffect(() => {
        fetchData();
    }, []);

    console.log(courses);

  return (
    <Wrapper>
        
        <div className='container'>
        <h2>Available Courses</h2>
            <div className='grid grid-three-column'>
                {
                    courses.map((courseObj,index) => {
                        return(
                            <div className='services-1' onClick={() => clicked(courseObj._id)}>
                                <h2>{courseObj.courseName}</h2>
                                <br></br>
                                <p>{courseObj.description}</p>
                                <br></br>
                                <p>Duration : {courseObj.duration} hrs</p>
                                <br></br>
                                <p>Fee : {courseObj.price} Rs.</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .grid{
        gap: 4.8rem;
    }

    .container{
        margin-top:5rem;
    }

    .services-1 {
    padding: 20px;
    width: auto;
    height: 30rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background-color: lightgray;
    text-align: left;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-1:hover{
    background-color: ${({theme}) => theme.colors.border};
    
    p{
        color: white;
    }

  }
`;

export default Courselist
