
# ⚙️ Content Engine

Uma ferramenta que transforma áudio, vídeo e texto em múltiplos formatos de conteúdo.

## ✨ O que o app faz

A partir de um único **texto base**, você pode gerar:

- Conteúdo para redes sociais (posts, carrossel, newsletter)
- Kit completo para YouTube (títulos, descrição, hashtags)
- Ideias visuais (prompts para geração de imagem)
- Plano de impulsionamento (estratégia + público + mensagem)

---

## Como funciona

O sistema unifica diferentes entradas em um único estado central:

- Upload de **áudio ou vídeo**
- Entrada de **texto manual**

Tudo é convertido para um único formato interno:

`sourceText`

A partir disso, o app executa diferentes pipelines de geração de conteúdo.

---

## Arquitetura

### Frontend
- Next.js (App Router)
- React + TypeScript
- Estado centralizado em `sourceText`

### Backend
- API Routes do Next.js
- Integração com Google Gemini

### Estrutura de fluxo

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

## Decisão de arquitetura chave

Toda a aplicação gira em torno de um único estado:

```ts
sourceText
```

Isso permite:

- unificar múltiplas entradas
- simplificar os endpoints
- reutilizar o mesmo conteúdo para diferentes outputs
- desacoplar transcrição de geração de conteúdo

---

## Endpoints

### Transcrição

POST /api/transcribe

    - recebe áudio ou vídeo

    - retorna sourceText

### Geração de Conteúdo

POST /api/generate-social-kit

POST /api/generate-visual-kit

POST /api/generate-youtube-kit

POST /api/generate-boost-plan



Todos os endpoints de geração recebem:

{ "sourceText": "..." }

---

## Principais funcionalidades

- Upload de áudio e vídeo
- Transcrição automática com IA
- Entrada manual de texto
- Geração de múltiplos formatos de conteúdo
- Download de todos os resultados
- Interface com feedback de loading e estado
- Regeneração de conteúdo sob demanda

---

## Stack

- Next.js
- React
- TypeScript
- Google Gemini API

---

## Como rodar o projeto

npm install
npm run dev

Crie um arquivo .env.local com:

GOOGLE_API_KEY=your_api_key_here

---

## Melhorias futuras

- histórico de gerações
- edição refinada de outputs
- exportação estruturada (Markdown / JSON)
- presets de conteúdo por nicho
- autosave do texto base

---

## Insight por trás do projeto

O principal desafio não é gerar conteúdo — é reutilizar bem uma mesma fonte.

Este projeto resolve isso criando um pipeline simples:

um conteúdo → múltiplas formas de distribuição

---

## Status

Projeto funcional com arquitetura consolidada e foco em transformação de conteúdo com IA.

---

## Demonstração

---

## Licença
