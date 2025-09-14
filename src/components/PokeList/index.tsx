"use client";

import { api } from "@/src/services/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useFavorites } from "@/src/hooks/FavoritesStorage";

import styles from "./styles.module.css";

// Type Resposta da API
type PokemonTypeResponse = { type: { name: string } };

// Type dos dados dos Pokemons
type Pokemon = {
  id: number;
  name: string;
  url: string;
  image?: string;
  types?: string[];
};

// Type da busca do pokémon
type PokeListProps = { searchTerm: string };

export function PokeList({ searchTerm }: PokeListProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    api
      .get("/pokemon?limit=151") // Difinido apenas 151 Pokémons
      .then(async res => {
        const results: Pokemon[] = res.data.results;

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

  // Filtra os pokémons
  const filteredPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredPokemons.map(p => (
          <Link key={p.id} href={`/detalhes/${p.id}`}>
            <li className={styles.item}>
              <span>
                {p.image && <img src={p.image} alt={p.name} loading='lazy' />}
              </span>
              <span>#{p.id}</span>
              <span>{p.name}</span>
              <button
                className={styles.favoriteButton}
                onClick={() => toggleFavorite(p.id)}
              >
                {isFavorite(p.id) ? "\u2764" : "\u2661"}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
