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
import { currentPokeSearch, setCurrentPokemonData, delPokemonFromList } from "../actions";
import SearchFunctionality from "./layout/SearchFunctionality";

class PokeList extends Component {
  navToPokemon = async pokemon => {
    let pokemonData = await SearchFunctionality.search(pokemon);
    this.props.currentPokeSearch(pokemon);
    this.props.setCurrentPokemonData(pokemonData);

    this.props.navigation.navigate("Home");
  };

  
  delFromList = (pokemon) => {
    this.props.delPokemonFromList(pokemon)
  };

  renderList() {
    const { pokemonList } = this.props;
    let sortedList = pokemonList.map(x => x).sort();

    return sortedList.map((pokemon, index) => {
      return (
        <View key={pokemon}>
          <View style={styles.spacer}>
            <View style={{flexDirection: 'row', alignItems: 'center', margin:3}}>
              <Image
                source={require("../img/pokeball-flat.png")}
                style={styles.image}
              />
              <TouchableOpacity onPress={() => this.navToPokemon(pokemon)}>
                <Text style={styles.linkText}>
                  {index + 1}. {pokemon}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>this.delFromList(pokemon)}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  }

  render() {
    const { pokemonList } = this.props;
    if (pokemonList.length > 0) {
      return (
        <View style={styles.container}>
          <View style={styles.backcolor}>
              <Text style={styles.title}> Pokemon List </Text>
          </View>
          <ScrollView>
            <View style={styles.backcolor}>{this.renderList()}</View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.backcolor}>
              <Text style={styles.title}> Pokemon List </Text>
          </View>
          <ScrollView>
            <View style={styles.msgBox}>
              <Text style={styles.textMsg}>Uh Oh!</Text>
              <View style={styles.mainImageContainer}>
                <Image
                  source={require("../img/openball.png")}
                  style={styles.mainImage}
                />
              </View>
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
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#0793ff",
    fontFamily: "Pokemon Solid",
    color: "#ffe875",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10,
    borderRadius: 10
  },
  linkText: {
    fontSize: 25,
    color: "white",
    marginLeft: 5,
    marginBottom: 5
  },
  textMsg: {
    fontSize: 25,
    margin: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  msgBox: {
    borderRadius: 10,
    backgroundColor: "#0793ff",
    margin: 10
  },
  image: {
    height: 40,
    width: 40
  },
  mainImage: {
    height: 150,
    width: 150,
    justifyContent: "center"
  },
  centerContent: {
    justifyContent: "center",
    textAlign: 'center',
  },
  mainImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  backcolor: {
    backgroundColor: '#0793ff',
    borderRadius: 10,
    margin: 10
  },
  spacer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#0793ff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginRight: 5,
    paddingLeft: 3,
    paddingRight: 3
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList,
    searchedForPokemon: state.pokeReducer.searchedForPokemon,
    favoritesList: state.pokeReducer.favoritesList,
  };
};
export default connect(
  mapStateToProps,
  { currentPokeSearch, setCurrentPokemonData, delPokemonFromList }
)(PokeList);
