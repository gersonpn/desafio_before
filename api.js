// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

import axios from 'axios';


export function req(type) {
  return axios({
    method: "post",
    url: `https://pokeapi.co/api/v2/type/${type}`,
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  }).then(response => {
    console.log(response.data);
    return response.data;
  });
}
