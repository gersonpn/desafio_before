<template>
  <div class="container">
    <h1>Pokedex</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>

  import axios from 'axios';

export default {
  data(){
    return{
      
    }
  },

  created (){
    this.fetchPokemons();

  },

  methods: {
    fetchPokemons(url ='https://pokeapi.co/api/v2/pokemon'){
      axios.get(url)
      .then(({data}) => this.pokemons = data.results);

    }


  }


};
</script>
