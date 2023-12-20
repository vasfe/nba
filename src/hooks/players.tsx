import { useCallback, useEffect, useRef, useState } from "react"
import { fetchPlayers, fetchSeasonAverages } from "../API/players"
import { Player, SeasonAverages } from "../types"
import { getShortName } from "../utils"

export const useSeasonAverages = () => {
    const [seasonAverages, setSeasonAverages] = useState<SeasonAverages[]>([])
    const [players, setPlayers] = useState<Player[]>([])
    let playersRef = useRef<Player[]>([]);

    const lookUpPlayers = useCallback((search: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fetchPlayers(search).then(data => {
                const newPlayers: Player[] = data.filter(player => !playersRef.current?.some(p => p.id === player.id))

                setPlayers(prev => [
                    ...prev,
                    ...newPlayers
                ])
                resolve();
            }).catch((e: Error) => {
                console.error(e)
                reject(new Error("Error retrieving Player Data"))
            })
        })
    }, [])

    const loadSeasonAverages = useCallback((season: string, player: Player): Promise<void> => {
        return new Promise((resolve, reject) => {
            fetchSeasonAverages(season, player.id).then(data => {
                const [firstResult] = data;
                if (firstResult) {
                    setSeasonAverages(prev => [
                        ...prev,
                        {
                            ...firstResult,
                            name: getShortName(player)
                        }
                    ])
                    resolve()
                }
                reject(new Error(`No Record for ${player.lastName} ${season}`))
            }).catch((e: Error) => {
                console.error(e)
                reject(new Error("Error retrieving Season Average Data"))
            })
        })
    }, [])

    useEffect(() => {
        playersRef.current = players
    }, [players])

    return { seasonAverages, players, loadSeasonAverages, lookUpPlayers }
}

export const usePlayers = () => {
    const [players, setPlayers] = useState<Player[]>([])
    let playersRef = useRef<Player[]>([]);

    const lookUpPlayers = useCallback((search: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            fetchPlayers(search).then(data => {
                const newPlayers: Player[] = data.filter(player => !playersRef.current?.some(p => p.id === player.id))

                setPlayers(prev => [
                    ...prev,
                    ...newPlayers
                ])
                resolve();
            }).catch((e: Error) => {
                console.error(e)
                reject(new Error("Error retrieving Player Data"))
            })
        })
    }, [])

    useEffect(() => {
        playersRef.current = players
    }, [players])

    return { players, lookUpPlayers }
}
