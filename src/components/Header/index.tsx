"use client";

import styles from "./styles.module.css";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type HeaderProps = {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
  activeTab?: "Lista" | "Cards";
  onTabChange?: (tab: "Lista" | "Cards") => void;

  showBackButton?: boolean;
  title?: string;
};

export function Header({
  searchTerm,
  setSearchTerm,
  activeTab,
  onTabChange,
  showBackButton = false,
  title = "PokéInfo",
}: HeaderProps) {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm && setSearchTerm(e.target.value);

  const headerClass = showBackButton ? styles.headerSmall : styles.header;

  return (
    <header className={headerClass}>
      <nav className={styles.navBar}>
        <h2 className={styles.title}>{title}</h2>

        {setSearchTerm && (
          <input
            type='text'
            placeholder='Pokemon'
            value={searchTerm}
            onChange={handleChange}
          />
        )}

        <div className={styles.rightButtons}>
          {showBackButton && (
            <button
              className={styles.backButton}
              onClick={() => router.push("/")}
            >
              Voltar
            </button>
          )}
        </div>
      </nav>

      {onTabChange && (
        <div className={styles.pokeBtn}>
          <button onClick={() => onTabChange("Lista")}>Lista</button>
          <button onClick={() => onTabChange("Cards")}>Cards</button>
          <button
            className={styles.favoritesButton}
            onClick={() => router.push("/favoritos")}
          >
            Favoritos
          </button>
        </div>
      )}
    </header>
  );
}
