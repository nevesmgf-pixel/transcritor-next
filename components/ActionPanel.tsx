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
          disabled={!canGenerate || loadingSocial || socialGenerated}
          onClick={onGenerateSocial}
          type="button"
        >
          {loadingSocial
            ? "Gerando kit social..."
            : socialGenerated
            ? "Kit social gerado ✓"
            : "Gerar kit social"}
        </button>

        <button
          className={`button button--secondary ${
            loadingBoostPlan ? "button--loading" : ""
          } ${boostPlanGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingBoostPlan || boostPlanGenerated}
          onClick={onGenerateBoostPlan}
          type="button"
        >
          {loadingBoostPlan
            ? "Gerando Plano de Impulsionamento..."
            : boostPlanGenerated
            ? "Plano de Impulsionamento gerado ✓"
            : "Gerar Plano de Impulsionamento"}
        </button>

        <button
          className={`button button--secondary ${
            loadingVisual ? "button--loading" : ""
          } ${visualGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingVisual || visualGenerated}
          onClick={onGenerateVisual}
          type="button"
        >
          {loadingVisual
            ? "Gerando Kit visual..."
            : visualGenerated
            ? "Kit visual gerado ✓"
            : "Gerar Kit visual"}
        </button>

        <button
          className={`button button--secondary ${
            loadingYouTube ? "button--loading" : ""
          } ${youtubeGenerated ? "button--done" : ""}`}
          disabled={!canGenerate || loadingYouTube || youtubeGenerated}
          onClick={onGenerateYouTube}
          type="button"
        >
          {loadingYouTube
            ? "Gerando kit YouTube..."
            : youtubeGenerated
            ? "Kit YouTube gerado ✓"
            : "Gerar kit YouTube"}
        </button>
      </div>
    </section>
  );
}