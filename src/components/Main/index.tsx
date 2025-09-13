"use client";

import { PokeList } from "@/src/components/PokeList";
import { PokeCards } from "@/src/components/PokeCards";

// Type para mudar de lista para cards
type MainProps = {
  activeTab: "Lista" | "Cards";
  searchTerm: string;
};

export function Main({ activeTab, searchTerm }: MainProps) {
  return (
    <main>
      {activeTab === "Lista" && <PokeList searchTerm={searchTerm} />}
      {activeTab === "Cards" && <PokeCards searchTerm={searchTerm} />}
    </main>
  );
}
