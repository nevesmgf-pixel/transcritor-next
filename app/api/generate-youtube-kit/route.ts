import { NextResponse } from "next/server";
import { generateGeminiText } from "@/lib/gemini";
import { buildYouTubeKitPrompt } from "@/lib/prompts";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { transcript?: string };
    const transcript = body.transcript?.trim();

    if (!transcript) {
      return NextResponse.json({ error: "Transcrição obrigatória." }, { status: 400 });
    }

    const content = await generateGeminiText([buildYouTubeKitPrompt(transcript)]);

    return NextResponse.json({ content });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Falha ao gerar kit YouTube.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
