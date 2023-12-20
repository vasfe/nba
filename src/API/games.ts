import { Game, GameStats } from "../types"
import { mapGameStats, mapGames } from "./mappings"
import { APIGame, APIGameStats, ResponseBody } from "./types"

export const fetchGamesPerDate = (date: string): Promise<Game[]> => {
    const params = `?dates[]=${date}`
    return new Promise((resolve, reject) => {
        fetch(`https://www.balldontlie.io/api/v1/games${params}`).then(
            (response) => {
                if (!response.ok) {
                    reject(new Error("no response"))
                }
                response.json().then((responseBody: ResponseBody<APIGame[]>) => {
                    const data: Game[] = responseBody.data.map(game => mapGames(game))
                    resolve(data)
                })
            }
        )
    })
}

export const fetchGameStats = (gameId: string): Promise<GameStats[]> => {
    const params = `?per_page=50&game_ids[]=${gameId}`
    return new Promise((resolve, reject) => {
        fetch(`https://www.balldontlie.io/api/v1/stats${params}`).then(
            (response) => {
                if (!response.ok) {
                    reject(new Error("no response"))
                }
                response.json().then((responseBody: ResponseBody<APIGameStats[]>) => {
                    // API sometimes gives stats with no player filter those out 
                    const data: GameStats[] = responseBody.data.filter(game => game.player).map(gameStats => mapGameStats(gameStats))
                    resolve(data)
                })
            }
        )
    })
}