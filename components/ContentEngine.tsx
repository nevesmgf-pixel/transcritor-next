"use client";

import { useMemo, useState } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { ContentKitViewer } from "@/components/ContentKitViewer";
import { Header } from "@/components/Header";
import { SourceTextViewer } from "@/components/SourceTextViewer";
import { TranscribeButton } from "@/components/TranscribeButton";
import { UploadArea } from "@/components/UploadArea";
import { downloadTextFile } from "@/lib/downloadTextFile";

async function readJsonResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json()) as T & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error ?? "Falha na requisição.");
  }

  return payload;
}

export function ContentEngine() {
  // Modo de entrada: "text" (texto manual), "audio" (upload de mídia) ou "link" (URL)
  const [inputMode, setInputMode] = useState<"text" | "audio" | "link">("text");

  // Texto-base central — alimenta todas as ações (social kit, visual kit, etc.)
  const [sourceText, setSourceText] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState("");
  const [urlTitle, setUrlTitle] = useState("");
  const [boostPlan, setBoostPlan] = useState("");
  const [socialKit, setSocialKit] = useState("");
  const [visualKit, setVisualKit] = useState("");
  const [youtubeKit, setYoutubeKit] = useState("");
  const [error, setError] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isGeneratingBoostPlan, setIsGeneratingBoostPlan] = useState(false);
  const [isGeneratingSocial, setIsGeneratingSocial] = useState(false);
  const [isGeneratingVisual, setIsGeneratingVisual] = useState(false);
  const [isGeneratingYoutube, setIsGeneratingYoutube] = useState(false);
  const [fileBaseName, setFileBaseName] = useState("");

  const canGenerate = useMemo(() => sourceText.trim().length > 0, [sourceText]);

  // Gera nome base para arquivos exportados
  function getBaseFileName(): string {
    // Se usuário definiu um título base, usar com prioridade
    if (fileBaseName.trim()) {
      return sanitizeFileName(fileBaseName.trim());
    }

    // Se for link, usar título do vídeo
    if (inputMode === "link" && urlTitle) {
      return sanitizeFileName(urlTitle);
    }

    // Se for áudio/vídeo, usar nome do arquivo original
    if (inputMode === "audio" && selectedFile) {
      return sanitizeFileName(selectedFile.name.replace(/\.[^/.]+$/, ""));
    }

    // Texto manual
    return "texto-manual";
  }

  // Sanitiza nome para arquivo seguro
  function sanitizeFileName(name: string): string {
    return name
      .replace(/[^a-zA-Z0-9\s\-_]/g, "") // Remove caracteres inválidos
      .replace(/\s+/g, "-") // Substitui espaços por hífen
      .replace(/-+/g, "-") // Remove hífens duplicados
      .replace(/^-|-$/g, ""); // Remove hífens no início/fim
  }

  // Limpa kits gerados ao trocar de modo (evita estado inconsistente)
  function handleModeChange(mode: "text" | "audio" | "link") {
    if (mode === inputMode) return;

    const hasContent =
    sourceText.trim().length > 0 ||
    boostPlan.trim().length > 0 ||
    socialKit.trim().length > 0 ||
    visualKit.trim().length > 0 ||
    youtubeKit.trim().length > 0;

  if (hasContent) {
    const shouldContinue = window.confirm(
      "Trocar de modo vai limpar o texto atual e os kits gerados. Deseja continuar?"
    );

    if (!shouldContinue) return;
  }

  setInputMode(mode);
  setSourceText("");
  setSelectedFile(null);
  setMediaUrl("");
  setUrlTitle("");
  setFileBaseName("");
  setBoostPlan("");
  setSocialKit("");
  setVisualKit("");
  setYoutubeKit("");
  setError("");
}

  function handleDownload(content: string, filename: string) {
    downloadTextFile(content, filename);
  }

  function handleFileChange(file: File | null) {
    setSelectedFile(file);

    if (!file) return;

    setSourceText("");
    setBoostPlan("");
    setSocialKit("");
    setVisualKit("");
    setYoutubeKit("");
    setError("");
  }

  async function handleTranscribe() {
    if (!selectedFile) {
      setError("Selecione um arquivo antes de gerar o texto.");
      return;
    }

    setError("");
    setIsTranscribing(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/transcribe", {
        method: "POST",
        body: formData
      });

      const data = await readJsonResponse<{ sourceText: string }>(response);
      setSourceText(data.sourceText);
      setUrlTitle("");
      setBoostPlan("");
      setSocialKit("");
      setVisualKit("");
      setYoutubeKit("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Falha ao gerar texto.");
    } finally {
      setIsTranscribing(false);
    }
  }

  async function handleTranscribeUrl() {
    const trimmed = mediaUrl.trim();

    if (!trimmed) {
      setError("Cole um link antes de gerar o texto.");
      return;
    }

    setError("");
    setIsTranscribing(true);

    try {
      const response = await fetch("/api/transcribe-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });

      const data = await readJsonResponse<{ sourceText: string; title: string }>(response);
      setSourceText(data.sourceText);
      setUrlTitle(data.title);
      setSelectedFile(null);
      setBoostPlan("");
      setSocialKit("");
      setVisualKit("");
      setYoutubeKit("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Falha ao transcrever a partir do link.");
    } finally {
      setIsTranscribing(false);
    }
  }

  async function handleGenerate(endpoint: string, setter: (value: string) => void, setLoading: (value: boolean) => void) {
    if (!canGenerate) {
      setError("Adicione ou gere um texto base antes de criar os kits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Usa sourceText como fonte única para todas as ações
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ sourceText })
      });

      const data = await readJsonResponse<{ content: string }>(response);
      setter(data.content);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Falha ao gerar conteúdo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <div className="page-shell__content">
        <Header />
        <div className="stack">
          {/* Seletor de modo de entrada */}
          <div className="mode-selector">
            <button
              className={`mode-selector__option ${inputMode === "text" ? "mode-selector__option--active" : ""}`}
              onClick={() => handleModeChange("text")}
              type="button"
            >
              Texto
            </button>
            <button
              className={`mode-selector__option ${inputMode === "audio" ? "mode-selector__option--active" : ""}`}
              onClick={() => handleModeChange("audio")}
              type="button"
            >
              Mídia
            </button>
            <button
              className={`mode-selector__option ${inputMode === "link" ? "mode-selector__option--active" : ""}`}
              onClick={() => handleModeChange("link")}
              type="button"
            >
              Link
            </button>
          </div>

          {/* Modo Mídia: upload de arquivo */}
          {inputMode === "audio" && (
            <section className="panel section-card">
              <div className="panel__header">
                <h2 className="panel__title">Envie sua mídia</h2>
              </div>
              <div className="section-card__content">
                <UploadArea fileName={selectedFile?.name ?? null} onChange={handleFileChange} />
                <div className="section-card__actions">
                  <TranscribeButton disabled={!selectedFile || isTranscribing} loading={isTranscribing} onClick={handleTranscribe} />
                </div>
              </div>
            </section>
          )}

          {/* Modo Link: URL do YouTube */}
          {inputMode === "link" && (
            <section className="panel section-card">
              <div className="panel__header">
                <h2 className="panel__title">Cole um link do YouTube</h2>
              </div>
              <div className="section-card__content">
                <input
                  type="url"
                  className="input"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                />
                <div className="section-card__actions">
                  <TranscribeButton disabled={!mediaUrl.trim() || isTranscribing} loading={isTranscribing} onClick={handleTranscribeUrl} />
                </div>
              </div>
            </section>
          )}

          {/* Texto base — sempre editável, seja texto digitado ou transcrição de áudio/vídeo */}
          <SourceTextViewer
            sourceText={sourceText}
            onDownloadText={() => handleDownload(sourceText, `${getBaseFileName()}-texto-base.txt`)}
            onSourceTextChange={setSourceText}
          />
          {/* Campo opcional para título base dos arquivos */}
          <section className="panel section-card">
            <div className="panel__header">
              <h2 className="panel__title">Título base dos arquivos (opcional)</h2>
            </div>
            <div className="section-card__content">
              <input
                type="text"
                className="input"
                placeholder="Ex: meu-projeto (deixe em branco para usar nome automático)"
                value={fileBaseName}
                onChange={(e) => setFileBaseName(e.target.value)}
              />
            </div>
          </section>
          
          {error ? <div className="error-banner">{error}</div> : null}
          <ActionPanel
            canGenerate={canGenerate}
            loadingBoostPlan={isGeneratingBoostPlan}
            loadingSocial={isGeneratingSocial}
            loadingVisual={isGeneratingVisual}
            loadingYouTube={isGeneratingYoutube}
            boostPlanGenerated={boostPlan.trim().length > 0}
            socialGenerated={socialKit.trim().length > 0}
            visualGenerated={visualKit.trim().length > 0}
            youtubeGenerated={youtubeKit.trim().length > 0}
            onGenerateBoostPlan={() => handleGenerate("/api/generate-boost-plan", setBoostPlan, setIsGeneratingBoostPlan)}
            onGenerateSocial={() => handleGenerate("/api/generate-social-kit", setSocialKit, setIsGeneratingSocial)}
            onGenerateVisual={() => handleGenerate("/api/generate-visual-kit", setVisualKit, setIsGeneratingVisual)}
            onGenerateYouTube={() => handleGenerate("/api/generate-youtube-kit", setYoutubeKit, setIsGeneratingYoutube)}
          />
          <ContentKitViewer
            boostPlan={boostPlan}
            socialKit={socialKit}
            visualKit={visualKit}
            youtubeKit={youtubeKit}
            onDownloadBoostPlan={() => handleDownload(boostPlan, `${getBaseFileName()}-plano-impulsionamento.txt`)}
            onDownloadSocialKit={() => handleDownload(socialKit, `${getBaseFileName()}-kit-social.txt`)}
            onDownloadVisualKit={() => handleDownload(visualKit, `${getBaseFileName()}-kit-visual.txt`)}
            onDownloadYoutubeKit={() => handleDownload(youtubeKit, `${getBaseFileName()}-kit-youtube.txt`)}
          />
        </div>
      </div>
    </main>
  );
}
