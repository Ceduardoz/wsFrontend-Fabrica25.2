"use client";

import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { PokeList } from "@/src/components/PokeList";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <PokeList searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  );
}
