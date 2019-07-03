import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import {
  addPokemonToList,
  delPokemonFromList,
  unfavoritePokemon,
  favoritePokemon,
  setPokemonList,
  setFavoritesList,
  setCurrentPokemonData,
  currentPokeSearch,
  setTrainerName,
} from "../actions";

import SearchBox from "./layout/SearchBox";
import DisplayResult from "./layout/DisplayResult";
import AddDelButtons from "./layout/AddDelButtons";
import SearchFunctionality from "./layout/SearchFunctionality";


class Content extends Component {
  state = { value: '' };

  async componentDidMount() {
    const pokemonList = await AsyncStorage.getItem('@pokemonList');
    if (pokemonList !== null) {
      const currentList = JSON.parse(pokemonList);
      this.props.setPokemonList(currentList);

      if (this.props.currentPokemonData === '' && currentList.length > 0) {
        const random =
          currentList[Math.floor(Math.random() * currentList.length)];

        let pokemonData = await SearchFunctionality.search(random);
        this.props.setCurrentPokemonData(pokemonData);
        this.props.currentPokeSearch(random);
      }
    }

    const favoritesList = await AsyncStorage.getItem('@favoritesList');
    if (favoritesList !== null) {
      this.props.setFavoritesList(JSON.parse(favoritesList));
    }

    const trainerName = await AsyncStorage.getItem('@currentTrainer')
    if(trainerName !== null) {
      this.props.setTrainerName(JSON.parse(trainerName));
    }
    this.setState({value: trainerName})
  }

  render() {
    const { currentPokemonData, currentTrainer } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.spacer}>
          <Text style={styles.trainerName}>Trainer: {currentTrainer}</Text>
          <Text style={styles.logo}> Pickydex </Text>
        </View>
        
        <ScrollView>
          <SearchBox />
          <View style={styles.addDelContainer}>
            <AddDelButtons data={this.props} />
          </View>
          <DisplayResult pokemonData={currentPokemonData}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    alignSelf: "stretch",
    height: undefined,
    width: undefined
  },
  addDelContainer: {
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
  textsize: {
    fontSize: 25
  },
  trainerName: {
    fontSize: 15,
    marginLeft: 15,
    color: 'white',
    textAlign: 'center'
  },
  spacer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#0793ff',
    margin:5,
    borderRadius: 10
  },
  logo: {
    color: '#ffe875',
    padding: 5,
    fontSize: 30,
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
    fontFamily: "Pokemon Solid",
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
    currentPokeSearch,
    setTrainerName
  }
)(Content);
