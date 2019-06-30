import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { currentPokeSearch, setCurrentPokemonData } from "../actions";
import SearchFunctionality from "./layout/SearchFunctionality";

class PokeList extends Component {
  navToPokemon = async pokemon => {
    let pokemonData = await SearchFunctionality.search(pokemon);
    this.props.currentPokeSearch(pokemon);
    this.props.setCurrentPokemonData(pokemonData);

    this.props.navigation.navigate("Home");
  };

  renderList() {
    let sortedList = this.props.pokemonList.map(x => x).sort();
    return sortedList.map((pokemon, index) => {
      return (
        <View key={pokemon}>
          <TouchableOpacity onPress={() => this.navToPokemon(pokemon)}>
            <Text style={styles.linkText}>
              {index + 1}. {pokemon}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    const { pokemonList } = this.props;
    if (pokemonList.length > 0) {
      return (
        <ScrollView>
          <View style={styles.backcolor}>
            <View style={styles.imageContainer}>
              <Text style={styles.title}> Pokemon List </Text>
              <Image
                source={require("../img/pokeball-flat.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View>{this.renderList()}</View>
        </ScrollView>
      );
    } else {
      return (
        <View>
          <View style={styles.backcolor}>
            <View style={styles.imageContainer}>
              <Text style={styles.title}> Pokemon List </Text>
              <Image
                source={require("../img/pokeball-flat.png")}
                style={styles.image}
              />
            </View>
          </View>

          <ScrollView>
            <View style={styles.msgBox}>
              <Text style={styles.textMsg}>Uh Oh!</Text>
              <Text style={styles.textMsg}>
                It looks like you haven't added any pokemon yet
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#0793ff",
    color: "black",
    fontFamily: "Pokemon Solid",
    color: "gold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  linkText: {
    fontSize: 30,
    marginLeft: 15
  },
  textMsg: {
    fontSize: 20,
    margin: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  },
  msgBox: {
    borderRadius: 10,
    backgroundColor: "#4d4d4d",
    margin: 20
  },
  image: {
    height: 50,
    width: 50
  },
  imageContainer: {
    backgroundColor: "#0793ff",
    marginRight: 15,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backcolor: {
    backgroundColor: "#0793ff"
  }
});

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList,
    searchedForPokemon: state.pokeReducer.searchedForPokemon
  };
};
export default connect(
  mapStateToProps,
  { currentPokeSearch, setCurrentPokemonData }
)(PokeList);
