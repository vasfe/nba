import { formatTime } from "../data";
import { Game } from "../interface";

export async function request(method: string, url: string, params = "") {
    try {
        let response = await fetch(url + params, {
            method: method,
        })
        return response.json()
    } catch (error) {
        console.log(`Issue with fetch: ${error.message}`);
    }
}

export async function getDaysGames(date: string): Promise<Game[]> {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear 
    const teams = await request("GET", `https://data.nba.net/10s/prod/v2/${season}/teams.json`)
    const daysGames = await request("GET", `https://data.nba.net/10s/prod/v1/${date}/scoreboard.json`)
    let todaysGames: Game[]=[]
    daysGames.games.forEach((game: any) => {
        const hTeamFullname = teams.league.standard.filter((team: any) => team.teamId === game.hTeam.teamId)[0].fullName
        const vTeamFullname = teams.league.standard.filter((team: any) => team.teamId === game.vTeam.teamId)[0].fullName
        const hTeamScore = game.hTeam.score
        const vTeamScore = game.vTeam.score
        const gameId = game.gameId
        const time = formatTime(game.startTimeUTC);
        todaysGames.push({hTeam: {fullName:hTeamFullname, score: hTeamScore}, vTeam: {fullName: vTeamFullname, score: vTeamScore}, date:time, key:gameId})
    })
    return todaysGames
}