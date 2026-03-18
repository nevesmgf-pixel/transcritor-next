import { NextResponse } from "next/server";
import { generateGeminiText } from "@/lib/gemini";
import { buildSocialKitPrompt } from "@/lib/prompts";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { sourceText?: string };
    const sourceText = body.sourceText?.trim();

    if (!sourceText) {
      return NextResponse.json(
        { error: "sourceText é obrigatório." },
        { status: 400 }
      );
    }

    const prompt = buildSocialKitPrompt(sourceText);
    const content = await generateGeminiText([prompt]);

    return NextResponse.json({ content });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Falha ao gerar kit social.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}