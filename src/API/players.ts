import { Player, SeasonAverages } from "../types"
import { mapPlayer, mapSeasonAverages } from "./mappings"
import { APIPlayer, APISeasonAverages, ResponseBody } from "./types"

export const fetchPlayers = (search: string): Promise<Player[]> => {
    return new Promise((resolve, reject) => {
        const params = search ? `?search=${search}` : ""
        fetch(`https://www.balldontlie.io/api/v1/players${params}`).then(
            (response) => {
                if (!response.ok) {
                    reject(new Error("no response"))
                    return
                }
                response.json().then((responseBody: ResponseBody<APIPlayer[]>) => {
                    const data: Player[] = responseBody.data.map(player => mapPlayer(player))
                    resolve(data)
                })
            }
        )
    })
}

export const fetchSeasonAverages = (season: string, playerId: string): Promise<Omit<SeasonAverages, "name">[]> => {
    return new Promise((resolve, reject) => {
        const params = `?player_ids[]=${playerId}&season=${season}`
        fetch(`https://www.balldontlie.io/api/v1/season_averages${params}`).then(
            (response) => {
                if (!response.ok) {
                    reject(new Error("no response"))
                    return
                }
                response.json().then((responseBody: ResponseBody<APISeasonAverages[]>) => {
                    const data: Omit<SeasonAverages, "name">[] = responseBody.data.map(seasonAverages => mapSeasonAverages(seasonAverages))
                    resolve(data)
                })
            }
        )
    })
}