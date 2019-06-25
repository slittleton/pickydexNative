import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { currentPokeSearch, setCurrentPokemonData } from "../../actions";

class SearchBox extends Component {
  state = {
    searchTerm: "",
    species: "",
    abilities: "",
    height: "",
    id: "",
    types: [],
    weight: "",
    moves: [],
    locations: [],
    sprite: "",
    info: ""
  };

  search = async () => {
    const { searchTerm } = this.state;

    this.props.currentPokeSearch(searchTerm);
    await this.getPokemonFromApi(searchTerm);

    const pokemonData = this.state

    // this.setState({info: pokemonData[searchTerm].species})
    this.setState({info: this.props})

    await this.props.setCurrentPokemonData(pokemonData);

    ////////// navigate
  };
  getPokemonFromApi = async searchTerm => {
    // URLS For Making Call To Api's
    const pokemonInfoUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    const pokemonLocationsUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/encounters`;

    const receivedInfo = await this.fetchData(pokemonInfoUrl);
    const receivedLocations = await this.fetchData(pokemonLocationsUrl);

    this.infoToLocalState(receivedInfo);
    this.locationsToLocalState(receivedLocations);
  };
  fetchData = async url => {
    let data = null;

    const response = await fetch(url);
    await response.json().then(res=>data = res)
    return data;
  };

  infoToLocalState = (data) =>{
    this.setState({
      species: data.species.name,
      abilities: data.abilities.map(x => x.ability.name),
      height: data.height,
      id: data.id,
      types: data.types.map(x => x.type.name),
      weight: data.weight,
      moves: data.moves.map(x => x.move.name),
      sprite: data.sprites.front_default,
    });
  }

  locationsToLocalState = data => {
    this.setState({ locations: data.map(elem => elem.location_area.name) });
  };

  render() {
    return (
      <View>
        <View style={styles.searchBoxContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Pokemon Name"
              placeholderTextColor="gray"
              onChangeText={searchItem => {
                this.setState({ searchTerm: searchItem });
              }}
              style={styles.textInput}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => this.search()}>
              <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { currentPokeSearch, setCurrentPokemonData }
)(SearchBox);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 40,
    backgroundColor: "red",
    textAlign: "center",
    color: "black",
    borderRadius: 20,
    margin: 10
  },
  searchBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white"
  },
  textInput: {
    color: "black",
    fontSize: 20,
    paddingLeft: 15
  },
  inputContainer: {
    backgroundColor: "white",
    width: "65%"
  },
  btnContainer: {
    width: "25%",
    marginRight: 10
  },
  btn: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#444444"
  }
});
