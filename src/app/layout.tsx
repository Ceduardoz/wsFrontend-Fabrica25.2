import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/src/hooks/FavoritesStorage";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pokedex",
  description: "Minha Pokedex Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={pressStart2P.className}>
      <body>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
