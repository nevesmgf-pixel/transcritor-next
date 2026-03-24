const YOUTUBE_REGEX =
  /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/;

/** Verifica se a URL é de uma plataforma suportada. */
export function isSupportedUrl(url: string): boolean {
  return YOUTUBE_REGEX.test(url);
}

/** Identifica a plataforma a partir da URL. */
export function detectPlatform(url: string): "youtube" | "unsupported" {
  if (YOUTUBE_REGEX.test(url)) return "youtube";
  return "unsupported";
}

/** Busca o título do vídeo via YouTube oEmbed API (sem autenticação). */
export async function fetchYouTubeTitle(url: string): Promise<string> {
  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const response = await fetch(oembedUrl);

    if (!response.ok) return "youtube-video";

    const data = (await response.json()) as { title?: string };
    return data.title ?? "youtube-video";
  } catch {
    return "youtube-video";
  }
}
