import { statsReducer } from './reducers/stats'
import { gamesReducer } from './reducers/games'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  games: gamesReducer,
  stats: statsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store