import { TeamAbbreviation } from "../logoes"
import { Game, GameStats, Player, SeasonAverages, Stats, Team } from "../types"
import { APIGame, APIGameStats, APIPlayer, APISeasonAverages, APIStats, APITeam } from "./types"

export const mapStats = (apiStats: APIStats): Stats => ({
    "id": apiStats.id.toString(),
    "PTS": apiStats.pts.toString(),
    "REB": apiStats.reb.toString(),
    "AST": apiStats.ast.toString(),
    "STL": apiStats.stl.toString(),
    "BLK": apiStats.blk.toString(),
    "TO": apiStats.turnover.toString(),
    "MIN": apiStats.min.toString(),
    "FGM": apiStats.fgm.toString(),
    "FGA": apiStats.fga.toString(),
    "3PM": apiStats.fg3m.toString(),
    "3PA": apiStats.fg3a.toString(),
    "FTM": apiStats.ftm.toString(),
    "FTA": apiStats.fta.toString(),
    "OREB": apiStats.oreb.toString(),
    "DREB": apiStats.dreb.toString(),
    "PF": apiStats.pf.toString(),
    "FG%": (apiStats.fg_pct * 100).toFixed(1).replace(".0",""),
    "3P%": (apiStats.fg3_pct * 100).toFixed(1).replace(".0",""),
    "FT%": (apiStats.ft_pct * 100).toFixed(1).replace(".0","")
})
export const mapGames = (apiGame: APIGame): Game => ({
    id: apiGame.id,
    date: apiGame.date,
    season: apiGame.season,
    period: apiGame.period,
    postseason: apiGame.postseason,
    status: apiGame.status,
    time: apiGame.time,
    homeTeam: mapTeam(apiGame.home_team),
    visitorteam: mapTeam(apiGame.visitor_team),
    visitorTeamScore: apiGame.visitor_team_score,
    homeTeamScore: apiGame.home_team_score,
})

export const mapTeam = (apiTeam: APITeam): Team => ({
    id: apiTeam.id,
    abbreviation: apiTeam.abbreviation as TeamAbbreviation,
    city: apiTeam.city,
    conference: apiTeam.conference,
    division: apiTeam.division,
    name: apiTeam.name,
    fullName: apiTeam.full_name
})

export const mapPlayer = (apiPlayer: APIPlayer): Player => {
    return ({
        firstName: apiPlayer.first_name,
        lastName: apiPlayer.last_name,
        height: `${apiPlayer.height_feet}foot ${apiPlayer.height_inches}inches`,
        id: apiPlayer.id,
        position: apiPlayer.position
    })
}

export const mapGameStats = (apiGameStats: APIGameStats): GameStats => {
    const { player, game, team, ...stats } = apiGameStats
    return {
        ...mapStats(stats),
        player: mapPlayer(player),
        team: mapTeam(team)
    }
}

export const mapSeasonAverages = (apiSeasonAverages: APISeasonAverages): Omit<SeasonAverages, "name"> => {
    const { player_id, season, ...stats } = apiSeasonAverages
    return {
        ...mapStats({
            ...stats,
            id: `${player_id} ${season}`
        }),
        season,
        playerId: player_id
    }
}