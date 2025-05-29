# 📝 Consumindo api com Axios e React Router

Este é um projeto simples desenvolvido com **React**, utilizando **React Router** para navegação, **Axios** para consumo de API REST, e **SCSS** para estilização com uso de variáveis e mixins.

---

## 🚀 Funcionalidades

- Listagem de posts buscados da API JSONPlaceholder
- Visualização de post individual pelo ID na URL
- Navegação entre páginas: Home, Novo Post e Post individual
- Layout estilizado com SCSS, usando variáveis e mixins reutilizáveis
- Navbar com links para Home e Novo Post

---

## 📁 Estrutura do projeto

- **src/**
  - **axios/config.js** — configuração do Axios com base para API
  - **components/**
    - `Navbar.jsx` — barra de navegação
  - **routes/**
    - `Home.jsx` — listagem de posts
    - `NewPost.jsx` — formulário para criar post
    - `Posts.jsx` — post individual
  - `App.jsx` — componente principal com layout e `<Outlet />`
  - `index.jsx` — ponto de entrada com React Router configurado
  - **styles/**
    - `variables.scss` — variáveis SCSS para cores e estilos
    - `mixies.scss` — mixins SCSS reutilizáveis (botões, etc)
    - `index.scss` — estilos globais
    - Estilos específicos para cada componente (`Home.scss`, `Navbar.scss`, etc)

---

## 💻 Tecnologias usadas

- React 18+
- React Router DOM v6+
- Axios
- SCSS (Sass)
- JSONPlaceholder API para dados fictícios

---

## ⚙️ Como rodar o projeto



```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
cd npm install
npm run dev
