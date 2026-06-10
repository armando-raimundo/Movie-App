# Movie-App
Catálogo de filmes moderno desenvolvido com React, Next.js e TypeScript. Consumo da API TheMovieDB (TMDB) utilizando Axios com paginação, filtros e design responsivo.

# 🎬 Movie App - Catálogo de Filmes

Uma aplicação web moderna para exploração de filmes e séries, que consome os dados em tempo real da API do [TheMovieDB (TMDB)](https://themoviedb.org). Projeto desenvolvido com foco em boas práticas de programação, tipagem estática e performance.

## 🚀 Tecnologias Utilizadas

* **React** & **Next.js** (App Router) — Estrutura e renderização otimizada.
* **TypeScript** — Tipagem estática para maior segurança e manutenção do código.
* **Axios** — Cliente HTTP para consumo da API com instâncias configuradas.
* **Tailwind CSS** — Estilização rápida, moderna e totalmente responsiva.

## ✨ Funcionalidades Principais

* **Consumo de API em Tempo Real**: Listagem de filmes populares, tendências e próximas estreias.
* **Procura Avançada**: Filtro de filmes por título, género ou ano de lançamento.
* **Detalhes do Filme**: Página exclusiva com sinopse, nota técnica, elenco e trailers.
* **Componentização Limpa**: Código modularizado para reaproveitamento de componentes.
* **Tratamento de Erros**: Gestão de estados de carregamento (*loading*) e falhas de rede com Axios.

## 🛠️ Como Executar o Projeto

### Pré-requisitos
Antes de começar, precisa de ter instalado: [Node.js](https://nodejs.org) e uma chave de API do TMDB.

### Passo a Passo

1. **Clonar o repositório**
   ```bash
   git clone https://github.com
   cd NOME_DO_REPOSITORIO
   ```

2. **Instalar as dependências**
   ```bash
   npm install
   ```

3. **Configurar as Variáveis de Ambiente**
   Crie um ficheiro `.env.local` na raiz do projeto e adicione a sua chave do TMDB:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
   NEXT_PUBLIC_TMDB_BASE_URL=https://themoviedb.org
   ```

4. **Iniciar o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📂 Estrutura do Projeto (Opcional)
```text

├── components/  # Componentes reutilizáveis (Card, Navbar, etc.)
├── services/    # Configuração do Axios e chamadas à API
├── types/       # Interfaces e Types do TypeScript
└── app/         # Páginas e rotas do Next.js
```

---
💡 *Projeto desenvolvido para portefólio pessoal.*
