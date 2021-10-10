import { SET_PLAYERS, SET_STATS, SET_SEARCHING, setPlayers, setStats, setSearching } from "../actions/stats";
import { getPlayers, getPlayerStats } from "../../API";

const initialState = {
  stats: [],
  players: [],
  searching: false
};

export function statsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYERS:
      return { ...state, players: action.payload }
    case SET_STATS:
      return { ...state, stats: [action.payload, ...state.stats], searching: false }
    case SET_SEARCHING:
      return { ...state, searching: action.payload }
    default:
      return state
  }
};

export const loadPlayers = () => async (dispatch, getState) => {
  const players = await getPlayers()
  dispatch(setPlayers(players))
}

export const loadStats = (player) => async (dispatch, getState) => {
  dispatch(setSearching(true))
  const stats = await getPlayerStats(player)
  dispatch(setStats(stats))
}