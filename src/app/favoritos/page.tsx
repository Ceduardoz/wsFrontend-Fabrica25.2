"use client";

import { useFavorites } from "@/src/hooks/FavoritesStorage";
import { useEffect, useState } from "react";
import { api } from "@/src/services/api";
import { PokeFavorites } from "@/src/components/PokeFavorites";
import { Header } from "@/src/components/Header";
import styles from "./styles.module.css";
import { Footer } from "@/src/components/Footer";

type Pokemon = {
  id: number;
  name: string;
  sprites: { front_default: string };
};

export default function FavoritosPage() {
  const { favorites } = useFavorites();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      if (favorites.length === 0) {
        setPokemons([]);
        setLoading(false);
        return;
      }

      try {
        const promises = favorites.map(id => api.get(`/pokemon/${id}`));
        const results = await Promise.all(promises);
        setPokemons(results.map(res => res.data));
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [favorites]);

  if (loading) return <p className={styles.container}>Carregando...</p>;
  if (pokemons.length === 0)
    return (
      <>
        <Header showBackButton={true} title='PokéInfo' />
        <section className={styles.sectionNotFound}>
          <div className={styles.containerNotFound}>
            <p>Nenhum Pokémon favoritado.</p>
          </div>
        </section>
      </>
    );

  return (
    <>
      <Header showBackButton={true} title='PokéInfo' />
      <section className={styles.sectionFav}>
        <div className={styles.container}>
          {pokemons.map(p => (
            <PokeFavorites
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.sprites.front_default}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
