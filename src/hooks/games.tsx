import { useCallback, useState } from "react"
import { fetchGameStats, fetchGamesPerDate } from "../API/games"
import { Game, GameStats } from "../types"

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([])

    const findGames = useCallback((date: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fetchGamesPerDate(date).then((data: Game[]) => {
                setGames(data)
                resolve()
            }).catch((e: Error) => {
                console.error(e)
                reject(new Error("Error retrieving Game Data"))
            })
        })
    }, [])

    return { games, findGames }
}

export const useGameDetails = () => {
    const [gameStats, setGameStats] = useState<GameStats[]>([])

    const loadGameStats = useCallback((gameId: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fetchGameStats(gameId).then((data) => {
                setGameStats(data)
                resolve()
            }).catch((e: Error) => {
                console.error(e)
                reject(new Error("Error retrieving Game Stats Data"))
            })
        })
    }, [])

    // useEffect(() => {
    //     loadGameStats(game.id)
    // }, [game.id, loadGameStats]);

    return { gameStats, loadGameStats }
}
