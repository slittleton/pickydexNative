import { combineReducers } from 'redux';
import trainerReducer from './trainerReducer';
import pokeReducer from './pokeReducer';

export default combineReducers({
  trainerReducer,
  pokeReducer
})

