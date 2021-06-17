import React from 'react';
import { formatDate } from '../../../data';
import { Navigation } from '../../../interface';
import { Nav, NavButton, Date } from './NavComponents';

const DateNav = (props: Navigation) => {
  return (
    <Nav>
      <NavButton onClick={() => props.navigation(-1)} disabled={props.disabled}>&#10594;</NavButton>
      <Date>{formatDate(props.date)}</Date>
      <NavButton onClick={() => props.navigation(1)} disabled={props.disabled}>&#10596;</NavButton>
    </Nav>
  )
}
export default DateNav;