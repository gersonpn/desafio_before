<template>
  <div>
    <h1>Pokémon List</h1>
    <div class="row">
      <div class="col-md-4" v-for="pokemon in pokemonList" :key="pokemon.name">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
            <img :src="pokemon.image" alt="Pokemon Image"> <!-- Adicione esta linha -->
            <div class="features">
              <ul class="list-unstyled">
                <li v-for="type in pokemon.types" :key="type">
                </li>
              </ul>
            </div>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>
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
  async mounted() {
    await this.fetchPokemonList();
  },
  methods: {
    async fetchPokemonList() {
      try {
        // Usar a função buscarPokemons para obter a lista de Pokémon
        const response = await this.buscarPokemons(1); 
        const pokemonData = response.results;

        // Fazendo uma segunda chamada para obter detalhes de cada Pokémon
        const detailedPokemonData = await Promise.all(
          pokemonData.map(async pokemon => {
            const detailResponse = await this.buscarPokemon(pokemon.name);
            return detailResponse;
          })
        );

        // Mapeando os dados
        this.pokemonList = detailedPokemonData.map(pokemon => ({
          name: pokemon.name,
          types: pokemon.types.map(type => type.type.name),
          image: pokemon.sprites.front_default
        }));
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    },

    async buscarPokemon(id) {
      let result = null;
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => (result = response.data));
      return result;
    },

    async buscarPokemons(pagina) {
      let result = null;
      let limit = 18;
      let offset = (pagina - 1) * limit;
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => (result = response.data));
      return result;
    },

    async buscarTipos() {
      let result = null;
      await axios
        .get(`https://pokeapi.co/api/v2/type`)
        .then(response => (result = response.data));
      return result;
    },

    async buscarPokemonPorTipo(tipo) {
      let result = null;
      await axios
        .get(`https://pokeapi.co/api/v2/type/${tipo}`)
        .then(response => (result = response.data));
      return result;
    }
  }
};
</script>

<style scoped>

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
}

.col-md-4 {
  flex: 0 0 calc(33.3333% - 30px);
  max-width: calc(33.3333% - 30px);
  padding: 15px;
}

.card {
  background: #1F2124;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  text-align: center;
  color: white;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 25px;
  margin-bottom: 10px;
}

.features ul {
  padding: 0;
  margin: 20px 0;
  list-style-type: none;
}

.features li {
  margin: 10px 0;
  font-size: 14px;
}

.features span {
  border-bottom: 2px dotted #F6B352;
}

.btn {
  display: block;
  background: #F6B352;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  text-decoration: none;
}

.btn:hover {
  background: #F68657;
}
</style>
