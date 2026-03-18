type ContentKitViewerProps = {
  onDownloadBoostPlan: () => void;
  onDownloadSocialKit: () => void;
  onDownloadVisualKit: () => void;
  onDownloadYoutubeKit: () => void;
  boostPlan: string;
  socialKit: string;
  visualKit: string;
  youtubeKit: string;
};

export function ContentKitViewer({
  onDownloadBoostPlan,
  onDownloadSocialKit,
  onDownloadVisualKit,
  onDownloadYoutubeKit,
  boostPlan,
  socialKit,
  visualKit,
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
            <h3 className="kit-card__title">Conteúdo para redes</h3>
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
            <h3 className="kit-card__title">Plano de Impulsionamento</h3>
            {boostPlan ? (
              <button className="button button--secondary" onClick={onDownloadBoostPlan} type="button">
                Baixar .txt
              </button>
            ) : null}
          </div>
          <pre className="kit-card__content">{boostPlan || "Nenhum conteúdo gerado ainda."}</pre>
        </article>

        <article className="kit-card">
          <div className="kit-card__header">
            <h3 className="kit-card__title">Ideias visuais</h3>
            {visualKit ? (
              <button className="button button--secondary" onClick={onDownloadVisualKit} type="button">
                Baixar .txt
              </button>
            ) : null}
          </div>
          <pre className="kit-card__content">{visualKit || "Nenhum conteúdo gerado ainda."}</pre>
        </article>

        <article className="kit-card">
          <div className="kit-card__header">
            <h3 className="kit-card__title">Kit para YouTube</h3>
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