import { NextResponse } from "next/server";
import { generateGeminiText } from "@/lib/gemini";
import { buildTranscriptionPrompt } from "@/lib/prompts";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Arquivo inválido." },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer()).toString("base64");

    const sourceText = await generateGeminiText([
      buildTranscriptionPrompt(),
      {
        inlineData: {
          data: bytes,
          mimeType: file.type || "application/octet-stream"
        }
      }
    ]);

    return NextResponse.json({ sourceText });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Falha ao transcrever arquivo.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}