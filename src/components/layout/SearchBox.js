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
import SearchFunctionality from './SearchFunctionality';


class SearchBox extends Component {
  state = {
    searchTerm: "",
  };

  runSearch = async () => {
    let pokemonData = await SearchFunctionality.search(this.state.searchTerm)
    this.props.currentPokeSearch(this.state.searchTerm);
    this.props.setCurrentPokemonData(pokemonData);

  }

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
            <TouchableOpacity style={styles.btn} onPress={() => this.runSearch() }>
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
