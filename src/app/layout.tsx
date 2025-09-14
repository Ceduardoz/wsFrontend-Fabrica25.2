import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/src/hooks/FavoritesStorage";

// Font global
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PokéInfo",
  description: "Minha Pokedex Next.js",
  icons: {
    icon: "/assets/favicon.ico",
  },
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
