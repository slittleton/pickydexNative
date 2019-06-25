import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";
import SearchBox from "./layout/SearchBox";

class Content extends Component {
  render() {
    const {
      searchTerm,
      species,
      abilities,
      height,
      id,
      types,
      weight,
      moves,
      locations,
      sprite
    } = this.props.currentPokemonData;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>
        <SearchBox />

        <View style={styles.speciesSprite}>
          <Text style={styles.speciesTitle}>{species}</Text>
          <View styles={styles.sprite}>
            <Image source={{ uri: sprite }} style={styles.sprite} />
          </View>
        </View>
        <View style={styles.searchResultInfo}>

          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Species:</Text></View>
            <View><Text style={styles.text}>{species}</Text></View>
          </View>
          {/* <View style={styles.infoItem}>
            <View><Text style={styles.text}>Types:</Text></View>
            <View><Text style={styles.text}>{types.join(", ")}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Abilities:</Text></View>
            <View><Text style={styles.text}>{abilities.join(", ")}</Text></View>
          </View>
          */}
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Height:</Text></View>
            <View><Text style={styles.text}>{parseInt(height)* 10} cm</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Weight:</Text></View>
            <View><Text style={styles.text}>{weight / 10} kg</Text></View>
          </View>

        </View>
      <View></View>
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
  speciesSprite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red"
  },
  speciesTitle: {
    marginLeft: 15,
    fontSize: 40,
    fontWeight: "bold"
  },
  sprite: {
    backgroundColor: "gray",
    width: 100,
    height: 100,
    marginRight: 15
  },
  searchResultInfo: {
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    
  },
  text:{
    fontSize:25,
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
  null
)(Content);
