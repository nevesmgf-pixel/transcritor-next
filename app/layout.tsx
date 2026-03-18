import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextLevel Content Engine",
  description: "IA aplicada a conteúdo"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
