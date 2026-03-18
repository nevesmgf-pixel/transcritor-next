# Arquitetura

## Visão geral

A aplicação é baseada em um modelo simples e consistente:

- múltiplas entradas
- um estado central
- múltiplas saídas

---

## Estrutura
Entrada (áudio | vídeo | texto)
↓
sourceText
↓
┌───────────────────────────┐
│ Social Kit                │
│ Visual Kit                │
│ YouTube Kit               │
│ Boost Plan                │
└───────────────────────────┘


---

## Camadas

### Frontend

Responsável por:

- entrada de conteúdo
- visualização do texto base
- acionamento de geração
- exibição dos resultados

Stack:
- Next.js
- React
- TypeScript

---

### Backend (API Routes)

Responsável por:

- transcrição de mídia
- geração de conteúdo via prompts
- integração com Gemini API

---

### Integração externa

- Google Gemini API

---

## Estado central

Toda a aplicação gira em torno de:

```ts
sourceText
``` 

Ele é:

- gerado via transcrição
- ou inserido manualmente
- consumido por todos os endpoints

---

## Endpoints

### Transcrição

POST /api/transcribe

Entrada:

arquivo (áudio ou vídeo)

Saída:

{ "sourceText": "..." }

---

## Geração de conteúdo

Todos os endpoints recebem:

{ "sourceText": "..." }

Endpoints:

/api/generate-social-kit

/api/generate-visual-kit

/api/generate-youtube-kit

/api/generate-boost-plan
---

## Decisão arquitetural principal

Separar:

- entrada de conteúdo
- transformação de conteúdo

E unificar tudo em sourceText.

---

## Benefícios

- simplicidade de fluxo
- reutilização de conteúdo
- escalabilidade de features
- facilidade de manutenção
