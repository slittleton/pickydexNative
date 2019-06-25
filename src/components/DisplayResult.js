import React, { Component } from "react";
import {View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Display = (props) => {
  const {
    searchTerm,
    species,
    abilities,
    height,
    id,
    types,
    weight,
    moves,
    locations,
    sprite
  } = props.pokemonData;

  if(species){
    return(
      <View>
        <ScrollView>
        <View style={styles.speciesSprite}>
          <Text style={styles.speciesTitle}>{species}</Text>
          <View styles={styles.sprite}>
            <Image source={{ uri: sprite }} style={styles.sprite} />
          </View>
        </View>
        <View style={styles.searchResultInfo}>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Species:</Text></View>
            <View><Text style={styles.text}>{species}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Type(s):</Text></View>
            <View><Text style={styles.text}>{types.join(", ")}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Abilities:</Text></View>
            <View><Text style={styles.text}>{abilities.join(", ")}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Height:</Text></View>
            <View><Text style={styles.text}>{parseInt(height)* 10} cm</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Weight:</Text></View>
            <View><Text style={styles.text}>{weight / 10} kg</Text></View>
          </View>
          <View>
            <View><Text style={styles.text}>Locations:</Text></View>
            <View><Text style={styles.textlist}>{locations.join(", ")}</Text></View>
          </View>
          <View >
            <View><Text style={styles.text}>Moves:</Text></View>
            <View><Text style={styles.textlist}>{moves.join(", ")}</Text></View>
          </View>
        </View>
        </ScrollView>
      </View>
        )
  }else {
    return(
      <View><Text>No data</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    backgroundColor: "#9b0000",
    textAlign: "center",
    color: "white",
    marginTop: 5,
    marginBottom: 5,
    color: 'black'
  },
  speciesSprite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red",

  },
  speciesTitle: {
    marginLeft: 15,
    fontSize: 40,
    fontWeight: "bold",
    color: 'black'
  },
  sprite: {
    backgroundColor: "gray",
    width: 150,
    height: 150,
    marginRight: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10

  },
  searchResultInfo: {
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text:{
    fontSize:25,
    marginLeft: 15,
    marginRight: 15,
    color: 'black'
  },
  textlist: {
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
    fontSize: 18
  }
});

export default Display