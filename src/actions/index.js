import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST,
  FAVORITES_LIST,
  SET_FAVORITES_LIST_FROM_LOCAL,
  SET_CURRENT_TRAINER,
  UPDATE_POKEMON_LIST,
  UPDATE_FAVORITES_LIST
} from "./actionTypes";

//================= LOGIN ACTIONS =================


//================= POKEMON ACTIONS =================

export const currentPokeSearch = searchTerm => (dispatch, getState) => {
  dispatch({ type: CURRENT_SEARCHED_POKEMON, payload: searchTerm})
}

export const setCurrentPokemonData = data => (dispatch, getState) => {
  dispatch({ type: CURRENT_POKEMON_DATA, payload: data})
}

export const addPokemonToList = (currentPokemonData,pokemonList) => (dispatch, getState) => {
  let newList = pokemonList.map(x => x);
  newList.unshift(currentPokemonData.species);
  
  dispatch({type: UPDATE_POKEMON_LIST, payload: newList })
}

export const delPokemonFromList = (currentPokemonData, pokemonList, favoritesList) => (dispatch, getState) => {

  let newList = pokemonList.filter(item => item !== currentPokemonData.species);
  
  if(favoritesList.includes(currentPokemonData.species)){
    let newFavs = favoritesList.filter(item => item !== currentPokemonData.species)
    dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})
  }
  
  dispatch({type: UPDATE_POKEMON_LIST, payload:  newList })
}

export const favoritePokemon = (favoritesList, currentPokemonData) => (dispatch,getState) => {
  let newFavs = favoritesList.map(x => x);
  newFavs.unshift(currentPokemonData.species);

  dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})

}
export const unfavoritePokemon = (favoritesList, currentPokemonData) => (dispatch,getState) => {
  let newFavs = favoritesList.filter(item => item !== currentPokemonData.species)

  dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})
}
