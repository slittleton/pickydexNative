import React, { Component } from "react";

class SearchFunctionality extends Component {
  static search = async searchTerm => {
    const pokemonInfoUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    const pokemonLocationsUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/encounters`;
    const speciesData = `https://pokeapi.co/api/v2/pokemon-species/${searchTerm}/`;

    const receivedInfo = await this.fetchData(pokemonInfoUrl);
    const receivedLocations = await this.fetchData(pokemonLocationsUrl);
    const receivedSpecies = await this.fetchData(speciesData)

    return this.createInfoObject(receivedInfo, receivedLocations,receivedSpecies);
  };

  static fetchData = async url => {
    let data = null;

    try {
      const response = await fetch(url);
      await response.json().then(res => (data = res));
  
      return data;
    } catch (err){
      return 'error'
    }

  };

  static createInfoObject = (receivedInfo, receivedLocations, receivedSpecies) => {
    if(receivedInfo !== 'error'){
      let entries = receivedSpecies.flavor_text_entries

      for(let i = 0; i< entries.length; i++){
        if(entries[i].language.name === "en"){
          entries = entries[i].flavor_text;
          break
        }
      }

      let pokemonData = {
        species: receivedInfo.species.name,
        flavorText: entries,
        abilities: receivedInfo.abilities.map(x => x.ability.name),
        height: receivedInfo.height,
        id: receivedInfo.id,
        types: receivedInfo.types.map(x => x.type.name),
        weight: receivedInfo.weight,
        moves: receivedInfo.moves.map(x => x.move.name),
        sprite: receivedInfo.sprites.front_default,
        locations: receivedLocations.map(elem => elem.location_area.name)
 
      };
      return pokemonData;
    } else {
      return 'error'
    }


  };
}

export default SearchFunctionality;
