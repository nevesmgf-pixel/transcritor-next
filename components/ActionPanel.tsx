type ActionPanelProps = {
  canGenerate: boolean;
  loadingSocial: boolean;
  loadingBoostPlan: boolean;
  loadingVisual: boolean;
  loadingYouTube: boolean;

  socialGenerated: boolean;
  boostPlanGenerated: boolean;
  visualGenerated: boolean;
  youtubeGenerated: boolean;

  onGenerateSocial: () => void;
  onGenerateBoostPlan: () => void;
  onGenerateVisual: () => void;
  onGenerateYouTube: () => void;
};

export function ActionPanel({
  canGenerate,
  loadingSocial,
  loadingBoostPlan,
  loadingVisual,
  loadingYouTube,
  socialGenerated,
  boostPlanGenerated,
  visualGenerated,
  youtubeGenerated,
  onGenerateSocial,
  onGenerateBoostPlan,
  onGenerateVisual,
  onGenerateYouTube
}: ActionPanelProps) {
  return (
    <section className="panel actions">
      <div className="panel__header">
        <h2 className="panel__title">Ações</h2>
      </div>

      <div className="actions__buttons">
        <button
          className={`button button--secondary ${
            loadingSocial ? "button--loading" : ""
          } ${socialGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingSocial}
          onClick={onGenerateSocial}
          type="button"
        >
          {loadingSocial
            ? "Gerando conteúdo para redes..."
            : socialGenerated
            ? "Gerado ✓ Gerar novamente conteúdo para redes"
            : "Gerar conteúdo para redes"}
        </button>

        <button
          className={`button button--secondary ${
            loadingBoostPlan ? "button--loading" : ""
          } ${boostPlanGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingBoostPlan}
          onClick={onGenerateBoostPlan}
          type="button"
        >
          {loadingBoostPlan
            ? "Gerando Plano de Impulsionamento..."
            : boostPlanGenerated
            ? "Gerado ✓ Gerar novamente Plano de Impulsionamento"
            : "Gerar Plano de Impulsionamento"}
        </button>

        <button
          className={`button button--secondary ${
            loadingVisual ? "button--loading" : ""
          } ${visualGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingVisual}
          onClick={onGenerateVisual}
          type="button"
        >
          {loadingVisual
            ? "Gerando ideias visuais..."
            : visualGenerated
            ? "Gerado ✓ Gerar novamente ideias visuais"
            : "Gerar ideias visuais"}
        </button>

        <button
          className={`button button--secondary ${
            loadingYouTube ? "button--loading" : ""
          } ${youtubeGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingYouTube}
          onClick={onGenerateYouTube}
          type="button"
        >
          {loadingYouTube
            ? "Gerando kit para YouTube..."
            : youtubeGenerated
            ? "Gerado ✓ Gerar novamente kit para YouTube"
            : "Gerar kit para YouTube"}
        </button>
      </div>
    </section>
  );
}