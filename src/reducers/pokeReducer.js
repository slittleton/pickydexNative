import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  SET_POKEMON_LIST_FROM_LOCAL,
  FAVORITES_LIST,
  SET_FAVORITES_LIST_FROM_LOCAL,
  UPDATE_POKEMON_LIST
} from '../actions/actionTypes';

const initialState = {
  pokemonList: ['pichu'],
  searchedForPokemon: '',
  currentPokemonData: '',
  favoritesList: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case CURRENT_SEARCHED_POKEMON:
      return {
        ...state,
        searchedForPokemon: action.payload
      };
    case CURRENT_POKEMON_DATA:
      return {
        ...state,
        currentPokemonData: action.payload
      };
    case UPDATE_POKEMON_LIST:
      return{
        ...state,
        pokemonList: action.payload.newList,
      }
    default: return state
  }
}