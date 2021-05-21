import React from 'react';
import { Game } from '../../../interface';
import { StyledCard, StyledRow, HomeTeam, AwayTeam, Separator, GameDetails, StartTime } from './CardComponents';

const Card = (props: Game) => {
  function gameDetails() {
    if (props.hTeam.score == "") {
      return (
        <GameDetails>
          <StartTime>{props.date}</StartTime>
        </GameDetails>
      )
    }
    else {
      return (
        <StyledRow>
          <HomeTeam>{props.hTeam.score}</HomeTeam>
          <Separator>-</Separator>
          <AwayTeam>{props.vTeam.score}</AwayTeam>
        </StyledRow>
      );
    }
  }
  return (
    <StyledCard>
      <StyledRow>
        <HomeTeam>{props.hTeam.fullName}</HomeTeam>
        <Separator>vs</Separator>
        <AwayTeam>{props.vTeam.fullName}</AwayTeam>
      </StyledRow>
      {gameDetails()}
    </StyledCard>
  )
}
export default Card;