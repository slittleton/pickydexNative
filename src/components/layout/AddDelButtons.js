import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';


addToList = (currentPokemonData, pokemonList, addPokemonToList) => {
  addPokemonToList(currentPokemonData, pokemonList)
};
  
delFromList = (currentPokemonData, pokemonList, delPokemonFromList) => {
  delPokemonFromList(currentPokemonData, pokemonList)
};

AddDelButtons = (props) => {
  const { currentPokemonData, pokemonList, addPokemonToList, delPokemonFromList} = props.data;

  if(currentPokemonData !== '' && !pokemonList.includes(currentPokemonData.species)){
    return (
      <View styles={styles.addDelbtns}>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => addToList(currentPokemonData, pokemonList, addPokemonToList)}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } 
  
  else if(pokemonList.includes(currentPokemonData.species)) {
    return (
      <View styles={styles.addDelbtns}>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => delFromList(currentPokemonData, pokemonList, delPokemonFromList)}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  else {
    return <Text>{JSON.stringify(props.addPokemonToList)}</Text>
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

export default AddDelButtons;