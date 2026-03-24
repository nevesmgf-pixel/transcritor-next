import { NextResponse } from "next/server";
import { generateGeminiText } from "@/lib/gemini";
import { buildTranscriptionPrompt } from "@/lib/prompts";
import { isSupportedUrl, fetchYouTubeTitle } from "@/lib/extractAudio";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { url?: string };

    if (!body.url || typeof body.url !== "string") {
      return NextResponse.json(
        { error: "URL não fornecida." },
        { status: 400 }
      );
    }

    const url = body.url.trim();

    if (!isSupportedUrl(url)) {
      return NextResponse.json(
        {
          error:
            "URL não suportada. No momento, apenas links do YouTube são aceitos.",
        },
        { status: 400 }
      );
    }

    const [sourceText, title] = await Promise.all([
      generateGeminiText([
        buildTranscriptionPrompt(),
        {
          fileData: {
            fileUri: url,
            mimeType: "video/*",
          },
        },
      ]),
      fetchYouTubeTitle(url),
    ]);

    return NextResponse.json({ sourceText, title });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Falha ao transcrever a partir da URL.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
