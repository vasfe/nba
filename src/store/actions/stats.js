export const SET_STATS = "SET_STATS"
export const SET_PLAYERS = "SET_PLAYERS"
export const SET_SEARCHING = "SET_SEARCHING"

export function setSearching(payload) {
    return { type: "SET_SEARCHING", payload }
};

export function setPlayers(payload) {
    return { type: "SET_PLAYERS", payload }
};

export function setStats(payload) {
    return { type: "SET_STATS", payload }
};