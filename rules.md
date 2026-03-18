# Regras do sistema

## Estado

- `sourceText` é a única fonte de verdade
- nenhum endpoint depende diretamente de áudio ou vídeo

---

## Prompts

- devem ser centralizados em `lib/prompts.ts`
- não devem ser modificados automaticamente

---

## Endpoints

- devem receber `sourceText`
- devem retornar conteúdo estruturado

---

## UI

- deve refletir o estado real do sistema
- deve evitar perda silenciosa de dados

---

## Nomeação

- evitar uso de "transcrição" fora do fluxo de mídia
- priorizar "texto base" ou "conteúdo"