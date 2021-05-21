import styled from 'styled-components';

export const Nav = styled.div`
  width: fit-content;
  margin: auto;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.p`
  font-size: calc(4px + 2vmin);
  vertical-align: middle;
  margin: 10px;
`;

export const NavButton = styled.button`
  margin: 10px;
  font-size: calc(10px + 2vmin);
  font-weight: bold;
  background-color: #2d3038;
  color: white;
  border-radius: 20%;
`;