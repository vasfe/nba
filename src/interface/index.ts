export interface IAppProps {
  title: string
}

export interface IAppState {
  searching: boolean,
  games: Game[],
  currentDate: string
}

export interface Game {
  vTeam: Team,
  hTeam: Team,
  key: string
}

interface Team {
  fullName: string,
  score: number
}
