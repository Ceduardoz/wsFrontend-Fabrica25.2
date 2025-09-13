"use client";

import { useState } from "react";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"Lista" | "Cards">("Lista");

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <Main activeTab={activeTab} searchTerm={searchTerm} />
      <Footer />
    </>
  );
}
