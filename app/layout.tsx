import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transcritor Next",
  description: "Transcrição e geração de conteúdo com Gemini"
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
