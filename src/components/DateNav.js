import React from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nav = styled.div`
  display: flex; 
  align-items: center;
`;

const Date = styled(DatePicker)`
  cursor: pointer;
  background: transparent;
  color: white;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  font-size: 20px;
`;

const NavButton = styled.button`
  margin: 10px;
  font-size: 25px;
  background-color: #2d3038;
  color: white;
  border-radius: 20%;
  cursor: pointer;
`;

const DateNav = (props) => {
  return (
    <Nav>
      <NavButton
        onClick={() => props.onArrowsClick(-1)}
        disabled={props.disabled}
      >
        &#10594;
      </NavButton>
      <Date
        onChange={props.onChange}
        selected={props.date}
        clearIcon={null}
        dateFormat="dd/MM/yyyy"
      />
      <NavButton
        onClick={() => props.onArrowsClick(1)}
        disabled={props.disabled}
      >
        &#10596;
      </NavButton>
    </Nav>
  )
}
export default DateNav;