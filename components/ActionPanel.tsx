type ActionPanelProps = {
  canGenerate: boolean;
  loadingSocial: boolean;
  loadingBoostPlan: boolean;
  loadingVisual: boolean;
  loadingYouTube: boolean;
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
          className="button button--secondary"
          disabled={!canGenerate || loadingSocial}
          onClick={onGenerateSocial}
          type="button"
        >
          {loadingSocial ? "Gerando kit social..." : "Gerar kit social"}
        </button>
        <button
          className="button button--secondary"
          disabled={!canGenerate || loadingBoostPlan}
          onClick={onGenerateBoostPlan}
          type="button"
        >
          {loadingBoostPlan ? "Gerando Plano de Impulsionamento..." : "Gerar Plano de Impulsionamento"}
        </button>
        <button
          className="button button--secondary"
          disabled={!canGenerate || loadingVisual}
          onClick={onGenerateVisual}
          type="button"
        >
          {loadingVisual ? "Gerando Kit visual..." : "Gerar Kit visual"}
        </button>

        <button
          className="button button--secondary"
          disabled={!canGenerate || loadingYouTube}
          onClick={onGenerateYouTube}
          type="button"
        >
          {loadingYouTube ? "Gerando kit YouTube..." : "Gerar kit YouTube"}
        </button>
      </div>
    </section>
  );
}