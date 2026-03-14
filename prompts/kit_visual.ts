export const KIT_VISUAL_PROMPT = `
A partir da transcrição abaixo, gere um "Kit visual".

Objetivo:
Criar prompts de imagem inspirados em trechos relevantes da fala.

Diretrizes importantes:

- Use trechos significativos da transcrição.
- Mantenha fidelidade ao sentido original do texto.
- Evite clichês genéricos como "pessoa olhando para o horizonte" ou "luz divina".
- Busque imagens simbólicas, conceituais ou narrativas que representem bem a ideia do trecho.
- Os prompts devem funcionar bem em geradores de imagem (Midjourney, DALL·E, Stable Diffusion etc.).
- Use descrições visuais claras, ricas e específicas.
- Evite termos abstratos sem representação visual.

Para cada item, use a seguinte estrutura:

Trecho-base:
(trecho curto da transcrição que inspirou a imagem)

Ideia central:
(resuma em uma frase a ideia principal do trecho)

Prompt visual:
(prompt de imagem completo e utilizável)

Regras adicionais:

- Gere entre 5 e 8 prompts visuais.
- Cada prompt deve ser visualmente diferente dos outros.
- Não invente informações que não estejam implícitas no trecho.
- Não escreva explicações fora da estrutura pedida.
- O texto deve ser claro e organizado.

TRANSCRIÇÃO:
"""
\${transcricao}
"""

Formato de saída:

Trecho-base:
...

Ideia central:
...

Prompt visual:
...

---

Trecho-base:
...

Ideia central:
...

Prompt visual:
...

---

Repita até gerar todos os prompts.

Transcrição:
`;
