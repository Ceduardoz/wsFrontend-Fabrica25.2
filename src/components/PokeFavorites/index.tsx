"use client";

import { useFavorites } from "@/src/hooks/FavoritesStorage";
import styles from "./styles.module.css";

// Type das informações dos Pokémons
type PokeFavoritesProps = {
  id: number;
  name: string;
  image: string;
};

export function PokeFavorites({ id, name, image }: PokeFavoritesProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <button className={styles.button} onClick={() => toggleFavorite(id)}>
        {isFavorite(id) ? "\u2764" : "\u2661"}
      </button>
    </div>
  );
}
