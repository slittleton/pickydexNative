import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const favorite = (pokemon, favoritePokemon) => {
  favoritePokemon(pokemon);
}
const unfavorite = (pokemon, unfavoritePokemon) => {
  unfavoritePokemon(pokemon);
}

const FavoriteButton = props => {
  const {favoritesList, currentPokemonData,favoritePokemon, unfavoritePokemon} = props.favData;
  const pokemon = currentPokemonData.species;
  
  if (!favoritesList.includes(pokemon)) {
    return (
      <TouchableOpacity style={styles.btnFav} onPress={() => favorite(pokemon, favoritePokemon)}>
        <Text style={styles.btnText}>Favorite</Text>
      </TouchableOpacity>
    );
  }
  if (favoritesList.includes(pokemon)) {
    return (
      <TouchableOpacity style={styles.btnFav} onPress={() => unfavorite(pokemon, unfavoritePokemon)}>
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
