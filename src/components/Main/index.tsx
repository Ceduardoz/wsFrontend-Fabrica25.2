"use client";

import { PokeList } from "../PokeList";

// Type para mudar de lista para cards
type MainProps = {
  activeTab: "Lista" | "Cards";
  searchTerm: string;
};

export function Main({ activeTab, searchTerm }: MainProps) {
  return (
    <main>
      {activeTab === "Lista" && <PokeList searchTerm={searchTerm} />}
      {activeTab === "Cards" && <h1>Lista de Pokémons</h1>}
    </main>
  );
}
