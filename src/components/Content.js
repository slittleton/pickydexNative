import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { 
  addPokemonToList, 
  delPokemonFromList, 
  unfavoritePokemon, 
  favoritePokemon,
  setPokemonList,
  setFavoritesList,
  setCurrentPokemonData,
  currentPokeSearch
} from '../actions';

import SearchBox from './layout/SearchBox';
import DisplayResult from './layout/DisplayResult';
import AddDelButtons from './layout/AddDelButtons';
import SearchFunctionality from './layout/SearchFunctionality';

class Content extends Component {
  state = {
    test: '',
    test2: ''
  }

  async componentDidMount () {
    const pokemonList = await AsyncStorage.getItem('@pokemonList');
    if(pokemonList !== null) {
      const currentList = JSON.parse(pokemonList)
      this.props.setPokemonList(currentList)


      if(this.props.currentPokemonData !== '' && currentList.lenght > 0){
        const random = currentList[Math.floor(Math.random() * currentList.length)]

        let pokemonData = await SearchFunctionality.search(random)
        this.props.setCurrentPokemonData(pokemonData);
        this.props.currentPokeSearch(random)
      }
    }

    const favoritesList = await AsyncStorage.getItem('@favoritesList');
    if(favoritesList !== null) {
      this.props.setFavoritesList(JSON.parse(favoritesList))
    }


  }

  render() {
    const { pokemonList, currentPokemonData, favoritesList} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>
        <Text>{JSON.stringify(this.state.test2)}</Text>
        <SearchBox />
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
    currentTrainer: state.trainerReducer.currentTrainer
  };
};

export default connect(
  mapStateToProps,
  {
    addPokemonToList, 
    delPokemonFromList, 
    unfavoritePokemon, 
    favoritePokemon, 
    setPokemonList,
    setFavoritesList,
    setCurrentPokemonData,
    currentPokeSearch
  }
)(Content);
