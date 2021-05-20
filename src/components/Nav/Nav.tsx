import React from 'react';
import { formatDate } from '../../data';
import { Navigation } from '../../interface';
import { Nav, NavButton, Date } from './NavComponents';

const DateNav = (props: Navigation) => {
  return (
    <Nav>
    <NavButton onClick={() => props.navigation(-1)} disabled={props.disabled}>&#8678;</NavButton>
    <Date className="date">{formatDate(props.date)}</Date>
    <NavButton onClick={() => props.navigation(1)} disabled={props.disabled}>&#8680;</NavButton>
  </Nav>
  )
}
export default DateNav;