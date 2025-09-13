"use client";

import { api } from "@/src/services/api";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// Type de todos os Pokemons
type Pokemon = {
  id: number;
  name: string;
  url: string;
  image?: string; // url
  types?: string[];
};

// Type da estrutuda da API
type PokemonTypeResponse = { type: { name: string } };

// Type lista dos pokemons
type PokeCardsProps = {
  searchTerm: string;
};

export function PokeCards({ searchTerm }: PokeCardsProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api
      .get("/pokemon?limit=151")
      .then(async res => {
        const results: Pokemon[] = res.data.results;

        // Buscando cada pokémon
        const pokemonsImages = await Promise.all(
          results.map(async p => {
            const pokeData = await api.get(p.url);
            return {
              id: pokeData.data.id,
              name: pokeData.data.name,
              url: p.url,
              image: pokeData.data.sprites.front_default,
              types: pokeData.data.types.map(
                (t: PokemonTypeResponse) => t.type.name,
              ),
            };
          }),
        );
        setPokemons(pokemonsImages);
      })
      .catch(e => console.error("ERROR na API", e));
  }, []);

  // Filtrando os pokemons
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredPokemons.map(p => (
          <li key={p.id} className={styles.item}>
            <span>
              {p.image && <img src={p.image} alt={p.name} loading='lazy' />}
            </span>
            <div className={styles.information}>
              <h3># {p.id}</h3>
              <h2>{p.name}</h2>
            </div>
            <h4>tipos: {p.types?.join(", ")}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
