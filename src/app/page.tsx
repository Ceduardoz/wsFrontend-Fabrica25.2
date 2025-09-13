"use client";

import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { useState } from "react";

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
