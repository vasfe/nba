export const SET_DATE = "SET_DATE"
export const SET_GAMES = "SET_GAMES"
export const SET_LOADING = "SET_LOADING"

export function setLoading(payload) {
    return { type: "SET_LOADING", payload }
};

export function setDate(payload) {
    return { type: "SET_DATE", payload }
};

export function setGames(payload) {
    return { type: "SET_GAMES", payload }
};