"use client";

import { useMemo, useState } from "react";
import { ActionPanel } from "@/components/ActionPanel";
import { ContentKitViewer } from "@/components/ContentKitViewer";
import { Header } from "@/components/Header";
import { TranscriptViewer } from "@/components/TranscriptViewer";
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

export function TranscritorApp() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState("");
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

  const canGenerate = useMemo(() => transcript.trim().length > 0, [transcript]);

  function handleDownload(content: string, filename: string) {
    downloadTextFile(content, filename);
  }

  async function handleTranscribe() {
    if (!selectedFile) {
      setError("Selecione um arquivo antes de transcrever.");
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

      const data = await readJsonResponse<{ transcript: string }>(response);
      setTranscript(data.transcript);
      setBoostPlan("");
      setSocialKit("");
      setVisualKit("");
      setYoutubeKit("");
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Falha ao transcrever.");
    } finally {
      setIsTranscribing(false);
    }
  }

  async function handleGenerate(endpoint: string, setter: (value: string) => void, setLoading: (value: boolean) => void) {
    if (!canGenerate) {
      setError("Transcreva um conteúdo antes de gerar kits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ transcript })
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
          <section className="panel section-card">
            <div className="panel__header">
              <h2 className="panel__title">Upload</h2>
            </div>
            <div className="section-card__content">
              <UploadArea fileName={selectedFile?.name ?? null} onChange={setSelectedFile} />
              <div className="section-card__actions">
                <TranscribeButton disabled={!selectedFile || isTranscribing} loading={isTranscribing} onClick={handleTranscribe} />
              </div>
            </div>
          </section>
          {error ? <div className="error-banner">{error}</div> : null}
          <TranscriptViewer
            transcript={transcript}
            onDownloadTranscript={() => handleDownload(transcript, "transcricao.txt")}
          />
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
            onDownloadBoostPlan={() => handleDownload(boostPlan, "plano-impulsionamento.txt")}
            onDownloadSocialKit={() => handleDownload(socialKit, "kit-social.txt")}
            onDownloadVisualKit={() => handleDownload(visualKit, "kit-visual.txt")}
            onDownloadYoutubeKit={() => handleDownload(youtubeKit, "kit-youtube.txt")}
          />
        </div>
      </div>
    </main>
  );
}
