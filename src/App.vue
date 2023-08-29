<template>
  <div id="app">
    <img src="./assets/vue.svg">
    <pokemon></pokemon>
  </div>
</template>


<script>

import HelloWorld from './components/HelloWorld.vue';
import Pokemon from './components/Pokemon.vue';

 export default {
  name: 'app',
  components: {
    HelloWorld,
    Pokemon
  }
 }




</script>



<style>

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

</style>
