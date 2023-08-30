<template>
  <div>
    <h1>Pokémon List</h1>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemonList: []
    };
  },
  mounted() {
    this.fetchPokemonList();
  },
  methods: {
    async fetchPokemonList() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        this.pokemonList = response.data.results;
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    }
  }
};
</script>
