import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const favorite = (favoritesList, currentPokemonData, favoritePokemon) => {
  favoritePokemon(favoritesList, currentPokemonData);
}
const unfavorite = (favoritesList, currentPokemonData, unfavoritePokemon) => {
  unfavoritePokemon(favoritesList, currentPokemonData);
}

const FavoriteButton = props => {
  const {favoritesList, currentPokemonData,favoritePokemon, unfavoritePokemon} = props.favData;
  
  if (!favoritesList.includes(currentPokemonData.species)) {
    return (
      <TouchableOpacity style={styles.btnFav} onPress={() => favorite(favoritesList, currentPokemonData,favoritePokemon )}>
        <Text style={styles.btnText}>Favorite</Text>
      </TouchableOpacity>
    );
  }
  if (favoritesList.includes(currentPokemonData.species)) {
    return (
      <TouchableOpacity style={styles.btnFav} onPress={() => unfavorite(favoritesList, currentPokemonData, unfavoritePokemon)}>
        <Text style={styles.btnText}>Unfavorite</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#444444"
  },
  btnFav:{
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default FavoriteButton;
