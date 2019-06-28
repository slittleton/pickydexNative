import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  SET_CURRENT_TRAINER,
  UPDATE_POKEMON_LIST,
  UPDATE_FAVORITES_LIST,
} from "./actionTypes";
import AsyncStorage from '@react-native-community/async-storage';


//================= LOGIN ACTIONS =================
export const setTrainerName = name => (dispatch, getState) => {
  dispatch({ type: SET_CURRENT_TRAINER, payload: name})
}

//===================================================
//================= POKEMON ACTIONS =================
//===================================================

export const currentPokeSearch = searchTerm => (dispatch, getState) => {
  dispatch({ type: CURRENT_SEARCHED_POKEMON, payload: searchTerm})
}

//---------------- PUT DATA IN REDUX STORE ----------------
export const setCurrentPokemonData = data => (dispatch, getState) => {
  dispatch({ type: CURRENT_POKEMON_DATA, payload: data})
}
export const setPokemonList = pokemonList => (dispatch, getState) => {
  dispatch({ type: UPDATE_POKEMON_LIST, payload: pokemonList})
}
export const setFavoritesList = favsList => (dispatch, getState) => {
  dispatch({ type: UPDATE_FAVORITES_LIST, payload: favsList})
}

//---------------- ADD TO LIST ----------------
export const addPokemonToList = (currentPokemonData,pokemonList) => async (dispatch, getState) => {
  let newList = pokemonList.map(x => x);
  newList.unshift(currentPokemonData.species);

  await AsyncStorage.setItem('@pokemonList', JSON.stringify(newList));

  dispatch({type: UPDATE_POKEMON_LIST, payload: newList })
}
//---------------- DELETE FROM LIST ----------------
export const delPokemonFromList = (currentPokemonData, pokemonList, favoritesList) => async (dispatch, getState) => {
  let newList = pokemonList.filter(item => item !== currentPokemonData.species);
  
  if(favoritesList.includes(currentPokemonData.species)){
    let newFavs = favoritesList.filter(item => item !== currentPokemonData.species)

    await AsyncStorage.setItem('@favoritesList', JSON.stringify(newFavs))

    dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})
  }

  await AsyncStorage.setItem('@pokemonList', JSON.stringify(newList))
  dispatch({type: UPDATE_POKEMON_LIST, payload:  newList })
}

//---------------- ADD FAVORITE TO LIST ----------------
export const favoritePokemon = (favoritesList, currentPokemonData) => async (dispatch,getState) => {
  let newFavs = favoritesList.map(x => x);
  newFavs.unshift(currentPokemonData.species);

  await AsyncStorage.setItem('@favoritesList', JSON.stringify(newFavs))

  dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})
}
//---------------- DELETE FAVORITE FROM LIST ----------------
export const unfavoritePokemon = (favoritesList, currentPokemonData) => async (dispatch,getState) => {
  let newFavs = favoritesList.filter(item => item !== currentPokemonData.species)
  
  await AsyncStorage.setItem('@favoritesList', JSON.stringify(newFavs))

  dispatch({type: UPDATE_FAVORITES_LIST, payload: newFavs})
}
