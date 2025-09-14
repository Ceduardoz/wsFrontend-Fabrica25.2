import { api } from "@/src/services/api";
import styles from "./styles.module.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

type PokemonDetailProps = {
  params: { id: string };
};

// Type da resposta da API
type PokemonTypeResponse = { type: { name: string } };

export default async function PokemonDetail({ params }: PokemonDetailProps) {
  const res = await api.get(`/pokemon/${params.id}`);
  const pokemon = res.data;

  return (
    <section>
      <Header showBackButton={true} title='PokéInfo' />
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
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
            <h4>Peso: {pokemon.weight}Kg</h4>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
