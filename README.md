# Transcritor Gemini — Versão Next.js (Experimento)

Este projeto é uma reimplementação experimental do aplicativo **Transcritor Gemini**, originalmente desenvolvido em Python com Streamlit.

O objetivo desta versão é explorar uma arquitetura moderna baseada em:

- Next.js
- API routes
- separação entre frontend e backend
- organização orientada a documentação
- desenvolvimento assistido por IA

---

# O que o app faz

O aplicativo permite:

1. enviar um arquivo de áudio ou vídeo
2. gerar uma transcrição com Google Gemini
3. visualizar e editar a transcrição
4. baixar a transcrição em TXT
5. gerar um kit editorial para mídias sociais
6. baixar o kit editorial para mídias sociais em TXT
7. gerar um kit editorial para YouTube
8. baixar o kit editorial para YouTube em TXT
---

# Arquitetura

O sistema é dividido em duas camadas:

Frontend
Next.js + React

Backend
Next.js API Routes

Serviço externo
Google Gemini API

---

# Funcionalidades

-  upload de áudio ou vídeo
- transcrição com Google Gemini
- visualização e edição da transcrição
- download da transcrição em TXT
- geração de kit editorial para mídias sociais
- download do kit social em TXT
- geração de kit editorial para YouTube
- download do kit YouTube em TXT

---

# Estrutura de documentação

O projeto inclui arquivos para guiar desenvolvimento assistido por IA:

- context.md
- rules.md
- ui_flow.md
- pseudocode.md
- architecture.md
- implementation.md
- tasks.md

---

# Como rodar o projeto

1. Clone o repositório

git clone <repo-url>

2. Instale as dependências

npm install

3. Configure as variáveis de ambiente

Crie um arquivo .env.local com:

GOOGLE_API_KEY=...

4. Rode o servidor de desenvolvimento

npm run dev

O app ficará disponível em:

http://localhost:3000
