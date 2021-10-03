import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #2d3038;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #0e1529;
  margin: 5px 0;
`;

const StyledRow = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

const LeftText = styled.div`
  text-align: right;
  width: 47%;
`;

const RightText = styled.div`
  text-align: left;
  width: 47%;
`;

const Separator = styled.div`
  width: 4%;
  text-align: center;
  font-weight: 800;
  font-size: calc(3px + 2vmin);
`;

const CenteredText = styled.div`
  text-align: center;
  margin: 0;
`;

const Header = styled.div`
  font-size: calc(16px + 1vmin);
  text-shadow: 2px 2px #0e1529;
  line-height: calc(30px + 1vmin);
`;

const FurtherGameDetails = styled.div`
  font-size: calc(10px + 1vmin);
  line-height: calc(20px + 1vmin);
`;

const GameDetails = styled.div`
  font-size: calc(14px + 1vmin);
  line-height: calc(25px + 1vmin);
`;

const ActiveGameDetails = styled.div`
  background-color: #444853;
  text-align: center;
  font-size: calc(14px + 1vmin);
`;
const Card = (props) => {
    let gameHeader =
        <StyledRow>
            <LeftText>
                <Header>{props.hTeam.fullName}</Header>
            </LeftText>
            <Separator>vs</Separator>
            <RightText>
                <Header>{props.vTeam.fullName}</Header>
            </RightText>
        </StyledRow>

    let gameDetails = (props.isEnded || props.isActiveGame) ?
    <>
        <StyledRow>
            <LeftText>
                <Header>{props.hTeam.score}</Header>
            </LeftText>
            <Separator>-</Separator>
            <RightText>
                <Header>{props.vTeam.score}</Header>
            </RightText>
        </StyledRow>

        <StyledRow>
            <LeftText>
                <FurtherGameDetails>{props.hTeam.seriesWin}</FurtherGameDetails>
            </LeftText>
            <Separator>-</Separator>
            <RightText>
                <FurtherGameDetails>{props.vTeam.seriesWin}</FurtherGameDetails>
            </RightText>
        </StyledRow>
        </>
        :
        <>
        <CenteredText>
            <GameDetails>{((!props.startTimeTBD) ? props.time : 'TBD')}</GameDetails>
        </CenteredText>
        <CenteredText>
            <FurtherGameDetails>{props.arena}</FurtherGameDetails>
        </CenteredText>
        </>

    let activeGameDetails;

    if (props.isActiveGame){
        <ActiveGameDetails>{`Q${props.currentPeriod} - ${props.clock}`}</ActiveGameDetails>
    }

    return (
            <StyledCard>
                {gameHeader}
                {gameDetails}
                {activeGameDetails}
            </StyledCard>
    );
}

export default Card;