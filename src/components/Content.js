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

import { addPokemonToList, delPokemonFromList } from '../actions';

import SearchBox from "./layout/SearchBox";
import DisplayResult from "./DisplayResult";

class Content extends Component {
  addToList = () => {
    const { currentPokemonData, pokemonList } = this.props;
    this.props.addPokemonToList(currentPokemonData, pokemonList)
  };
    
  delFromList = () => {
    const { currentPokemonData, pokemonList } = this.props;
    this.props.delPokemonFromList(currentPokemonData, pokemonList)
  };


  renderButtons = () => {
    const { currentPokemonData, pokemonList} = this.props
    if(currentPokemonData !== '' && !pokemonList.includes(currentPokemonData.species)){
      return (
        <View styles={styles.addDelbtns}>
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => this.addToList()}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if(pokemonList.includes(currentPokemonData.species)) {
      return (
        <View styles={styles.addDelbtns}>
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => this.delFromList()}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>
        <SearchBox />

        <Text>{JSON.stringify(this.props.pokemonList)}</Text>

        <View style={styles.addDelContainer}>
          {this.renderButtons()}
        </View>

        <DisplayResult pokemonData={this.props.currentPokemonData} />
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
  btn: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 60
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#444444"
  },
  addDelbtns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
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
  {addPokemonToList,delPokemonFromList}
)(Content);
