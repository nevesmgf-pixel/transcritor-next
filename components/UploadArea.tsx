type UploadAreaProps = {
  fileName: string | null;
  onChange: (file: File | null) => void;
};

export function UploadArea({ fileName, onChange }: UploadAreaProps) {
  return (
    <label className="upload-area">
      <span className="upload-area__text">
        {fileName ?? "Selecione um arquivo de áudio ou vídeo para transcrever."}
      </span>
      <input
        className="upload-area__input"
        type="file"
        accept="audio/*,video/*"
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
      />
    </label>
  );
}