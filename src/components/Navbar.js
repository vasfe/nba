import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #26282f;
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  letter-spacing: .6px;
  color: white;
  font-weight: 800;
  text-decoration: none;
  padding: 15px 25px;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid white ;
  } 
`;

const Navbar = () => {
    return (
        <Nav >
            <NavLink exact to={'/'} activeClassName="active">
                {"Games"}
            </NavLink>
            <NavLink exact to={'stats'} activeClassName="active">
                {"Stats"}
            </NavLink>
        </Nav>
    );
}

export default Navbar;