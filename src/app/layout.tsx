import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
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
    <html lang='pt-BR'>
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}
