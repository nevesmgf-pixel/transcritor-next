import { LogoutButton } from "./LogoutButton";

export function Header() {
  return (
    <div style={{ position: "relative" }}>
      
      {/* botão no canto */}
      <div style={{
        position: "absolute",
        top: 16,
        right: 16
      }}>
        <LogoutButton />
      </div>

      <header className="hero">
        <span className="hero__eyebrow">IA aplicada a conteúdo</span>
        <h1 className="hero__title">NextLevel Content Engine</h1>
        <p className="hero__description">
          <b>
            Envie um áudio, um vídeo ou escreva um texto e gere conteúdos prontos para redes, YouTube e distribuição.
          </b>
        </p>
      </header>
    </div>
  );
}