import axios from "axios";

// PokeAPI
export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 15000,
});
