import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const Nav = () => {
    const Nav = styled.nav`
    

    .navbar-list{
        margin: 0;
        padding: 0;
        display: flex;
        gap: 4.8rem;
        align-items: center;

        li{
            margin-top: 30px;
        }

        .navbar-link{

            &: link,
            &: visited {
                display: inline-block;
                text-decoration: none;
                font-size: 1.5rem;
                font-weight: 500;
                text-transform: uppercase;                
                color: ${({theme}) => theme.colors.black};
                transition: color 0.3s linear;
            }

            &: hover,
            &:active {
                color: ${({theme}) => theme.colors.outline};
            }
        }

    }
    `;
  return (
        <Nav>
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink to="/Home" className="navbar-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Courses" className="navbar-link">All Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashboard" className="navbar-link">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="navbar-link">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
  )
}

export default Nav
