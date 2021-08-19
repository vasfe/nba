import React from 'react';
import { dateOutPutFormat } from '../data';
import styled from 'styled-components';

const Nav = styled.div`
  width: fit-content;
  margin: auto;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  font-size: calc(11px + 1vmin);
  vertical-align: middle;
  margin: 10px;
`;

const NavButton = styled.button`
  margin: 10px;
  font-size: calc(18px + 1vmin);
  font-weight: bold;
  background-color: #2d3038;
  color: white;
  border-radius: 20%;
`;

const DateNav = (props) => {
  return (
    <Nav>
      <NavButton onClick={() => props.navigation(-1)} disabled={props.disabled}>&#10594;</NavButton>
      <Date>{dateOutPutFormat(props.date)}</Date>
      <NavButton onClick={() => props.navigation(1)} disabled={props.disabled}>&#10596;</NavButton>
    </Nav>
  )
}
export default DateNav;