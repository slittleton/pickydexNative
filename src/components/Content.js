import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { connect } from 'react-redux';

import { addPokemonToList, delPokemonFromList, unfavoritePokemon, favoritePokemon } from '../actions';

import SearchBox from './layout/SearchBox';
import DisplayResult from './layout/DisplayResult';
import AddDelButtons from './layout/AddDelButtons';


class Content extends Component {

  render() {
    const { pokemonList, currentPokemonData, favoritesList} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>
        <SearchBox />
        
        <Text>List: {JSON.stringify(pokemonList)}</Text>
        <Text>Favs: {JSON.stringify(favoritesList)}</Text>
        
        <View style={styles.addDelContainer}>
          <AddDelButtons data={this.props}/>
        </View>
        <DisplayResult pokemonData={currentPokemonData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#9b0000",
    textAlign: "center",
    color: "white",
    marginTop: 5,
    marginBottom: 5
  },
  addDelContainer: {
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
  }
});

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList,
    favoritesList: state.pokeReducer.favoritesList,
    searchedForPokemon: state.pokeReducer.searchedForPokemon,
    currentTrainer: state.trainerReducer
  };
};

export default connect(
  mapStateToProps,
  {addPokemonToList,delPokemonFromList, unfavoritePokemon, favoritePokemon}
)(Content);
