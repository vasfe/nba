import React from 'react';
import './App.css';
import { IAppState, IAppProps } from './interface';
import { getDaysGames } from './API'
import { getDate } from './data';
import Card from './components/Cards/Card'
import Nav from './components/Nav/Nav'

import Loader from 'react-loader-spinner';

class App extends React.Component<IAppProps, IAppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      searching: false,
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
        <div className="spinner" >
          <Loader type="Circles" color="white" height={80} width={80} />
        </div>
      )
    }
    else {
      return (
        <div className="cards-container">
          {this.state.games.map(game =>
            <Card
              vTeam={game.vTeam}
              hTeam={game.hTeam}
              key={game.key}
              date={game.date}
            />
          )}
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">
          {this.props.title}
        </h1>
        <Nav
        navigation={this.changeView}
        date={this.state.currentDate}
        disabled={this.state.searching}
        />
        {this.games()}
      </div>
    );
  }
}
export default App;