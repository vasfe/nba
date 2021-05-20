export interface IAppProps {
  title: string
}

export interface IAppState {
  searching: boolean,
  games: Game[],
  currentDate: string
}
export interface Navigation {
  navigation( direction:number) : void,
  date: string,
  disabled: boolean
}

export interface Games{
  games: Game[];
}

export interface Game {
  vTeam: Team,
  hTeam: Team,
  key: string,
  date: string
}

interface Team {
  fullName: string,
  score: string
}
