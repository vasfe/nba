import { TeamAbbreviation } from "./logoes";

export const nbaPlayerStats = [
  "MIN",
  "FGM",
  "FGA",
  "FG%",
  "3PM",
  "3PA",
  "3P%",
  "FTM",
  "FTA",
  "FT%",
  "OREB",
  "DREB",
  "REB",
  "AST",
  "STL",
  "BLK",
  "TO",
  "PF",
  "PTS",
] as const;

export type BaseStats = {
  [key in typeof nbaPlayerStats[number]]: string
};

export type Stats = BaseStats & {
  id: string
}

export type SeasonAverages = Stats & {
  playerId: string,
  season: string,
  name: string
}

export type Player = {
  firstName: string,
  lastName: string,
  height: string,
  id: string;
  position: string;
};

export type Team = {
  id: string,
  abbreviation: TeamAbbreviation,
  city: string,
  conference: string,
  division: string,
  fullName: string,
  name: string
}

export type Game = {
  id: string,
  date: string,
  homeTeam: Team,
  homeTeamScore: string
  season: string,
  visitorteam: Team,
  visitorTeamScore: string,
  period: string
  postseason: boolean
  status: string
  time: string
}

export type GameStats = Stats & {
  id: string,
  player: Player,
  team: Team,
}