type ContentKitViewerProps = {
  onDownloadSocialKit: () => void;
  onDownloadYoutubeKit: () => void;
  socialKit: string;
  youtubeKit: string;
};

export function ContentKitViewer({
  onDownloadSocialKit,
  onDownloadYoutubeKit,
  socialKit,
  youtubeKit
}: ContentKitViewerProps) {
  return (
    <section className="panel kits">
      <div className="panel__header">
        <h2 className="panel__title">Conteúdo</h2>
      </div>
      <div className="kits__grid">
        <article className="kit-card">
          <div className="kit-card__header">
            <h3 className="kit-card__title">Kit social</h3>
            {socialKit ? (
              <button className="button button--secondary" onClick={onDownloadSocialKit} type="button">
                Baixar .txt
              </button>
            ) : null}
          </div>
          <pre className="kit-card__content">{socialKit || "Nenhum conteúdo gerado ainda."}</pre>
        </article>

        <article className="kit-card">
          <div className="kit-card__header">
            <h3 className="kit-card__title">Kit YouTube</h3>
            {youtubeKit ? (
              <button className="button button--secondary" onClick={onDownloadYoutubeKit} type="button">
                Baixar .txt
              </button>
            ) : null}
          </div>
          <pre className="kit-card__content">{youtubeKit || "Nenhum conteúdo gerado ainda."}</pre>
        </article>
      </div>
    </section>
  );
}