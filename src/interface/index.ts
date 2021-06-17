export interface IAppProps {
  title: string
}

export interface GamesProps {
  title: string
}

export interface GamesPageStates {
  searching: boolean,
  games: Game[],
  currentDate: string
}

export interface Navigation {
  navigation(direction: number): void,
  date: string,
  disabled: boolean
}

export interface Games {
  games: Game[];
}

export interface Game {
  vTeam: Team,
  hTeam: Team,
  key: string,
  gameId: string,
  date: string,
  time: string
  startTimeTBD: boolean,
  arena: string,
  isEnded: boolean,
  isActiveGame: boolean,
}

interface Team {
  fullName?: string,
  score: string,
  seriesWin: string

}

export interface ActiveGame {
  vTeamScore: string,
  hTeamScore: string,
  currentPeriod: string,
  isEndOfPeriod: boolean,
  isHalftime: boolean,
  clock: string
}