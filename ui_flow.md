# Fluxo de UI

## Entrada de conteúdo

O usuário escolhe entre dois modos:

### Texto
- digita diretamente no campo
- o conteúdo já vira `sourceText`

### Mídia
- faz upload de áudio ou vídeo
- aciona transcrição
- resultado vira `sourceText`

---

## Texto base

O texto base é sempre visível:

- editável no modo texto
- somente leitura no modo mídia

---

## Geração de conteúdo

A partir do texto base, o usuário pode:

- gerar kit social
- gerar kit visual
- gerar kit YouTube
- gerar plano de impulsionamento

---

## Estados

### Loading
- cada ação possui seu próprio estado

### Erro
- exibido em banner

### Conteúdo gerado
- exibido por seção
- disponível para download

---

## Troca de modo

- solicita confirmação se houver conteúdo
- evita perda de dados

---

## Regeneração

- todos os kits podem ser gerados novamente
- sem necessidade de reset