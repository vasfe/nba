import React from 'react';
import './App.css';
import { IAppState, Game, IAppProps } from './interface';
import { getDaysGames } from './API'
import { getDate, formatDate } from './data';
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
  showGamesView() {
    if (this.state.searching) {
      return (
        <div>
          <Loader type="Circles" color="white" height={80} width={80} />
        </div>
      )
    }
    else {
      return (
        <div >
          {this.state.games.map(game =>
            <Card
              vTeam={game.vTeam}
              hTeam={game.hTeam}
              key={game.key}
            />
          )}
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <h1>
          {this.props.title}
        </h1>
        <div className="inline">
          <button onClick={() => this.changeView(-1)} className="dateBtn" disabled={this.state.searching}>&#8678;</button>
          <p className="date">{formatDate(this.state.currentDate)}</p>
          <button onClick={() => this.changeView(1)} className="dateBtn" disabled={this.state.searching}>&#8680;</button></div>
        <div className="centered">
        </div>
        {this.showGamesView()}
      </div>
    );
  }
}

function Card(props: Game) {
  return (
    <div className="card">
      {props.hTeam.fullName} <span>vs</span> {props.vTeam.fullName}<br></br>
      {props.hTeam.score} - {props.vTeam.score}
    </div>
  )
}
export default App;