import { useState, type DragEvent } from "react";

type UploadAreaProps = {
  fileName: string | null;
  onChange: (file: File | null) => void;
};

export function UploadArea({ fileName, onChange }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);

  function handleFileSelection(file: File | null) {
    onChange(file);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0] ?? null;

    if (!file) {
      return;
    }

    if (file.type.startsWith("audio/") || file.type.startsWith("video/")) {
      handleFileSelection(file);
    }
  }

  return (
    <label
      className={`upload-area${fileName ? " upload-area--selected" : ""}${isDragging ? " upload-area--dragging" : ""}`}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDrop={handleDrop}
    >
      <input
        className="upload-area__input"
        type="file"
        accept="audio/*,video/*"
        onChange={(event) => handleFileSelection(event.target.files?.[0] ?? null)}
      />
      <span className="upload-area__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="upload-area__icon-svg">
          <path
            d="M12 16V8M12 8L8.75 11.25M12 8L15.25 11.25M7 16.75H17M7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="upload-area__content">
        <span className="upload-area__headline">Arraste um arquivo aqui ou escolha do computador</span>
        <span className="upload-area__helper">Aceita áudio e vídeo</span>
        <span className="upload-area__cta">Escolher arquivo</span>
        <span className="upload-area__filename" title={fileName ?? undefined}>
          {fileName ?? "Nenhum arquivo selecionado"}
        </span>
      </span>
    </label>
  );
}