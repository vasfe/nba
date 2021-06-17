import React from 'react';
import { getDaysGames } from '../API'
import { getDate } from '../data';
import Card from './components/Cards/Card'
import Nav from './components/Nav/Nav'
import { GamesProps, GamesPageStates } from '../interface';
import { GamesContainer, Page, PageTitle, Spinner, Message } from './GamesComponents';

class Games extends React.Component<GamesProps, GamesPageStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      searching: true,
      games: [],
      currentDate: getDate(0)
    };
    this.changeView = this.changeView.bind(this);
    this.getGames()
  }
  getGames() {
    this.setState({
      searching: true
    })
    getDaysGames(this.state.currentDate).then(daysGames => {
      this.setState({
        games: daysGames,
        searching: false
      })
    })
  }
  changeView(direction: number) {
    this.setState({
      currentDate: getDate(direction, this.state.currentDate)
    },
      this.getGames
    )
  }
  games() {
    if (this.state.searching) {
      return (
        <Spinner type="Circles" color="white" height={80} width={80} />
      )
    }
    else {
      if (this.state.games.length != 0) {
        return (
          <GamesContainer>
            {this.state.games.map(game =>
              <Card
              {...game}
              />
            )}
          </GamesContainer>
        )
      }
      else {
        return (
          <Message> No Game Found :(</Message>
        )
      }
    }
  }
  render() {
    return (
      <Page>
        <PageTitle>
          {this.props.title}
        </PageTitle>
        <Nav
          navigation={this.changeView}
          date={this.state.currentDate}
          disabled={this.state.searching}
        />
        {this.games()}
      </Page>
    );
  }
}

export default Games;