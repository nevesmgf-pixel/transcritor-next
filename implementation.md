# Implementação

## Stack

- Next.js (App Router)
- React
- TypeScript
- Google Gemini API

---

## Estrutura de pastas
app/
components/
lib/


---

## Componentes principais

### ContentEngine

Componente central da aplicação.

Responsável por:

- gerenciar o estado `sourceText`
- controlar o modo de entrada (texto ou mídia)
- orquestrar chamadas para os endpoints
- armazenar resultados gerados

---

### SourceTextViewer

- exibe o texto base
- permite edição no modo texto
- permite download do conteúdo

---

### ActionPanel

- botões de geração de conteúdo
- controle de loading
- suporte a regeneração

---

### ContentKitViewer

- exibe os resultados gerados
- permite download dos kits

---

## Fluxo de transcrição

1. usuário envia arquivo
2. frontend envia `FormData` para `/api/transcribe`
3. backend converte arquivo para base64
4. Gemini gera texto
5. retorna `sourceText`
6. frontend atualiza estado

---

## Fluxo de geração

1. usuário aciona ação
2. frontend envia `sourceText`
3. backend constrói prompt
4. Gemini retorna conteúdo
5. frontend armazena resultado

---

## Prompts

Centralizados em:
lib/prompts.ts


Cada função recebe:

```ts
(sourceText: string)
```

---

## Cliente Gemini

Responsável por:

- envio de prompts
- envio de mídia
- retorno de conteúdo

---

## Decisões importantes

- uso de sourceText como fonte única
- separação clara entre UI e geração
- centralização de prompts
- endpoints simples e especializados