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
    searchTerm: '',
    loadingMessage: null,
    errorMsg: null,
  };

  runSearch = async () => {
    this.setState({loadingMessage: null, errorMsg: null,})
    this.renderLoading();

    let term = this.state.searchTerm.toLowerCase()
    let pokemonData = await SearchFunctionality.search(term)

    if(pokemonData !== 'error'){
      this.props.currentPokeSearch(term);
      this.props.setCurrentPokemonData(pokemonData);
    } else{
      this.setState({
        loadingMessage: null,
        errorMsg:'Something Went Wrong Please Try again'
      })
      setTimeout(()=>{this.setState({errorMsg: null})}, 2000);
    }
  }
  renderLoading() {
    this.setState({loadingMessage: 'LOADING...'})

    setTimeout(()=>{this.setState({loadingMessage: ''})}, 2000);
  }
  
  renderMsg(){
    if(this.state.loadingMessage){
      return(<Text style={styles.loadMsg}>{this.state.loadingMessage}</Text>)
    }
    if(this.state.errorMsg){
      return(<Text style={styles.errMsg}>{this.state.errorMsg}</Text>)
    }
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
        {this.renderMsg()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
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
  },
  loadMsg: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15
  },
  errMsg: {
    color: 'tomato',
    fontSize: 15,
    marginLeft: 15
  }
});
