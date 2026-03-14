export function buildTranscriptionPrompt() {
  return [
    "Você é um transcritor preciso.",
    "Transcreva integralmente o conteúdo do arquivo enviado em português do Brasil.",
    "Não resuma, não reorganize e não invente trechos.",
    "Se houver partes inaudíveis, sinalize de forma curta no ponto correspondente."
  ].join(" ");
}

export function buildSocialKitPrompt(transcript: string) {
  return `Você é um editor de conteúdo e estrategista de comunicação.

Sua tarefa é analisar a transcrição abaixo e transformá-la em um pequeno kit de comunicação.

IMPORTANTE:
- Não invente ideias que não estejam sustentadas pela transcrição
- Não use frases genéricas de coach ou clichês
- Preserve o sentido central

TRANSCRIÇÃO:
${transcript}

ENTREGUE:

1. três frases de destaque
2. texto para newsletter
3. ideia de carrossel
4. mini release
5. possíveis títulos`;
}

export function buildYouTubeKitPrompt(transcript: string) {
  return `Analise a transcrição abaixo e gere um kit de YouTube fiel ao conteúdo.

IMPORTANTE:
- Não invente fatos que não estejam na transcrição
- Preserve o tema central
- Escreva em português do Brasil

TRANSCRIÇÃO:
${transcript}

ENTREGUE:
- título sugerido
- descrição do vídeo
- sugestões de capítulos
- ideias de cortes
- sugestões de chamadas para thumbnail`;
}
