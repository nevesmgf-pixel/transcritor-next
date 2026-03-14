export const transcriptionPrompt = `
Transcreva integralmente este áudio em português do Brasil.

Regras importantes:

1. Preserve o sentido exato do que foi dito.
2. Não resuma e não omita partes.
3. Corrija pontuação e organize o texto em parágrafos naturais.
4. Remova muletas de fala como:
   "eh", "ah", "hum", "éé", "hã", quando não agregarem sentido.
5. Não reescreva frases nem mude o estilo da fala.
6. Mantenha a estrutura natural de fala da pessoa.
7. Se houver repetições típicas da fala ("o o", "de de"), mantenha apenas uma.
8. Preserve nomes próprios, termos técnicos e referências.

Objetivo:
Produzir uma transcrição limpa e fluida para leitura, mas fiel ao que foi falado.

Não invente informações e não adicione explicações.
`;