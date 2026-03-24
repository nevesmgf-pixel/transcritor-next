type TranscribeButtonProps = {
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
};

export function TranscribeButton({ disabled, loading, onClick }: TranscribeButtonProps) {
  return (
    <button className="button button--primary" disabled={disabled} onClick={onClick} type="button">
      {loading ? "Gerando o texto..." : "Gerar texto"}
    </button>
  );
}
