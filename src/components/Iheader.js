import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Inav from './Inav';

const Iheader = () => {
  return(
    <MainHeader>
        <NavLink to="/Home">
          <img src='./images/logo.png'></img>
        </NavLink>
        <Inav />
    </MainHeader>
  )
    
}

const MainHeader = styled.header`
    padding: 1.25rem;
    height: 10rem;
    background-color: {({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    img{
      height: 65px;
      width: 300px;
    }

`;

export default Iheader
