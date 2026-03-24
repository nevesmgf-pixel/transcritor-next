import { LogoutButton } from "./LogoutButton";

export function Header() {
  return (
    <div style={{ position: "relative" }}>
      
      {/* botão no canto */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16
        }}
      >
        <LogoutButton />
      </div>

      <header
        className="hero"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="NextLevel Content Engine"
          style={{
            width: 150,
            height: 80,
            objectFit: "contain"
          }}
        />

        {/* TEXTO */}
        <div>
          
          <h1 className="hero__title">AI Content Engine</h1>
          <p className="hero__description">
            <b>
              Envie um áudio, um vídeo ou escreva um texto e gere conteúdos
              prontos para redes, YouTube e distribuição.
            </b>
          </p>
        </div>
      </header>
    </div>
  );
}