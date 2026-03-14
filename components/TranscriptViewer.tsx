type TranscriptViewerProps = {
  onDownloadTranscript: () => void;
  transcript: string;
};

export function TranscriptViewer({ onDownloadTranscript, transcript }: TranscriptViewerProps) {
  return (
    <section className="panel viewer">
      <div className="panel__header panel__header--actions">
        <h2 className="panel__title">Ver a transcrição</h2>
        {transcript ? (
          <button className="button button--secondary" onClick={onDownloadTranscript} type="button">
            Baixar .txt
          </button>
        ) : null}
      </div>
      <textarea className="viewer__textarea" readOnly value={transcript} />
    </section>
  );
}