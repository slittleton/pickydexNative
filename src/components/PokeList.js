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

    this.props.navigation.navigate('Home')
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
  if(pokemonList.length>0) {
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
      <ScrollView>
      <Text style={styles.title}> Pokemon List </Text>
      <View style={styles.msgBox}>
        <Text style={styles.textMsg}>Uh Oh!</Text>
        <Text style={styles.textMsg}>It looks like you haven't added any pokemon yet</Text>
      </View>
    </ScrollView>

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
  },
  textMsg: {
    fontSize: 20,
    margin: 20,
    justifyContent: 'center',
    textAlign:'center',
    color: 'white'
  },
  msgBox: {
    borderRadius: 10,
    backgroundColor: '#4d4d4d',
    margin: 20,
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

