import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PreLoginNav from './Preloginnav';

const Preloginheader = () => {
    return(
        <MainHeader>
            <NavLink to="/">
              <img src='./images/logo.png'></img>
            </NavLink>
            <PreLoginNav />
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

export default Preloginheader
