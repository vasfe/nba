import { SET_DATE, SET_GAMES, SET_LOADING, setGames, setLoading } from "../actions/games";
import { getGamesForDay } from "../../API";

const initialState = {
  date: new Date(),
  games: [],
  loading: false
};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload }
    case SET_GAMES:
      return { ...state, games: action.payload, loading: false }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
};

export const loadGames = () => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const games = await getGamesForDay(getState().games.date.toISOString().split('T')[0].replace(/-/g, ""))
  dispatch(setGames(games))
}