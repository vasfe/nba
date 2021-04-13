import { Game } from "../interface";

export async function request(method: string, url: string, params = "") {
    try {
        let response = await fetch(url + params, {
            method: method,
        })
        return response.json()
    } catch (error) {
        console.error(error);
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
    }
}

export async function getDaysGames(date: string): Promise<Game[]> {
    const opt = await request("GET", "http://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear 
    // console.log(opt)
    const teams = await request("GET", `http://data.nba.net/10s/prod/v2/${season}/teams.json`)

    // console.log(teams)
    const daysGames = await request("GET", `http://data.nba.net/10s/prod/v1/${date}/scoreboard.json`)
    // console.log(daysGames)
    let todaysGames: Game[]=[]

    const players = await request("GET", `http://data.nba.net/10s/prod/v1/2020/players.json`)
    let playerId = ""
    players.league.standard.forEach((player: any) => {
        if (player.firstName=="Stephen"){
            playerId=player.personId
        }
    })
    console.log(playerId)
    const player = await request("GET", `http://data.nba.net/10s/prod/v1/2020/players/${playerId}_profile.json`)

    console.log(player)
    daysGames.games.forEach((game: any) => {
        const hTeamFullname = teams.league.standard.filter((team: any) => team.teamId === game.hTeam.teamId)[0].fullName
        const vTeamFullname = teams.league.standard.filter((team: any) => team.teamId === game.vTeam.teamId)[0].fullName
        const hTeamScore = game.hTeam.score
        const vTeamScore = game.vTeam.score
        const gameId = game.gameId
        todaysGames.push({hTeam: {fullName:hTeamFullname, score: hTeamScore}, vTeam: {fullName: vTeamFullname, score: vTeamScore}, key:gameId})
    })
    return todaysGames
}