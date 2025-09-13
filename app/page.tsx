"use client";

import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { PokeList } from "@/src/components/PokeList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PokeList />
      </main>
      <Footer />
    </>
  );
}
