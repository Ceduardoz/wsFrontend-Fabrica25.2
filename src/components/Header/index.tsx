"use client";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <h1 className={styles.title}>PokéInfo</h1>
        <input type='text' name='search' id='search' placeholder='Pokemon' />
      </nav>

      <div className={styles.pokeBtn}>
        <button>Lista</button>
        <button>Cards</button>
      </div>
    </header>
  );
}
