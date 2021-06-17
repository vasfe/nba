import { symbolName } from "typescript";
import { formatTime } from "../data";
import { ActiveGame, Game } from "../interface";

export async function request(method: string, url: string, params = "") {
    try {
        let response = await fetch(url + params, {
            method: method,
        })
        return response.json()
    } catch (error: any) {
        console.log(`Issue with fetch: ${error.message}`);
    }
}

export async function getDaysGames(date: string): Promise<Game[]> {
    const opt = await request("GET", "https://data.nba.net/10s/prod/v1/today.json")
    const season = opt.seasonScheduleYear
    const teams = await request("GET", `https://data.nba.net/10s/prod/v2/${season}/teams.json`)
    const daysGames = await request("GET", `https://data.nba.net/10s/prod/v1/${date}/scoreboard.json`)
    let todaysGames: Game[] = []
    daysGames.games.forEach((game: any) => {
        todaysGames.push(
            {
                hTeam: {
                    fullName: teams.league.standard.filter((team: any) => team.teamId === game.hTeam.teamId)[0].fullName,
                    score: game.hTeam.score,
                    seriesWin: game.playoffs.hTeam.seriesWin//change after playoffs
                },
                vTeam: {
                    fullName: teams.league.standard.filter((team: any) => team.teamId === game.vTeam.teamId)[0].fullName,
                    score: game.vTeam.score,
                    seriesWin: game.playoffs.vTeam.seriesWin//change after playoffs

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

export async function activeGameDetails(date: string, gameId: string): Promise<ActiveGame> {
    const game = (await request("GET", `https://data.nba.net/10s/prod/v1/${date}/${gameId}_boxscore.json`)).basicGameData;
    return (
        {
            hTeamScore: game.hTeam.score,
            vTeamScore:game.vTeam.score,
            currentPeriod: game.period.current,
            isEndOfPeriod: game.period.isHalftime,
            isHalftime: game.period.isEndOfPeriod,
            clock: game.clock,
        }
    )
}