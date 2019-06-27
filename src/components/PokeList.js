import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { currentPokeSearch, setCurrentPokemonData } from '../actions';
import SearchFunctionality from './layout/SearchFunctionality';

class PokeList extends Component {

navToPokemon = async (pokemon) => {
    let pokemonData = await SearchFunctionality.search(pokemon)
    this.props.currentPokeSearch(pokemon);
    this.props.setCurrentPokemonData(pokemonData);

    
}

renderList() {
  let sortedList = this.props.pokemonList.map(x => x).sort();
  return sortedList.map((pokemon, index) => {
    return (
      <View key={pokemon}>
        <TouchableOpacity onPress={()=>this.navToPokemon(pokemon)}>
          <Text style={styles.linkText}>{index + 1}. {pokemon}</Text>
        </TouchableOpacity>
      </View>
    )
  })
}


render() {
  const { pokemonList } = this.props
  if(pokemonList) {
    return (
      <ScrollView>
        <Text style={styles.title}> Pokemon List </Text>
        <View>
          {this.renderList()}
        </View>
      </ScrollView>
    )
  } else {
    return (
      <View>
        <Text>You need to add some pokemon to your list</Text>
      </View>
    )
  }

}
}
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'black'
  },
  linkText: {
    fontSize: 30,
    marginLeft: 15
  }
})

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList,
    searchedForPokemon: state.pokeReducer.searchedForPokemon,
  }
}
  export default connect(mapStateToProps, { currentPokeSearch, setCurrentPokemonData })(PokeList);

