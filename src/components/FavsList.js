import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { currentPokeSearch, setCurrentPokemonData } from '../actions';
import SearchFunctionality from './layout/SearchFunctionality';

class FavsList extends Component {

navToPokemon = async (pokemon) => {
    let pokemonData = await SearchFunctionality.search(pokemon)
    this.props.currentPokeSearch(pokemon);
    this.props.setCurrentPokemonData(pokemonData);

    this.props.navigation.navigate('Home')
}

renderList() {
  let sortedList = this.props.favoritesList.map(x => x).sort();
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
  const { favoritesList } = this.props
  if(favoritesList) {
    return (
      <ScrollView>
        <Text style={styles.title}> Favorites List </Text>
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
    fontFamily: 'Pokemon Solid',
    color: '#0793ff',
    backgroundColor: 'gold',
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  linkText: {
    fontSize: 30,
    marginLeft: 15
  }
})

const mapStateToProps = state => {
  return {
    currentPokemonData: state.pokeReducer.currentPokemonData,
    favoritesList: state.pokeReducer.favoritesList,
    searchedForPokemon: state.pokeReducer.searchedForPokemon,
  }
}
  export default connect(mapStateToProps, { currentPokeSearch, setCurrentPokemonData })(FavsList);

