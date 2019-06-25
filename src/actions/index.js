import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST,
  FAVORITES_LIST,
  SET_FAVORITES_LIST_FROM_LOCAL,
  SET_CURRENT_TRAINER
} from "./actionTypes";

//================= LOGIN ACTIONS =================


//================= POKEMON ACTIONS =================

export const currentPokeSearch = searchTerm => (dispatch, getState) => {
  dispatch({ type: CURRENT_SEARCHED_POKEMON, payload: searchTerm})
}

export const setCurrentPokemonData = data => (dispatch, getState) => {
  dispatch({ type: CURRENT_POKEMON_DATA, payload: data})
}