import { GoogleGenerativeAI } from "@google/generative-ai";

type InlineDataPart = {
  inlineData: {
    data: string;
    mimeType: string;
  };
};

type FileDataPart = {
  fileData: {
    fileUri: string;
    mimeType: string;
  };
};

type GeminiPart = string | InlineDataPart | FileDataPart;

function getClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada.");
  }

  return new GoogleGenerativeAI(apiKey);
}

function getModel() {
  const client = getClient();
  const modelName = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";

  return client.getGenerativeModel({ model: modelName });
}

export async function generateGeminiText(parts: GeminiPart[]) {
  const model = getModel();

  const response = await model.generateContent(
    parts.map((part) => {
      if (typeof part === "string") {
        return { text: part };
      }

      return part;
    })
  );

  return response.response.text().trim();
}
