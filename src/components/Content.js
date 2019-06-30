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
  currentPokeSearch
} from "../actions";

import SearchBox from "./layout/SearchBox";
import DisplayResult from "./layout/DisplayResult";
import AddDelButtons from "./layout/AddDelButtons";
import SearchFunctionality from "./layout/SearchFunctionality";
// import logo from "../img/pickydex-logo.png";
import ball from "../img/ball.png";

const { width, height } = Dimensions.get("window");

class Content extends Component {
  state = { value: null };

  async componentDidMount() {
    const pokemonList = await AsyncStorage.getItem("@pokemonList");
    if (pokemonList !== null) {
      const currentList = JSON.parse(pokemonList);
      this.props.setPokemonList(currentList);

      if (this.props.currentPokemonData === "" && currentList.length > 0) {
        const random =
          currentList[Math.floor(Math.random() * currentList.length)];

        let pokemonData = await SearchFunctionality.search(random);
        this.props.setCurrentPokemonData(pokemonData);
        this.props.currentPokeSearch(random);
      }
    }

    const favoritesList = await AsyncStorage.getItem("@favoritesList");
    if (favoritesList !== null) {
      this.props.setFavoritesList(JSON.parse(favoritesList));
    }
  }

  render() {
    const { currentPokemonData } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../img/pickydex-logo.png')} style={styles.image} />
        <ScrollView>
          <SearchBox />
          <View style={styles.addDelContainer}>
            <AddDelButtons data={this.props} />
          </View>
          <DisplayResult pokemonData={currentPokemonData} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBox: {
    width: 200,
    height: 200,
    backgroundColor: "red"
  },
  image: {
    width: undefined,
    height: 125,
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
