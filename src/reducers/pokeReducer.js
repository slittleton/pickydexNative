import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  UPDATE_POKEMON_LIST,
  UPDATE_FAVORITES_LIST
} from '../actions/actionTypes';

const initialState = {
  pokemonList: [],
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
        pokemonList: action.payload,
      }
    case UPDATE_FAVORITES_LIST:
      return{
        ...state,
        favoritesList: action.payload,
      }
    default: return state
  }
}