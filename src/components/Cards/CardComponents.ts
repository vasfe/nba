import styled from 'styled-components';

export const StyledCardsContainer = styled.div`
  text-align: center;
  background-color: #3d424d;
  min-height: 100vh;
  font-size: calc(8px + 2vmin);
  color: white;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: center;
`
export const StartTime = styled.div`
margin:0;
`
export const GameDetails = styled.div`
margin:0;
`
export const StyledCard = styled.div`
  margin: 10px;
  background-color: #2d3038;
  padding: 10px 0;
  width: 100%;
  position: relative;
  line-height: calc(20px + 2vmin);
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #0e1529;
  font-size: calc(8px + 2vmin);
`;

export const StyledRow = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTeam = styled.div`
  text-align: right;
  width: 46%;
`;

export const AwayTeam = styled.div`
text-align: left;
width: 46%;
`;

export const Separator = styled.div`
  width: 4%;
  font-weight: bold;
  font-size: calc(4px + 2vmin);
`;