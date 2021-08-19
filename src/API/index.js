import { formatTime } from "../data";

export async function request(method, url, params = "") {
    try {
        let response = await fetch(url + params, {
            method: method
        })
        return response.json()
    } catch (error) {
        console.log(`Issue with fetch: ${error.message}`);
    }
}

export async function getData(date) {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear
    const teams = await request("GET", `https://data.nba.net/10s/prod/v2/${season}/teams.json`)
    const daysGames = await request("GET", `https://data.nba.net/10s/prod/v1/${date}/scoreboard.json`)
    let todaysGames = []
    daysGames.games.forEach((game) => {
        todaysGames.push(
            {
                hTeam: {
                    fullName: teams.league.standard.filter((team) => team.teamId === game.hTeam.teamId)[0].fullName,
                    score: game.hTeam.score,
                    seriesWin: game.hTeam.seriesWin//change before playoffs
                },
                vTeam: {
                    fullName: teams.league.standard.filter((team) => team.teamId === game.vTeam.teamId)[0].fullName,
                    score: game.vTeam.score,
                    seriesWin: game.vTeam.seriesWin//change before playoffs
                },
                date: game.homeStartDate,
                time: formatTime(game.startTimeUTC),
                key: game.gameId,
                gameId: game.gameId,
                startTimeTBD: game.isStartTimeTBD,
                arena: `${game.arena.name}, ${game.arena.city} `,
                isActiveGame: game.isGameActivated,
                isEnded: ((game.endTimeUTC==undefined)? false: true)

            })
    })
    return todaysGames
}
