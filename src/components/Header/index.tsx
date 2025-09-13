"use client";

import styles from "./styles.module.css";
import { ChangeEvent } from "react";

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
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
        <button>Lista</button>
        <button>Cards</button>
      </div>
    </header>
  );
}
