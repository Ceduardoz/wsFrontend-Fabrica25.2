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

type PokeListProps = {
  searchTerm: string;
};

export function PokeList({ searchTerm }: PokeListProps) {
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
            <span># {p.id}</span>
            <span>{p.name}</span>
            <span>tipos: {p.types?.join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
