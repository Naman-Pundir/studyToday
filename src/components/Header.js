import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return(
    <MainHeader>
        <NavLink to="/Home">
          <img src='./images/logo.png'></img>
        </NavLink>
        <Nav />
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

export default Header
