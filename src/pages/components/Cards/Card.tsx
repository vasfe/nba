import React from 'react';
import { activeGameDetails } from '../../../API';
import { Game, ActiveGame } from '../../../interface';
import { StyledCard, StyledRow, LeftText, RightText, Separator, ActiveGameDetails, CenteredText, Header, GameDetails, FurtherGameDetails } from './CardComponents';

class Card extends React.Component<Game, ActiveGame>{
  constructor(props: Game) {
    super(props);
    if (props.isActiveGame) {
      this.state = {
        currentPeriod: "",
        vTeamScore: props.vTeam.score,
        hTeamScore: props.hTeam.score,
        clock: "",
        isHalftime: false,
        isEndOfPeriod: false
      };
      this.SetActiveGame()
    }
  }
  SetActiveGame() {
    console.log("subscription set")
    setInterval(() => activeGameDetails(this.props.date, this.props.gameId).then(gameUpdate => {
      console.log("updating score for " + this.props.hTeam.fullName)
      this.setState({ ...gameUpdate })
    }), 5000)
  }
  gameScore() {
    return (
      <StyledRow>
        <LeftText>
          <Header>{this.props.hTeam.score}</Header>
        </LeftText>
        <Separator>-</Separator>
        <RightText>
          <Header>{this.props.vTeam.score}</Header>
        </RightText>
      </StyledRow>
    );
  }
  activeGameDetails() {
    return (
      <ActiveGameDetails>{`Q${this.state.currentPeriod} - ${this.state.clock}`}</ActiveGameDetails>
    );
  }
  endedGameDetails() {
    return (
      <StyledRow>
        <LeftText>
          {/* <FurtherGameDetails>{this.props.hTeam.seriesWin}</FurtherGameDetails> */}
        </LeftText>
        <Separator>-</Separator>
        <RightText>
          {/* <FurtherGameDetails>{this.props.vTeam.seriesWin}</FurtherGameDetails> */}
        </RightText>
      </StyledRow>
    )
  }
  upcomingGameDetails() {
    return (
      <CenteredText>
        <FurtherGameDetails>{this.props.arena}</FurtherGameDetails>
      </CenteredText>
    )
  }
  gameStartTime() {
    return (
      <CenteredText>
        <GameDetails>{ ((!this.props.startTimeTBD) ? this.props.time : 'TBD')}</GameDetails>
      </CenteredText>
    );
  }
  gameDetails() {
    return ((this.props.isEnded) ? this.endedGameDetails() : this.upcomingGameDetails())
  }
  render() {
    return (
      <StyledCard>
        <StyledRow>
          <LeftText>
            <Header>{this.props.hTeam.fullName}</Header>
          </LeftText>
          <Separator>vs</Separator>
          <RightText>
            <Header>{this.props.vTeam.fullName}</Header>
          </RightText>
        </StyledRow>
        {((this.props.isActiveGame || this.props.isEnded) ? this.gameScore() : this.gameStartTime())}
        {((this.props.isActiveGame) ? this.activeGameDetails() : this.gameDetails())}
      </StyledCard>
    )
  }
}
export default Card;




// gameDetails() {
//   // if (isCollapsed) {
//   return (
//     <>
//       {/* <StartTime>{startTime}</StartTime> */}

//       {((this.props.isEnded) ? this.endedGameDetails() : this.gameDetails())}

//       {this.endedGameDetails()}
//       {/* <GameDetails>
//         <p>{props.arena}</p>

//       </GameDetails> */}
//       {/* <CollapseButton
//         onClick={() => toggleCollapsed(false)}>
//         &#10224;
//       </CollapseButton> */}
//     </>

//   )
// }
// // else {
// //   return (
// //       <CollapseButton
// //         onClick={() => toggleCollapsed(true)}>
// //         &#10225;
// //       </CollapseButton>
// //   );
// // }
// // }