// src/app/detalhes/[id]/page.tsx
import { api } from "@/src/services/api";
import styles from "./styles.module.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";

type PokemonTypeResponse = { type: { name: string } };

export default async function PokemonDetail({
  params,
}: {
  params: Record<string, string>; // Next 13 App Router
}) {
  // Busca os dados direto pelo id
  const res = await api.get(`/pokemon/${params.id}`);
  const pokemon = res.data;

  return (
    <section>
      <Header showBackButton={true} title='PokéInfo' />
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={150}
            height={150}
            className={styles.image}
          />
          <div className={styles.divsH4}>
            <h4>Nome: {pokemon.name}</h4>
            <h4>ID: #{pokemon.id}</h4>
            <h4>
              Tipo:{" "}
              {pokemon.types
                .map((t: PokemonTypeResponse) => t.type.name)
                .join(", ")}
            </h4>
            <h4>Experiência: {pokemon.base_experience}</h4>
            <h4>Peso: {pokemon.weight / 10} Kg</h4>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
