import React, { Component } from "react";

class SearchFunctionality extends Component {
  static search = async searchTerm => {
    const pokemonInfoUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    const pokemonLocationsUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/encounters`;
    const receivedInfo = await this.fetchData(pokemonInfoUrl);
    const receivedLocations = await this.fetchData(pokemonLocationsUrl);

    return this.createInfoObject(receivedInfo, receivedLocations);
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

  static createInfoObject = (receivedInfo, receivedLocations) => {
    if(receivedInfo !== 'error'){
      let pokemonData = {
        species: receivedInfo.species.name,
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
