type SourceTextViewerProps = {
  sourceText: string;
  onDownloadText: () => void;
  onSourceTextChange?: (value: string) => void;
};

export function SourceTextViewer({ sourceText, onDownloadText, onSourceTextChange }: SourceTextViewerProps) {
  return (
    <section className="panel viewer">
      <div className="panel__header panel__header--actions">
        <h2 className="panel__title">Texto base</h2>
        {sourceText ? (
          <button className="button button--secondary" onClick={onDownloadText} type="button">
            Baixar .txt
          </button>
        ) : null}
      </div>
      <textarea
        className={`viewer__textarea${onSourceTextChange ? " viewer__textarea--editable" : ""}`}
        placeholder={onSourceTextChange ? "Cole ou escreva seu texto aqui..." : undefined}
        readOnly={!onSourceTextChange}
        value={sourceText}
        onChange={onSourceTextChange ? (e) => onSourceTextChange(e.target.value) : undefined}
      />
    </section>
  );
}