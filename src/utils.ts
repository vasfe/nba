import { Player } from "./types"

export const removeUnderScore = (str: string): string => str.replace(/_/g, " ")

export const capitalise = (str: string) => str.charAt(0).toUpperCase() + removeUnderScore(str).slice(1)

export const getFullName = (player: Player) => `${player.firstName} ${player.lastName}`

export const getShortName = (player: Player) => `${player.firstName[0]}. ${player.lastName}`