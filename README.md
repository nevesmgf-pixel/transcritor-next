## Transcritor NextLevel

> Um assistente de mídia que transforma áudio e vídeo em conteúdo pronto para publicação e promoção.

O **Transcritor NextLevel** é um aplicativo web que utiliza IA para transformar gravações, aulas, vídeos e podcasts em um conjunto completo de materiais para marketing digital.

Mais do que um simples transcritor, o sistema funciona como um **assistente de conteúdo e distribuição**, ajudando a transformar uma única gravação em múltiplos formatos prontos para redes sociais.

O projeto utiliza **Google Gemini** para análise da transcrição e geração de conteúdo.

---

# Visão do projeto

O objetivo do Transcritor NextLevel é transformar uma única fonte de conteúdo em um conjunto completo de materiais de comunicação.

Fluxo simplificado:

Áudio / Vídeo  
↓  
Transcrição  
↓  
Extração de ideias  
↓  
Geração de conteúdo  
↓  
Estratégia de distribuição  

Isso permite transformar:

- aulas
- palestras
- podcasts
- vídeos longos

em materiais prontos para publicação e promoção.

---

# Principais funcionalidades

## Transcrição

- envio de áudio ou vídeo
- geração de transcrição com Google Gemini
- limpeza leve da fala (remoção de hesitações)
- visualização e edição da transcrição
- download em TXT

---

# Kits de conteúdo gerados

A partir da transcrição, o sistema pode gerar diferentes tipos de materiais.

---

## Kit Social

Sugestões de conteúdo para redes sociais.

Inclui:

- ideias de posts
- frases destacáveis
- possíveis trechos para carrosséis

---

## Kit YouTube

Conteúdo otimizado para publicação de vídeos.

Inclui:

- sugestão de título
- descrição
- hashtags

---

## Kit Visual

Geração de **prompts de imagem** baseados em trechos relevantes da transcrição.

Cada prompt inclui:

- trecho-base
- ideia central
- prompt visual pronto para uso

Compatível com geradores como:

- Midjourney
- DALL·E
- Stable Diffusion

---

## Plano de Impulsionamento

Geração de uma estratégia básica de tráfego pago para promover o conteúdo.

Inclui sugestões como:

- objetivo da campanha
- público principal
- público alternativo
- hooks de anúncio
- estrutura do anúncio
- formato de criativo recomendado
- orçamento inicial
- ideias de testes A/B

---

# Tipos de download

O sistema permite baixar:

- transcrição (`transcricao.txt`)
- kit social (`kit-social.txt`)
- kit YouTube (`kit-youtube.txt`)
- kit visual (`kit-visual.txt`)
- plano de impulsionamento (`plano-impulsionamento.txt`)

Todos os arquivos utilizam **UTF-8**.

---

# Arquitetura do projeto

O sistema utiliza uma arquitetura simples baseada em Next.js.

## Frontend

Construído com:

- Next.js
- React
- componentes reutilizáveis

Responsável por:

- upload de arquivos
- exibição da transcrição
- geração de kits
- downloads

---

## Backend

Implementado com **API Routes do Next.js**.

Responsável por:

- comunicação com a API do Gemini
- geração da transcrição
- geração de conteúdo

---

## Serviço externo

O projeto utiliza:

Google Gemini API

para:

- transcrição
- geração de conteúdo
- análise de texto

---

# Estrutura do projeto

Exemplo simplificado:

# Transcritor NextLevel

> Um assistente de mídia que transforma áudio e vídeo em conteúdo pronto para publicação e promoção.

O **Transcritor NextLevel** é um aplicativo web que utiliza IA para transformar gravações, aulas, vídeos e podcasts em um conjunto completo de materiais para marketing digital.

Mais do que um simples transcritor, o sistema funciona como um **assistente de conteúdo e distribuição**, ajudando a transformar uma única gravação em múltiplos formatos prontos para redes sociais.

O projeto utiliza **Google Gemini** para análise da transcrição e geração de conteúdo.

---

# Visão do projeto

O objetivo do Transcritor NextLevel é transformar uma única fonte de conteúdo em um conjunto completo de materiais de comunicação.

Fluxo simplificado:

Áudio / Vídeo  
↓  
Transcrição  
↓  
Extração de ideias  
↓  
Geração de conteúdo  
↓  
Estratégia de distribuição  

Isso permite transformar:

- aulas
- palestras
- podcasts
- vídeos longos

em materiais prontos para publicação e promoção.

---

# Principais funcionalidades

## Transcrição

- envio de áudio ou vídeo
- geração de transcrição com Google Gemini
- limpeza leve da fala (remoção de hesitações)
- visualização e edição da transcrição
- download em TXT

---

# Kits de conteúdo gerados

A partir da transcrição, o sistema pode gerar diferentes tipos de materiais.

---

## Kit Social

Sugestões de conteúdo para redes sociais.

Inclui:

- ideias de posts
- frases destacáveis
- possíveis trechos para carrosséis

---

## Kit YouTube

Conteúdo otimizado para publicação de vídeos.

Inclui:

- sugestão de título
- descrição
- hashtags

---

## Kit Visual

Geração de **prompts de imagem** baseados em trechos relevantes da transcrição.

Cada prompt inclui:

- trecho-base
- ideia central
- prompt visual pronto para uso

Compatível com geradores como:

- Midjourney
- DALL·E
- Stable Diffusion

---

## Plano de Impulsionamento

Geração de uma estratégia básica de tráfego pago para promover o conteúdo.

Inclui sugestões como:

- objetivo da campanha
- público principal
- público alternativo
- hooks de anúncio
- estrutura do anúncio
- formato de criativo recomendado
- orçamento inicial
- ideias de testes A/B

---

# Tipos de download

O sistema permite baixar:

- transcrição (`transcricao.txt`)
- kit social (`kit-social.txt`)
- kit YouTube (`kit-youtube.txt`)
- kit visual (`kit-visual.txt`)
- plano de impulsionamento (`plano-impulsionamento.txt`)

Todos os arquivos utilizam **UTF-8**.

---

# Arquitetura do projeto

O sistema utiliza uma arquitetura simples baseada em Next.js.

## Frontend

Construído com:

- Next.js
- React
- componentes reutilizáveis

Responsável por:

- upload de arquivos
- exibição da transcrição
- geração de kits
- downloads

---

## Backend

Implementado com **API Routes do Next.js**.

Responsável por:

- comunicação com a API do Gemini
- geração da transcrição
- geração de conteúdo

---

## Serviço externo

O projeto utiliza:

Google Gemini API

para:

- transcrição
- geração de conteúdo
- análise de texto

---

# Estrutura do projeto

Exemplo simplificado:

app/
components/

components/prompts/
kit_social.ts
kit_youtube.ts
kit_visual.ts
kit_impulsionamento.ts

api/
transcribe/

docs/
architecture.md
context.md
pseudocode.md
tasks.md


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



---

# Roadmap (possíveis evoluções)

Ideias futuras para o projeto:

- exportação de legendas em SRT
- extração automática de cortes para reels/shorts
- geração de roteiro para vídeos curtos
- player de áudio com sincronização da transcrição
- geração de múltiplos formatos de conteúdo
- histórico de transcrições

---

# Desenvolvimento assistido por IA

O projeto inclui arquivos que ajudam no desenvolvimento com ferramentas de IA:

- `context.md`
- `rules.md`
- `ui_flow.md`
- `pseudocode.md`
- `architecture.md`
- `implementation.md`
- `tasks.md`

Esses documentos descrevem:

- regras do projeto
- fluxo de interface
- arquitetura
- plano de desenvolvimento

---

# Licença

Uso experimental e educacional.
