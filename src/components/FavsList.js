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
import { currentPokeSearch, setCurrentPokemonData, unfavoritePokemon } from "../actions";
import SearchFunctionality from "./layout/SearchFunctionality";

class FavsList extends Component {
  navToPokemon = async pokemon => {
    let pokemonData = await SearchFunctionality.search(pokemon);
    this.props.currentPokeSearch(pokemon);
    this.props.setCurrentPokemonData(pokemonData);

    this.props.navigation.navigate("Home");
  };

  
  delFromLFavorites = (pokemon) => {
    this.props.unfavoritePokemon(pokemon)
  };

  renderList() {
    const { favoritesList } = this.props;
  
    return favoritesList.map((pokemon, index) => {
      return (
        <View key={pokemon}>
          <View style={styles.spacer}>
            <TouchableOpacity onPress={() => this.navToPokemon(pokemon)}>
              <Text style={styles.linkText}>
                {index + 1}. {pokemon} 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>this.delFromLFavorites(pokemon)}>
              <Text style={styles.btnText}>Unfavorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  }

  render() {
    const { favoritesList } = this.props;
    if (favoritesList.length > 0) {
      return (
        <View style={styles.container}>
          <View style={styles.backcolor}>
            <View style={styles.imageContainer}>
              <Text style={styles.title}> Favorites List </Text>
              <Image
                source={require("../img/shinystar.png")}
                style={styles.image}
              />
            </View>
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
            <View style={styles.imageContainer}>
              <Text style={styles.title}> Favorites List </Text>
              <Image
                source={require("../img/shinystar.png")}
                style={styles.image}
              />
            </View>
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
                It looks like you haven't added any favorites yet
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
    backgroundColor: "#0793ff",
    flex: 1
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Pokemon Solid",
    color: "#0793ff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  linkText: {
    fontSize: 30,
    color: "#0793ff",
    marginLeft: 15,
    marginBottom: 5
  },
  textMsg: {
    fontSize: 25,
    margin: 20,
    justifyContent: "center",
    textAlign: "center",
    color: "#0793ff",
    fontWeight: "bold"
  },
  msgBox: {
    borderRadius: 10,
    backgroundColor: "#ffe875",
    margin: 10
  },
  image: {
    height: 50,
    width: 50
  },
  mainImage: {
    height: 150,
    width: 150,
    justifyContent: "center"
  },
  imageContainer: {
    marginRight: 10,
  
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  backcolor: {
    backgroundColor: "#ffe875",
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
    backgroundColor: "#ffe875",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0793ff",
    marginRight: 5,
    paddingLeft: 3,
    paddingRight: 3
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#0793ff"
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
  { currentPokeSearch, setCurrentPokemonData, unfavoritePokemon }
)(FavsList);
