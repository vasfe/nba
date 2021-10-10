import React from 'react';
import { StyledCard, Row, LeftText, RightText, Separator, Header, FurtherDetails } from './StyledComponents';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const GameDetails = styled.div`
  font-size: calc(14px + 1vmin);
  line-height: calc(25px + 1vmin);
`;

const ActiveGameDetails = styled.div`
  background-color: #444853;
`;

const Card = (props) => {
  let gameHeader =
    <Row>
      <LeftText>
        <Header>{props.hTeam.fullName}</Header>
      </LeftText>
      <Separator>vs</Separator>
      <RightText>
        <Header>{props.vTeam.fullName}</Header>
      </RightText>
    </Row>

  let gameDetails = (props.isEnded || props.isActiveGame) ?
    <div>
      <Row>
        <LeftText>
          <Header>{props.hTeam.score}</Header>
        </LeftText>
        <Separator>-</Separator>
        <RightText>
          <Header>{props.vTeam.score}</Header>
        </RightText>
      </Row>
      <Row>
        <LeftText>
          <FurtherDetails>{props.hTeam.seriesWin}</FurtherDetails>
        </LeftText>
        <Separator>-</Separator>
        <RightText>
          <FurtherDetails>{props.vTeam.seriesWin}</FurtherDetails>
        </RightText>
      </Row>
    </div>
    :
    <div>
      <GameDetails>{((!props.startTimeTBD) ? props.time : 'TBD')}</GameDetails>
      <FurtherDetails>{props.arena}</FurtherDetails>
    </div>

  return (
    <LazyLoad once>
      <StyledCard>
        {gameHeader}
        {gameDetails}
        {props.isActiveGame && props.period && props.clock &&
          <ActiveGameDetails>{`${props.period} - ${props.clock}`}</ActiveGameDetails>
        }
      </StyledCard>
    </LazyLoad>
  );
}

export default Card;