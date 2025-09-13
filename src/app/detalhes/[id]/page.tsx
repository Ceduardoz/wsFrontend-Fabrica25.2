export const dynamic = "force-dynamic";

import { api } from "@/src/services/api";
import styles from "./styles.module.css";

type PokemonDetailProps = { params: { id: string } };
type ResponseAPI = { type: { name: string } };

export default async function PokemonDetail({ params }: PokemonDetailProps) {
  const res = await api.get(`/pokemon/${params.id}`);
  const pokemon = res.data;

  return (
    <div className={styles.container}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p># {pokemon.id}</p>
      <p>
        Tipos: {pokemon.types.map((t: ResponseAPI) => t.type.name).join(", ")}
      </p>
    </div>
  );
}
