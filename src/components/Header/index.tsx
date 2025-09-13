"use client";

import styles from "./styles.module.css";
import { ChangeEvent } from "react";

// Type para as mudanças no main
type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeTab: "Lista" | "Cards";
  onTabChange: (tab: "Lista" | "Cards") => void;
};

export function Header({
  searchTerm,
  setSearchTerm,
  onTabChange,
}: HeaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <h1 className={styles.title}>PokéInfo</h1>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Pokemon'
          value={searchTerm}
          onChange={handleChange}
        />
      </nav>

      <div className={styles.pokeBtn}>
        <button onClick={() => onTabChange("Lista")}>Lista</button>
        <button onClick={() => onTabChange("Cards")}>Cards</button>
      </div>
    </header>
  );
}
