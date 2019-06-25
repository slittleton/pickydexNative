import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST,
  FAVORITES_LIST,
  SET_FAVORITES_LIST_FROM_LOCAL
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
    case ADD_POKEMON_TO_LIST:
      return{
        ...state,
        pokemonList: [...state.pokemonList, searchedForPokemon],
      }
    default: return state
  }
}