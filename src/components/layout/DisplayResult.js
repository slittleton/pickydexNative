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
    sprite,
    flavorText
  } = props.pokemonData;

  let capitalized =''

  //capitalize species name
  species ?
   capitalized = species.charAt(0).toUpperCase() + species.slice(1) : null;
  

  if(species){
    return(
      <View>
        <ScrollView>
          <View>
            <View style={styles.speciesSprite}>
              <Text style={styles.speciesTitle}>{capitalized}</Text>
              <View >
                <Image source={{ uri: sprite }} style={styles.sprite} />
              </View>

            </View>
          </View>

        <View style={styles.searchResultInfo}>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Species:</Text></View>
            <View><Text style={styles.text}>{capitalized}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Type(s):</Text></View>
            <View><Text style={styles.text}>{types.join(", ")}</Text></View>
          </View>
          <View style={styles.infoItem}>
            <View><Text style={styles.text}>Abilities:</Text></View>
            <View><Text style={styles.textAbilities}>{abilities.join(", ")}</Text></View>
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
            <View><Text style={styles.text}>Descrpition:</Text></View>
            <View><Text style={styles.textBlock}>{flavorText}</Text></View>
          </View>

          { locations.length > 0 ?  
          <View>
            <View><Text style={styles.text}>Locations:</Text></View>
            <View><Text style={styles.textlist}>{locations.join(", ")}</Text></View>
          </View>: null }

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
      <View>
        <Text style={styles.textMsg}>You haven't added any pokemon to your pokedex yet.</Text>
        <View style={styles.mainImageContainer}>
          <Image
            source={require("../../img/openball.png")}
            style={styles.mainImage}
          />
        </View>
        <Text style={styles.textMsg}>Maybe you could try Eevee or Pikachu?</Text>
      </View>
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
    height: 135,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    backgroundColor: "#0793ff",
    margin: 5,
    borderRadius: 10
  },
  speciesTitle: {
    marginLeft: 15,
    fontSize: 40,
    fontWeight: "bold",
    color: 'gold'
  },
  sprite: {
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
  textAbilities: {
    fontSize:16,
    marginLeft: 15,
    marginRight: 15,
    color: 'black'
  },
  textMsg: {
    fontSize:25,
    marginLeft: 15,
    marginRight: 15,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10
  },
  textlist: {
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
    fontSize: 18
  },
  textBlock: {
    flex: 1,
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    fontSize: 18
  },
  mainImage: {
    height: 150,
    width: 150,
    justifyContent: "center"
  },
  imageContainer: {
    backgroundColor: "#0793ff",
    marginRight: 15,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Display